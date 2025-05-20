import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/wishlist')
            .then(res => {
                setWishlist(res.data);
            })
            .catch(err => {
                console.error('Error fetching wishlist:', err);
            });
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-md">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border">Wishlist ID</th>
                            <th className="py-2 px-4 border">Product ID</th>
                            <th className="py-2 px-4 border">Product Name</th>
                            <th className="py-2 px-4 border">Price</th>
                            <th className="py-2 px-4 border">Discount (%)</th>
                            <th className="py-2 px-4 border">GST (%)</th>
                            <th className="py-2 px-4 border">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlist.map(item => (
                            <tr key={item.wishlist_id} className="text-center">
                                <td className="py-2 px-4 border">{item.wishlist_id}</td>
                                <td className="py-2 px-4 border">{item.product_id}</td>
                                <td className="py-2 px-4 border">{item.pname}</td>
                                <td className="py-2 px-4 border">₹{item.price}</td>
                                <td className="py-2 px-4 border">{item.discount}%</td>
                                <td className="py-2 px-4 border">{item.gst}%</td>
                                <td className="py-2 px-4 border">₹{Number(item.total).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wishlist;
