import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MAX_SIZE = 500 * 1024; // 500 KB
const REQUIRED_WIDTH = 255;
const REQUIRED_HEIGHT = 322;

const EditProduct = () => {
    const { id } = useParams();

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
        features: ''
    });

    const [images, setImages] = useState([null, null, null, null]);
    const [imageErrors, setImageErrors] = useState(['', '', '', '']);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
                setFormData({
                    pname: data.pname || '',
                    category: data.category || '',
                    price: data.price || '',
                    discount: data.discount || '',
                    gst: data.gst || '',
                    type: data.type || '',
                    status: String(data.status),
                    available: String(data.available),
                    description: data.description || '',
                    features: data.features || ''
                });
            } catch (err) {
                console.error('Error fetching product:', err);
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateImage = (file, index) => {
        return new Promise((resolve, reject) => {
            if (file.size > MAX_SIZE) {
                reject(`Image ${index + 1} size must be less than 500 KB.`);
                return;
            }

            const img = new Image();
            img.onload = () => {
                if (img.width !== REQUIRED_WIDTH || img.height !== REQUIRED_HEIGHT) {
                    reject(`Image ${index + 1} dimensions must be exactly ${REQUIRED_WIDTH}x${REQUIRED_HEIGHT}px.`);
                    return;
                }
                resolve();
            };
            img.onerror = () => reject(`Image ${index + 1} is invalid.`);
            img.src = URL.createObjectURL(file);
        });
    };

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        setImageErrors(prev => {
            const newErrors = [...prev];
            newErrors[index] = '';
            return newErrors;
        });
        setImages(prev => {
            const newImages = [...prev];
            newImages[index] = null;
            return newImages;
        });

        if (!file) return;

        validateImage(file, index)
            .then(() => {
                setImages(prev => {
                    const newImages = [...prev];
                    newImages[index] = file;
                    return newImages;
                });
            })
            .catch(errMsg => {
                setImageErrors(prev => {
                    const newErrors = [...prev];
                    newErrors[index] = errMsg;
                    return newErrors;
                });
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (imageErrors.some(err => err !== '')) {
            alert('Please fix the image errors before submitting.');
            return;
        }

        try {
            const payload = new FormData();
            payload.append('pname', formData.pname);
            payload.append('category', formData.category);
            payload.append('price', Number(formData.price));
            payload.append('discount', Number(formData.discount) || 0);
            payload.append('gst', Number(formData.gst) || 0);
            payload.append('type', formData.type);
            payload.append('status', Number(formData.status));
            payload.append('available', Number(formData.available));
            payload.append('description', formData.description);
            payload.append('features', formData.features);

            images.forEach((img, i) => {
                if (img) {
                    payload.append(`image${i + 1}`, img);
                }
            });

            await axios.put(`http://localhost:5000/api/products/${id}`, payload, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            alert('✅ Product updated successfully');
        } catch (error) {
            alert('❌ Error updating product');
            console.error(error);
        }
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ textAlign: 'center', color: '#333' }}>Edit Product</h2>
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

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    rows="5"
                    required
                    style={inputStyle}
                />
                <textarea
                    name="features"
                    value={formData.features}
                    onChange={handleChange}
                    placeholder="Features"
                    rows="5"
                    required
                    style={inputStyle}
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

                <div style={{ marginBottom: '15px' }}>
                    <p style={{ marginBottom: '8px' }}>Upload 4 Images (255x322 px, &lt;500KB each):</p>
                    {[0, 1, 2, 3].map((index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageChange(e, index)}
                                style={fileInputStyle}
                            />
                            {imageErrors[index] && (
                                <p style={{ color: 'red', marginTop: '4px' }}>{imageErrors[index]}</p>
                            )}
                            {images[index] && (
                                <p style={{ color: 'green', marginTop: '4px' }}>{images[index].name} selected</p>
                            )}
                        </div>
                    ))}
                </div>

                <button type="submit" style={buttonStyle}>Update Product</button>
            </form>
        </div>
    );
};

// You can define your styles here or import from a CSS file
const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    background: '#f9f9f9',
    borderRadius: '8px',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
};

const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
};

const fileInputStyle = {
    fontSize: '14px',
};

const buttonStyle = {
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default EditProduct;
