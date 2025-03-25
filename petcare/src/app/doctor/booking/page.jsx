'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import LoadingScreen from '@/shared/components/LoadingScreen/LoadingScreen';

const allSlots = ['9-10', '10-11', '11-12', '1-2', '2-3', '3-4', '4-5', '5-6'];

const BookingCard = ({ booking }) => {
  return (
    <div className='bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300'>
      {booking ? (
        <>
          <h2 className='text-xl font-semibold text-gray-800 font-[Poppins]'>
            {booking.booking_type}
          </h2>
          <p className='text-gray-600 font-[Poppins]'>Slot: {booking.slot}</p>
          <p className='text-gray-600 font-[Poppins]'>
            {/* {new Date(booking.date).toLocaleString()} */}
            Date: {new Date(booking.date).getDate()}
          </p>
        </>
      ) : (
        <h2 className='text-gray-400 text-xl font-semibold font-[Poppins]'>
          Empty Slot
        </h2>
      )}
    </div>
  );
};

const Page = () => {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [bookingData, setBookingData] = useState([]);

  const payload = {
    page_size: pageSize,
    current_page: page,
  };

  useEffect(() => {
    const storeAdoption = async () => {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/getallbooking/',
          payload
        );
        console.log('✅ Customer saved successfully:', response.data);
        setBookingData(response.data);
      } catch (error) {
        console.error(
          '❌ Error saving adoption:',
          error.response ? error.response.data : error.message
        );
      }
    };
    storeAdoption();
  }, [pageSize, page]);

  const slotBookings = allSlots.map(
    (slot) => bookingData.data?.find((b) => b.slot === slot) || null
  );

  console.log('slot', slotBookings);

  if (bookingData.length === 0) return <LoadingScreen />;

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <h1 className='text-4xl font-bold text-center mb-10 text-gray-800 font-[Poppins]'>
        Doctor's Booking Schedule
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {slotBookings.map((booking, index) => (
          <BookingCard key={index} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default Page;
