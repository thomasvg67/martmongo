import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://mart-mongo-server.onrender.com/api/cart')
            .then(res => {
                setCartItems(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch cart items');
                setLoading(false);
            });
    }, []);

    // Calculate total price after discount and adding GST
    const calculateTotal = (price, discount, gst, quantity) => {
        const discountedPrice = price - (price * discount / 100);
        const priceWithGst = discountedPrice + (discountedPrice * gst / 100);
        return (priceWithGst * quantity).toFixed(2);
    };

    if (loading) return <p className="p-4">Loading cart items...</p>;
    if (error) return <p className="p-4 text-red-500">{error}</p>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Cart ID</th>
                        <th className="border px-4 py-2">Product ID</th>
                        <th className="border px-4 py-2">Product Name</th>
                        <th className="border px-4 py-2">Price</th>
                        <th className="border px-4 py-2">Discount (%)</th>
                        <th className="border px-4 py-2">GST (%)</th>
                        <th className="border px-4 py-2">Quantity</th>
                        <th className="border px-4 py-2">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.length === 0 ? (
                        <tr>
                            <td colSpan="8" className="text-center p-4">No items in cart</td>
                        </tr>
                    ) : (
                        cartItems.map(item => (
                            <tr key={item.cart_id} className="border-t">
                                <td className="border px-4 py-2 text-center">{item.cart_id}</td>
                                <td className="border px-4 py-2 text-center">{item.product_id}</td>
                                <td className="border px-4 py-2">{item.pname}</td>
                                <td className="border px-4 py-2 text-right">{item.price.toFixed(2)}</td>
                                <td className="border px-4 py-2 text-center">{item.discount}</td>
                                <td className="border px-4 py-2 text-center">{item.gst}</td>
                                <td className="border px-4 py-2 text-center">{item.quantity}</td>
                                <td className="border px-4 py-2 text-right">
                                    ₹ {calculateTotal(item.price, item.discount, item.gst, item.quantity)}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;
