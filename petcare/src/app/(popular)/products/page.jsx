'use client';

import LoadingScreen from "@/shared/components/LoadingScreen/LoadingScreen";
import { Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 font-[Poppins]">
            <img
                src={'http://127.0.0.1:8000/' + product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 font-[Poppins]">{product.name}</h2>
                <p className="text-gray-600 font-[Poppins]">{product.animal} - {product.producttype}</p>

                <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-bold text-blue-600 font-[Poppins]">${product.price}</span>
                    <span className="text-sm text-gray-500 font-[Poppins]">In Stock: {product.quantity}</span>
                </div>

                <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index}>
                            {index < product.rating ? "⭐" : "☆"}
                        </span>
                    ))}
                </div>

                <button
                    className={`font-[Poppins] mt-4 w-full py-2 rounded-lg text-white bg-green-500  hover:opacity-90 transition-opacity`}
                >
                    Buy
                </button>
            </div>
        </div>
    );
};

const Page = () => {

    const [pageSize, setPageSize] = useState(8);
    const [productData, setProductData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(10);

    const payload = {
        page_size: pageSize,
        current_page: page,
    };



    useEffect(() => {
        const storeAdoption = async () => {
            try {
                const response = await axios.post(
                    'http://127.0.0.1:8000/getapprovedproduct/',
                    payload
                );
                console.log('✅ Customer saved successfully:', response.data);
                setProductData(response.data);
                setTotalRecords(response.data.total_records);
            } catch (error) {
                console.error(
                    '❌ Error saving adoption:',
                    error.response ? error.response.data : error.message
                );
            }
        };
        storeAdoption();
    }, [pageSize, page]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    if (productData.length === 0) return <LoadingScreen />;

    return (
        <div className="px-[90px]">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 font-[Poppins] mt-10 ">Pet Care Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {productData.data.map((product) => (
                    <ProductCard key={product.productid} product={product} />
                ))}
            </div>
            <div className='mt-12 mb-2'>
                <Pagination
                    count={Math.ceil(totalRecords / pageSize)}
                    page={page}
                    size='small'
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
export default Page;
