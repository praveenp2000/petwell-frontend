'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const Report = (_props) => {

  const returnReports = () => {
    const [purchaseData, setPurchaseData] = useState(null);

    const storedUser = sessionStorage.getItem('user');
    const userData = JSON.parse(storedUser);

    if (_props.type === 'seller') {

      const sellerId = userData.sid;

      useEffect(() => {
        const fetchPurchases = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/getallpurchasesofseller/` + sellerId
            );
            setPurchaseData(response.data);
          } catch (error) {
            console.error("Error fetching purchase data:", error);
          }
        };

        fetchPurchases();
      }, []);

      if (typeof purchaseData?.seller_id == 'undefined') return <LoadingScreen />;

      return (
        <div className='grid grid-cols-3 gap-8'>
          <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>{purchaseData.total_purchases} Total Sales</div>

          <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>
            {purchaseData.total_customers} Customers
          </div>

          <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>
            Total revenue: {purchaseData.total_revenue}
          </div>


        </div>
      )
    }


    else
      if (_props.type == 'admin')
        return (
          <div className='grid grid-cols-3 gap-8'>
            <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>101 Sales</div>
            <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>
              102 Services
            </div>
            <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>
              10 Pets Treated
            </div>
            <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>
              10 Customers
            </div>
            <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>10 Sellers</div>
          </div>
        )
  }
  return (
    <div className='pb-[180px] font-[Poppins] h-[100vh]'>
      <div className='text-lg text-[#ECDFCC] font-bold pb-10'>Report</div>
      {returnReports()}
    </div>
  );
};

export default Report;
