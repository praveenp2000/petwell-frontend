'use client';

import LoadingScreen from '@/shared/components/LoadingScreen/LoadingScreen';
import { Pagination } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 font-[Poppins]'>
            <img
                src={'http://127.0.0.1:8000' + product.image}
                alt={product.name}
                className='w-full h-48 object-cover'
            />
            <div className='p-4'>
                <h2 className='text-xl font-semibold text-gray-800 font-[Poppins]'>
                    {product.breed}
                </h2>
                <p className='text-gray-600 font-[Poppins]'>
                    {product.animal}
                </p>
                <p className='text-gray-600 font-[Poppins] -mt-5'>
                    {product.age} years Old
                </p>
                <p className='text-gray-600 font-[Poppins] -mt-5'>
                    {product.gender}
                </p>
                <p className='text-gray-600 font-[Poppins]'>
                    Contact:  {product.phone}
                </p>
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
                    'http://127.0.0.1:8000/getalladoption/',
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
        <div className='px-[90px]'>
            <h1 className='text-4xl font-bold text-center mb-10 text-gray-800 font-[Poppins] mt-10 '>
                <span className='text-[#1989ce]'>Love Pets ? </span>
                <span className='text-black'>Adopt One!!</span>
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {productData.data.map((product, idx) => (
                    <ProductCard key={idx} product={product} />
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
};
export default Page;
