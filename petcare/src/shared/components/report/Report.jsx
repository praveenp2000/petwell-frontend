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
      if (_props.type == 'admin') {
        useEffect(() => {
          const fetchPurchases = async () => {
            try {
              const response = await axios.get(`http://127.0.0.1:8000/reportforadmin/`);
              setPurchaseData(response.data);
            } catch (error) {
              console.error("Error fetching purchase data:", error);
            }
          };

          fetchPurchases();

        }, []);

        if (typeof purchaseData?.bookings == 'undefined') return <LoadingScreen />;

        return (
          <div className='min-h-[100vh] relative'>
            <div className='grid grid-cols-3 gap-8'>
              <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'> {purchaseData?.bookings} Booked Appointments</div>
              <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>
                {purchaseData?.sales} Sales Done
              </div>
              <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>
                {purchaseData?.health} Treatments & Services
              </div>
              <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>
                {purchaseData?.sellers} Registered Sellers
              </div>
              <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>{purchaseData?.customers} Customers</div>
            </div>


            <div className='h-auto'>
              <div className='text-lg text-[#ECDFCC] font-bold py-10'>Sellers Revenue</div>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">Name</th>
                    <th className="py-2">Revenue</th>
                  </tr>
                </thead>
                <tbody>

                  {purchaseData?.seller_revenue.map((data, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="py-2">{data?.seller_name}</td>
                      <td className="py-2">₹{data?.total_revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      }
  }

  return (
    <div className='pb-[180px] font-[Poppins] min-h-[100vh]'>
      <div className='text-lg text-[#ECDFCC] font-bold pb-10'>Report</div>
      {returnReports()}
    </div>
  );
};

export default Report;
