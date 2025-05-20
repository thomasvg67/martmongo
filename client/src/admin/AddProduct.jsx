import React, { useState } from 'react';
import axios from 'axios';

const MAX_SIZE = 500 * 1024; // 500 KB
const REQUIRED_WIDTH = 255;
const REQUIRED_HEIGHT = 322;

const AddProduct = () => {
    const [formData, setFormData] = useState({
        pname: '',
        category: '',
        price: '',
        discount: '',
        gst: '',
        type: '',
        status: '1',
        available: '1',
        description: '',
        features: '',
    });

    const [images, setImages] = useState([null, null, null, null]);
    const [imageErrors, setImageErrors] = useState(['', '', '', '']);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateImage = (file, index) => {
        return new Promise((resolve, reject) => {
            if (!file) return reject('No file selected');
            if (file.size > MAX_SIZE) return reject('Image size must be < 500 KB');
            const img = new Image();
            img.onload = () => {
                if (img.width !== REQUIRED_WIDTH || img.height !== REQUIRED_HEIGHT) {
                    reject(`Image must be ${REQUIRED_WIDTH}x${REQUIRED_HEIGHT}px`);
                } else resolve(true);
            };
            img.onerror = () => reject('Invalid image file');
            img.src = URL.createObjectURL(file);
        });
    };

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        const newImages = [...images];
        const newErrors = [...imageErrors];
        if (!file) {
            newErrors[index] = '';
            newImages[index] = null;
            setImageErrors(newErrors);
            setImages(newImages);
            return;
        }
        validateImage(file, index)
            .then(() => {
                newImages[index] = file;
                newErrors[index] = '';
                setImages(newImages);
                setImageErrors(newErrors);
            })
            .catch((error) => {
                newErrors[index] = error;
                newImages[index] = null;
                setImages(newImages);
                setImageErrors(newErrors);
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (imageErrors.some((err) => err)) {
            alert('Fix image errors before submitting.');
            return;
        }
        try {
            const payload = new FormData();
            Object.entries(formData).forEach(([key, val]) => payload.append(key, val));
            images.forEach((img, i) => img && payload.append(`image${i + 1}`, img));

            await axios.post('http://localhost:5000/api/products', payload, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            alert('✅ Product added successfully');
            setFormData({
                pname: '',
                category: '',
                price: '',
                discount: '',
                gst: '',
                type: '',
                status: '1',
                available: '1',
                description: '',
                features: '',
            });
            setImages([null, null, null, null]);
            setImageErrors(['', '', '', '']);
        } catch (err) {
            console.error(err);
            alert('❌ Error adding product');
        }
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ textAlign: 'center', color: '#333' }}>Add New Product</h2>
            <form onSubmit={handleSubmit} style={formStyle} encType="multipart/form-data">
                <input
                    name="pname"
                    value={formData.pname}
                    onChange={handleChange}
                    placeholder="Product Name"
                    required
                    style={inputStyle}
                />
                <input
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Category"
                    style={inputStyle}
                />
                {/* Description textarea */}
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    style={{ ...inputStyle, height: '100px' }}
                />

                {/* Features textarea */}
                <textarea
                    name="features"
                    value={formData.features}
                    onChange={handleChange}
                    placeholder="Features"
                    style={{ ...inputStyle, height: '100px' }}
                />
                <input
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Price"
                    required
                    style={inputStyle}
                />
                <input
                    name="discount"
                    type="number"
                    value={formData.discount}
                    onChange={handleChange}
                    placeholder="Discount %"
                    style={inputStyle}
                />
                <input
                    name="gst"
                    type="number"
                    value={formData.gst}
                    onChange={handleChange}
                    placeholder="GST %"
                    style={inputStyle}
                />
                <select name="type" value={formData.type} onChange={handleChange} style={inputStyle}>
                    <option value="">Select Type</option>
                    <option value="bestseller">Best Seller</option>
                    <option value="featured">Featured</option>
                    <option value="newcollection">New Collection</option>
                </select>
                <select name="status" value={formData.status} onChange={handleChange} style={inputStyle}>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                </select>
                <select name="available" value={formData.available} onChange={handleChange} style={inputStyle}>
                    <option value="1">Available</option>
                    <option value="0">Not Available</option>
                </select>

                

                {/* Image Uploads */}
                <div style={{ marginBottom: '15px' }}>
                    <p>Upload 4 Images (255x322 px, &lt;500KB each):</p>
                    {[0, 1, 2, 3].map((index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageChange(e, index)}
                                style={fileInputStyle}
                            />
                            {imageErrors[index] && <p style={{ color: 'red' }}>{imageErrors[index]}</p>}
                            {images[index] && <p style={{ color: 'green' }}>{images[index].name} selected</p>}
                        </div>
                    ))}
                </div>

                <button type="submit" style={buttonStyle}>
                    Add Product
                </button>
            </form>
        </div>
    );
};

// Styles
const containerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
};
const formStyle = { display: 'flex', flexDirection: 'column' };
const inputStyle = {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
};
const buttonStyle = {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};
const fileInputStyle = {
    padding: '6px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
    width: '100%',
};

export default AddProduct;
