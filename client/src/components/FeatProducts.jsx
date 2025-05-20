import React, { useEffect, useState } from 'react'
import axios from 'axios'  // You can use fetch instead if you prefer
import { Link } from 'react-router-dom';


const FeatProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://mart-mongo-server.onrender.com/api/products') // Adjust URL to your backend endpoint
        setProducts(res.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch products')
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleAddToWishlist = async (productId) => {
    try {
      const user_id = 4001; // Replace this with the actual logged-in user ID
      await axios.post('https://mart-mongo-server.onrender.com/api/wishlist', {
        product_id: productId,
        user_id: user_id,
      });
      alert('Added to wishlist!');
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      alert('Failed to add to wishlist');
    }
  };

  const backendUrl = 'https://mart-mongo-server.onrender.com';

  if (loading) return <p>Loading products...</p>
  if (error) return <p>{error}</p>

  return (
    <section className="featured-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titie-section wow fadeInDown animated ">
              <h1>FEATURED PRODUCTS</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="filter-menu">
              <ul className="button-group sort-button-group">
                <li className="button active" data-category="all">All<span>{products.length}</span></li>
                {/* You could dynamically calculate categories too */}
              </ul>
            </div>
          </div>
        </div>
        <div className="row featured isotope">
          {products.map((product) => (
            <div
              key={product._id || product.id}
              className={`col-md-3 col-sm-6 col-xs-12 cat-${product.category} featured-items isotope-item`}
            >
              <div className="product-item">
                <img
                  src={product.image1 ? `${backendUrl}/products/${product.image1}` : '/assets/images/default-product.png'}
                  width="255"
                  height="322"
                  alt={product.name}
                />
                <div className="sell-meta">
                  {product.isNew && <a href="#" className="new-item">New</a>}
                  {product.isSell && <a href="#" className="sell-item">Sell</a>}
                </div>
                <div className="product-hover">
                  <div className="product-meta">
                    <a href="#" onClick={() => handleAddToWishlist(product.id)}>
                      <i className="pe-7s-like"></i>
                    </a>
                    <a href="#"><i className="pe-7s-shuffle"></i></a>
                    <Link to={`/product/productDetails/${product._id}`}>
                      <i className="pe-7s-clock"></i>
                    </Link>
                    <a href="#"><i className="pe-7s-cart"></i>Add to Cart</a>
                  </div>
                </div>
                <div className="product-title">
                  <a href="#">
                    <h3>{product.pname}</h3>
                    <span>${product.price}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatProducts
