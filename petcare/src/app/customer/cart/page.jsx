
'use client';

import axios from "axios";
import moment from "moment";

import { useEffect, useState } from "react";

const Page = () => {

    const [cart, setCart] = useState([]);

    const storedUser = sessionStorage.getItem('user');
    const userData = JSON.parse(storedUser);
    const user_id = userData.cid;
    const [paymentOption, setPaymentOption] = useState("cod");
    const [cardDetails, setCardDetails] = useState({ cardNumber: "", expiry: "", cvv: "", name: '' });

    console.log('pay', paymentOption);

    useEffect(() => {
        const getcart = async (e) => {
            const response = await axios.get(
                'http://127.0.0.1:8000/getcartbyCustomerId/' + user_id

            );
            setCart(response.data);
        };
        if (typeof user_id != 'undefined') getcart();
    }, []);

    const getcart = async (e) => {
        if (typeof user_id != 'undefined') {
            const response = await axios.get(
                'http://127.0.0.1:8000/getcartbyCustomerId/' + user_id

            );
            setCart(response.data);
        }
    };
    console.log('item', cart)

    const deleteFromCart = async (cartId) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/deletecart/${cartId}`);
            console.log('Deleted:', response.data);
            alert(response.data);
            window.location.reload();
            getcart();

        } catch (error) {
            console.error('Error deleting cart item:', error);
        }
    };

    const handlePurchase = async () => {
        const storedUser = sessionStorage.getItem('user');
        const userData = JSON.parse(storedUser);
        const user_id = userData.cid;

        const date = moment().format("YYYY-MM-DD");

        for (let item of cart) {
            const payload = {
                date: moment().format('DD-MM-YYYY'),
                payed: paymentOption === "paynow",
                delivery_status: "Order Placed",
                quantity: item.quantity,
                product_id: item.product_id,
                customer_id: user_id,
            };
            await axios.delete(`http://127.0.0.1:8000/deletecart/${item.cartid}`);
            await axios.post("http://127.0.0.1:8000/addpurchase/", payload);
        }

        alert("Purchase completed!");
        window.location.reload();
    };

    return (
        <div className="min-h-[100vh] max-h-auto">
            <div className="bg-gray-100 p-6">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Your Cart</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th className="text-left py-3 px-4">Name</th>
                                    <th className="text-left py-3 px-4">Price</th>
                                    <th className="text-left py-3 px-4">Quantity</th>
                                    <th className="text-left py-3 px-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((cart, index) => (
                                        <tr className="border-b hover:bg-gray-50" key={index}>
                                            <td className="py-3 px-4 font-[Poppins]">{cart.name}</td>
                                            <td className="py-3 px-4 font-[Poppins]">{cart.price}</td>
                                            <td className="py-3 px-4 font-[Poppins]">{cart.quantity}</td>
                                            <td className="py-3 px-4 font-[Poppins]"><button onClick={() => deleteFromCart(cart.cartid)} className="bg-red-600 text-white px-4 py-2">Delete</button></td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>

                        <div className="border-b  flex w-full mt-10" >
                            <p className=" text-black font-[Poppins] text-xl text-right">
                                Total: ₹ {cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)}
                            </p>
                        </div>
                    </div>

                    <div>



                        <div className="mt-10">
                            <h2 className="text-xl font-semibold mb-3">Select Payment Option</h2>
                            <div className="flex space-x-4">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={paymentOption === "cod"}
                                        onChange={(e) => setPaymentOption(e.target.value)}
                                    />
                                    <span>Cash on Delivery</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="paynow"
                                        checked={paymentOption === "paynow"}
                                        onChange={(e) => setPaymentOption(e.target.value)}
                                    />
                                    <span>Pay Now</span>
                                </label>
                            </div>

                            {paymentOption === "paynow" && (
                                <div className="mt-4 space-y-3">
                                    <input
                                        type="text"
                                        placeholder="Card Number"
                                        className="border px-3 py-2 w-full"
                                        value={cardDetails.cardNumber}
                                        onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Expiry Date (MM/YY)"
                                        className="border px-3 py-2 w-full"
                                        value={cardDetails.expiry}
                                        onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="CVV"
                                        className="border px-3 py-2 w-full"
                                        value={cardDetails.cvv}
                                        onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="border px-3 py-2 w-full"
                                        value={cardDetails.name}
                                        onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                                    />
                                </div>
                            )}

                            <button
                                onClick={handlePurchase}
                                className="mt-5 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    );
}

export default Page;