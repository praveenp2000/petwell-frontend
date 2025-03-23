'use client';
// import { PreviewModal } from '@/shared/components/Modal/PreviewModal';
// import { EditModal } from '@/shared/components/Modal/EditModal';
// import EditIcon from '@mui/icons-material/Edit';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import Pagination from '@mui/material/Pagination';
// import LoadingScreen from '@/shared/components/LoadingScreen/LoadingScreen';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const Page = () => {
//   const [pageSize, setPageSize] = useState(10);
//   const [page, setPage] = useState(1);
//   const [bookingData, setBookingData] = useState([]);
//   const [totalRecords, setTotalRecords] = useState(10);
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [editOpen, setEditOpen] = useState(false);
//   const [previewData, setPreviewData] = useState([]);

//   const payload = {
//     page_size: pageSize,
//     current_page: page,
//   };

//   useEffect(() => {
//     const storeAdoption = async () => {
//       try {
//         const response = await axios.post(
//           'http://127.0.0.1:8000/getallbooking/',
//           payload
//         );
//         console.log('✅ Customer saved successfully:', response.data);
//         setBookingData(response.data);
//         setTotalRecords(response.data.total_records);
//       } catch (error) {
//         console.error(
//           '❌ Error saving adoption:',
//           error.response ? error.response.data : error.message
//         );
//       }
//     };
//     storeAdoption();
//   }, [pageSize, page]);

//   if (bookingData.length === 0) return <LoadingScreen />;

//   const handleChange = (event, value) => {
//     console.log('lol', value);
//     setPage(value);
//   };

//   return (
//     <>
//       <div className='flex justify-between my-auto font-[Poppins] w-full'>
//         <h4 className='text-center text-[#ECDFCC]'>Booking Details</h4>
//         <div className='text-center justify-center'>
//           <div className='w-20 mb-4'>
//             <select
//               onChange={(event) => setPageSize(event.target.value)}
//               value={pageSize}
//               className='z-10 cursor-pointer block w-full px-2 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500'
//             >
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//               <option value={15}>15</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <div className='table-container w-full font-[Poppins]'>
//         <table>
//           <thead>
//             <tr>
//               <th>No</th>
//               <th className='w-[250px]'>Slot</th>
//               <th className='w-[250px]'>Date</th>
//               <th>Booking_type</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookingData.data.map((data, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{data.slot}</td>
//                 <td>{data.date}</td>
//                 <td>{data.booking_type}</td>
//                 <td className='flex gap-x-2 h-[73.5px] py-auto'>
//                   <EditIcon
//                     sx={{
//                       height: 20,
//                       width: 20,
//                       cursor: 'pointer',
//                       marginY: 'auto',
//                       '&:hover': {
//                         color: '#1989ce',
//                         transform: 'scale(1.1)',
//                       },
//                     }}
//                     onClick={() => {
//                       setPreviewData(data);
//                       setEditOpen(true);
//                     }}
//                   />
//                   <VisibilityIcon
//                     sx={{
//                       height: 20,
//                       width: 20,
//                       cursor: 'pointer',
//                       marginY: 'auto',
//                       '&:hover': {
//                         color: '#1989ce',
//                         transform: 'scale(1.1)',
//                       },
//                     }}
//                     onClick={() => {
//                       setPreviewData(data);
//                       setPreviewOpen(true);
//                     }}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className='mt-2 mb-2'>
//           <Pagination
//                 count={Math.ceil(totalRecords / pageSize)}
//             page={page}
//             size='small'
//             onChange={handleChange}
//           />
//         </div>

//         {previewOpen && (
//           <PreviewModal
//             title='Booking Details'
//             open={true}
//             handleClose={() => setPreviewOpen(false)}
//             data={previewData}
//           />
//         )}

//         {editOpen && (
//           <EditModal
//             title='Edit Booking Details'
//             open={true}
//             handleClose={() => setEditOpen(false)}
//             data={previewData}
//           />
//         )}
//       </div>







//     </>
//   );
// };







const bookings = [
  {
    doctor_id: 1,
    customer_id: 1,
    pet_id: 1,
    date: "2025-03-10 10:00:00",
    slot: "10-11",
    booking_type: "Checkup",
  },
  {
    doctor_id: 1,
    customer_id: 2,
    pet_id: 2,
    date: "2025-03-11 14:00:00",
    slot: "2-3",
    booking_type: "Surgery",
  },
  {
    doctor_id: 1,
    customer_id: 3,
    pet_id: 3,
    date: "2025-03-12 09:30:00",
    slot: "9-10",
    booking_type: "Vaccination",
  },
  {
    doctor_id: 1,
    customer_id: 4,
    pet_id: 4,
    date: "2025-03-13 16:00:00",
    slot: "4-5",
    booking_type: "Dental Cleaning",
  },
  {
    doctor_id: 2,
    customer_id: 5,
    pet_id: 5,
    date: "2025-03-14 11:00:00",
    slot: "11-12",
    booking_type: "Grooming",
  },
  {
    doctor_id: 2,
    customer_id: 6,
    pet_id: 6,
    date: "2025-03-15 13:00:00",
    slot: "1-2",
    booking_type: "General Checkup",
  },
  {
    doctor_id: 2,
    customer_id: 7,
    pet_id: 7,
    date: "2025-03-16 09:00:00",
    slot: "9-10",
    booking_type: "Emergency Treatment",
  },
  {
    doctor_id: 1,
    customer_id: 8,
    pet_id: 8,
    date: "2025-03-17 15:00:00",
    slot: "3-4",
    booking_type: "X-ray",
  },
  {
    doctor_id: 1,
    customer_id: 9,
    pet_id: 9,
    date: "2025-03-18 10:30:00",
    slot: "10-11",
    booking_type: "Ultrasound",
  },
  {
    doctor_id: 1,
    customer_id: 10,
    pet_id: 10,
    date: "2025-03-19 12:00:00",
    slot: "11-12",
    booking_type: "Microchipping",
  },
];

const allSlots = ["9-10", "10-11", "11-12", "1-2", "2-3", "3-4", "4-5", "5-6"];

const BookingCard = ({ booking }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
      {booking ? (
        <>
          <h2 className="text-xl font-semibold text-gray-800">{booking.booking_type}</h2>
          <p className="text-gray-600">Customer ID: {booking.customer_id}</p>
          <p className="text-gray-600">Pet ID: {booking.pet_id}</p>
          <p className="text-gray-600">Slot: {booking.slot}</p>
          <p className="text-gray-600">Date: {new Date(booking.date).toLocaleString()}</p>
        </>
      ) : (
        <h2 className="text-gray-400 text-xl font-semibold">Empty Slot</h2>
      )}
    </div>
  );
};

const Page = () => {
  const slotBookings = allSlots.map((slot) => bookings.find((b) => b.slot === slot) || null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Doctor's Booking Schedule</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {slotBookings.map((booking, index) => (
          <BookingCard key={index} booking={booking} />
        ))}
      </div>
    </div>
  );
};

// export default BookingGrid;

export default Page;
