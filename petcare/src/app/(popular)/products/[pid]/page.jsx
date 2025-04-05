'use client';

import LoadingScreen from '../../../../shared/components/LoadingScreen/LoadingScreen';
import { Pagination } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import moment from 'moment';



const Page = (_props) => {

  const [productData, setProductData] = useState([]);

  const storedUser = sessionStorage.getItem('user');
  const userData = JSON.parse(storedUser);
  const user_id = userData.cid;



  const searchParams = useSearchParams();


  const id = searchParams.get('pid');
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const cust = await axios.get(
          'http://127.0.0.1:8000/getproductbyid/' + id
        );

        setProductData(cust.data)
      } catch (error) {
        alert('Network error: ' + error.message);
      }
    }
    if (id != undefined)
      getProductDetails();
  }, []);



  if (productData.length === 0) return <LoadingScreen />;




  const handleAddToCart = async () => {
    const cartData = {
      product_id: Number(id),
      customer_id: user_id,
      date: moment().format('DD-MM-YYYY'),
      price: productData.price,
      quantity: 1,
      name: productData.name,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/addtocart/', cartData);
      console.log('Added to cart:', response.data);
      alert('Product added to cart!');
      window.location.reload();
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add product.');
    }
  };


  return (
    <div className=''>
      <div className="bg-gray-100 font-sans">

        <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg flex gap-8">

          <div className="w-1/2">
            <img
              src={`http://127.0.0.1:8000${productData.image}`}
              alt="Dog Shampoo"
              className="rounded-lg w-full h-[350px] object-cover border"
            />
          </div>


          <div className="w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{productData.name}</h1>
            <p className="text-xl text-green-600 font-semibold">₹{productData.price}</p>

            <div className='flex items-center mt-2'>
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>{index < productData.rating ? '⭐' : '☆'}</span>
              ))}
            </div>

            <p className="text-gray-700">
              Animal: <span className="font-medium text-gray-900 capitalize">{productData.animal}</span>
            </p>
            <p className="text-gray-700">
              Category: <span className="font-medium text-gray-900 capitalize">{productData.producttype}</span>
            </p>

            <p className="text-gray-700">
              <span className="font-medium text-gray-900 capitalize">{productData.description}</span>
            </p>


            <div className="flex gap-4 pt-4">
              <button
                onClick={() => handleAddToCart()}
                className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
              <button
                className="px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"

              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
export default Page;
