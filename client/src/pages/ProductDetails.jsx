import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      await axios.post('http://localhost:5000/api/cart', {
        product_id: product._id,
        quantity: 1
      });
      navigate('/cart');
    } catch (err) {
      console.error('Error adding to cart:', err);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
      })
      .then((data) => {
        const baseImageUrl = "http://localhost:5000/products/";
        const images = [];
        if (data.image1) images.push(baseImageUrl + data.image1);
        if (data.image2) images.push(baseImageUrl + data.image2);
        if (data.image3) images.push(baseImageUrl + data.image3);
        if (data.image4) images.push(baseImageUrl + data.image4);

        setProduct({
          ...data,
          images,
          offerPrice: data.price - (data.discount || 0),
          description: data.description || "No description available",
          rating: data.rating || 4,
        });

        setThumbnail(images[0] || null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-container">
      <nav className="breadcrumb">
        Home / Products / {product.category} / <span className="highlight">{product.pname}</span>
      </nav>

      <div className="details-card">
        <div className="image-section">
          {thumbnail ? (
            <img src={thumbnail} alt="Selected product" className="main-image" />
          ) : (
            <p>No image available</p>
          )}
          <div className="thumbnail-row">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`thumbnail ${thumbnail === img ? "active" : ""}`}
                onClick={() => setThumbnail(img)}
              />
            ))}
          </div>
        </div>

        <div className="info-section">
          <h1 className="product-name">{product.pname}</h1>

          <div className="rating">
            {Array(5)
              .fill("")
              .map((_, i) =>
                i < product.rating ? (
                  <svg key={i} className="star filled" viewBox="0 0 24 24" fill="#ffb400" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ) : (
                  <svg key={i} className="star" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                )
              )}
            <span className="rating-num">({product.rating})</span>
          </div>

          <div className="price-section">
            <p className="old-price">${product.price.toFixed(2)}</p>
            <p className="offer-price">${product.offerPrice.toFixed(2)}</p>
            <small className="tax-info">(inclusive of all taxes)</small>
          </div>

          <section className="description-section">
            <h2>About Product</h2>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{product.shortDescription}</h4>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {product.features && (
              <>
                
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  {product.features.split(',').map((feature, i) => (
                    <li key={i}>{feature.trim()}</li>
                  ))}
                </ul>
              </>
            )}
          </section>

          <div className="actions">
            <button className="btn btn-secondary" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;



/* CSS styles */
const style = `
.product-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}
.breadcrumb {
  font-size: 14px;
  margin-bottom: 24px;
}
.highlight {
  color: #4f46e5;
  font-weight: 600;
}
.details-card {
  display: flex;
  gap: 40px;
  background: #fafafa;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgb(0 0 0 / 0.05);
}
.image-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-image {
  width: 100%;
  max-width: 350px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgb(0 0 0 / 0.1);
  object-fit: contain;
  margin-bottom: 16px;
}
.thumbnail-row {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
}
.thumbnail {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.6;
  border: 2px solid transparent;
  transition: opacity 0.3s ease, border-color 0.3s ease;
}
.thumbnail:hover,
.thumbnail.active {
  opacity: 1;
  border-color: #4f46e5;
}
.info-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.product-name {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
}
.rating {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 24px;
}
.star {
  width: 24px;
  height: 24px;
}
.rating-num {
  font-size: 16px;
  color: #666;
  margin-left: 8px;
}
.price-section {
  margin-bottom: 24px;
}
.old-price {
  text-decoration: line-through;
  color: #999;
  font-size: 16px;
}
.offer-price {
  font-size: 28px;
  font-weight: 700;
  color: #111;
}
.tax-info {
  font-size: 12px;
  color: #666;
}
.description-section h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
.description-section ul {
  list-style-type: disc;
  padding-left: 20px;
  color: #555;
  font-size: 15px;
}
.actions {
  margin-top: auto;
  display: flex;
  gap: 16px;
}
.btn {
  flex: 1;
  padding: 14px 0;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgb(79 70 229 / 0.2);
}
.btn-primary {
  background-color: #4f46e5;
  color: white;
}
.btn-primary:hover {
  background-color: #4338ca;
  box-shadow: 0 6px 15px rgb(67 56 202 / 0.4);
}
.btn-secondary {
  background-color: #e0e7ff;
  color: #4f46e5;
  box-shadow: none;
}
.btn-secondary:hover {
  background-color: #c7d2fe;
}
`;

// Inject styles into document (optional, for demo/testing purpose)
if (typeof document !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = style;
  document.head.appendChild(styleTag);
}
