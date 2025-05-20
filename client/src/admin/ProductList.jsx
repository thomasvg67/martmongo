import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios.get('https://mart-mongo-server.onrender.com/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error('Error fetching products:', err));
    };

    const handleDelete = async (id) => {
        const confirm = window.confirm('Are you sure you want to delete this product?');
        if (confirm) {
            try {
                await axios.delete(`https://mart-mongo-server.onrender.com/api/products/${id}`);
                fetchProducts(); // Refresh list
            } catch (error) {
                console.error('Error deleting product:', error);
                alert('Failed to delete product');
            }
        }
    };

    return (
        <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ margin: 0, color: '#333' }}>🛒 Product List</h2>
                <Link to="/admin/addProducts">
                    <button style={addButtonStyle}>+ Add Product</button>
                </Link>
            </div>

            {products.length === 0 ? (
                <p style={{ color: '#888' }}>No products available.</p>
            ) : (
                <div style={{ overflowX: 'auto' }}>
                    <table style={tableStyle}>
                        <thead>
                            <tr style={headerRowStyle}>
                                <th style={thStyle}>ID</th>
                                <th style={thStyle}>Image</th>
                                <th style={thStyle}>Name</th>
                                <th style={thStyle}>Category</th>
                                <th style={thStyle}>Description</th>
                                <th style={thStyle}>Price</th>
                                <th style={thStyle}>Discount (%)</th>
                                <th style={thStyle}>GST (%)</th>
                                <th style={thStyle}>Status</th>
                                <th style={thStyle}>Availability</th>
                                <th style={thStyle}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p, index) => (
                                <tr key={p.id} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                                    <td style={tdStyle}>{p.id}</td>
                                    <td style={tdStyle}>
                                        <img src={`https://mart-mongo-server.onrender.com/products/${p.image1}`} alt={p.pname} style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                                    </td>
                                    <td style={tdStyle}>{p.pname}</td>
                                    <td style={tdStyle}>{p.category}</td>
                                    <td style={tdStyle}>{p.description}</td>
                                    <td style={tdStyle}>₹{p.price}</td>
                                    <td style={tdStyle}>{p.discount}</td>
                                    <td style={tdStyle}>{p.gst}</td>
                                    <td style={tdStyle}>{p.status === 1 ? 'Active' : 'Inactive'}</td>
                                    <td style={tdStyle}>{p.available === 1 ? 'Available' : 'Not Available'}</td>
                                    <td style={tdStyle}>
                                        <button onClick={() => navigate(`/admin/editProducts/${p._id}`)} style={editButtonStyle}>Edit</button>
                                        <button onClick={() => handleDelete(p.id)} style={deleteButtonStyle}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

// Styles
const thStyle = {
    padding: '10px',
    borderBottom: '2px solid #ddd',
    fontWeight: 'bold',
    color: '#555'
};

const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #eee',
    color: '#333'
};

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)'
};

const headerRowStyle = {
    backgroundColor: '#f4f4f4',
    textAlign: 'left'
};

const addButtonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '14px',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
};

const editButtonStyle = {
    marginRight: '10px',
    padding: '5px 10px',
    backgroundColor: '#2196F3',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer'
};

const deleteButtonStyle = {
    padding: '5px 10px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer'
};

export default ProductList;
