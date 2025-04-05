'use client';

import { useEffect, useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import axios from 'axios';

export const Invoice = ({ cart }) => {
    const invoiceRef = useRef();
    const [productData, setProductData] = useState({});

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const cust = await axios.get(
                    'http://127.0.0.1:8000/getproductbyid/' + cart.product_id
                );

                setProductData(cust.data)
            } catch (error) {
                alert('Network error: ' + error.message);
            }
        }
        if (typeof cart.product_id != 'undefined')
            getProductDetails();
    }, []);

    console.log('lol', cart);

    const handlePrint = () => {
        const element = invoiceRef.current;

        const options = {
            margin: 0.5,
            filename: `invoice-${new Date().getTime()}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };

        html2pdf().from(element).set(options).save();
    };

    return (
        <div className="p-6">
            <div ref={invoiceRef} className="bg-white p-8 shadow-lg rounded-md w-full">
                <h2 className="text-2xl font-bold mb-4">Invoice</h2>
                <p className="text-sm font-bold mb-4">{cart.date}</p>
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="py-2">Name</th>
                            <th className="py-2">Price</th>
                            <th className="py-2">Quantity</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Payment</th>
                            <th className="py-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="border-b">
                            <td className="py-2">{productData.name}</td>
                            <td className="py-2">₹{productData.price}</td>
                            <td className="py-2">{cart.quantity}</td>
                            <td className="py-2">{cart.delivery_status}</td>
                            <td className="py-2">{cart.payed ? "Payed" : "C O D"}</td>
                            <td className="py-2">₹{productData.price * cart.quantity}</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <button
                onClick={handlePrint}
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Print Invoice
            </button>
        </div>
    );
};

