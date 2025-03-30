'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from "moment";

import LoadingScreen from '@/shared/components/LoadingScreen/LoadingScreen';
import { AddHealthForms } from './AddForms';


const allSlots = ['09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '01:00 PM - 02:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM',
  '05:00 PM - 06:00 PM'];

const BookingCard = ({ booking }) => {
  return (
    <div className='bg-white h-[223px] rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 hover:cursor-pointer'>
      {booking ? (
        <>
          <h2 className='text-xl font-semibold text-gray-800 font-[Poppins]'>
            {booking.booking_type}
          </h2>
          <p className='text-gray-600 font-[Poppins] font-extrabold'> {booking.booked_for}</p>
          <p className='text-gray-600 font-[Poppins]'> {booking.slot}</p>
          <p className='text-gray-600 font-[Poppins]'>
            {/* {new Date(booking.date).toLocaleString()} */}
            Date: {new Date(booking.date).toLocaleDateString()}
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

  const [bookingData, setBookingData] = useState([]);
  const [bookDate, setBookDate] = useState(moment());
  const [slotBookings, setSlotBookings] = useState('');
  const [pet, setPet] = useState(1);
  const [open, setOpen] = useState(false);

  const storedUser = sessionStorage.getItem('user');
  const userData = JSON.parse(storedUser);
  const user_id = userData.doctorid;

  useEffect(() => {
    const getBooking = async () => {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/getallbookingbydoctoridanddate/', { doctor_id: user_id, date: bookDate },

        );
        setBookingData(response.data.data);
      } catch (error) {
        console.error(
          '❌ Error saving adoption:',
          error.response ? error.response.data : error.message
        );
      }
    };
    getBooking();
  }, [bookDate]);

  useEffect(() => {
    if (bookingData && bookingData.length > 0)
      setSlotBookings(allSlots.map(
        (slot) => bookingData?.find((b) => b.slot === slot) || null
      ));
    else setSlotBookings([null, null, null, null, null, null, null, null])
  }, [bookingData]);



  console.log('slot', bookingData);

  // if (bookingData.length === 0) return <LoadingScreen />;

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <div className='flex justify-between'>
        <h1 className='text-4xl font-bold text-center mb-10 text-gray-800 font-[Poppins]'>
          Booking Schedule
        </h1>
        <LocalizationProvider dateAdapter={AdapterMoment} >
          <DatePicker
            defaultValue={bookDate}
            onChange={(date) =>
              setBookDate(date?.format('DD-MM-YYYY'))
            }
            slotProps={{
              textField: {
                size: 'small', // Reduces padding
                sx: { height: 40, '& .MuiInputBase-root': { height: 40 } }, // Adjust height
              },
            }}
          />
        </LocalizationProvider>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {slotBookings.length > 0 && slotBookings?.map((booking, index) => (
          <div key={index} onClick={() => {
            if (booking != null && booking.booking_type !== 'Other Service') {
              setPet(booking);
              setOpen(true);
            }
          }} >
            <BookingCard booking={booking} />
          </div>
        ))}
      </div>

      {open &&
        <AddHealthForms
          open={open}
          id={pet.pet_id}
          date={pet.date}
          handleClose={() => setOpen(false)}
        />
      }


    </div>
  );
};

export default Page;
