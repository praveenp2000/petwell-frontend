'use client';
import {
  Backdrop,
  Box,
  Button,
  Divider,
  Fade,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 530,
  bgcolor: '#F4EEE0',
  boxShadow: 24,
  outline: 'none',
  border: 'none',
  p: 4,
};

export const AddForms = (_props) => {
  const storedUser = sessionStorage.getItem('user');
  const userData = JSON.parse(storedUser);
  const user_id = userData.cid;
  const [payLoad, setPayLoad] = useState({
    slot: '',
    date: '',
    booking_type: 'Other Service',
    booked_for: 'Grooming',
    pet_id: '',
    customer_id: user_id,
    doctor_id: 1,
  });

  const [availableSlots, setAvailableSlots] = useState([]);
  const [pets, setPets] = useState([]);

  const handleChange = (field, value) => {
    setPayLoad((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  useEffect(() => {
    const getAvailableSlots = async (e) => {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/getavailableslots/',
          {
            date: payLoad.date,
            booking_type: payLoad.booking_type,
          }
        );
        const pets = await axios.get(
          'http://127.0.0.1:8000/getcustomerpets/' + user_id
        );
        setPets(pets.data);
        if (typeof response?.data?.date != 'undefined') {
          setAvailableSlots(response?.data);
        } else {
          const errorData = await response.json();
          alert('Error: ' + JSON.stringify(errorData));
        }
      } catch (error) {
        alert('Network error: ' + error.message);
      }
    };
    if (payLoad.date != '') getAvailableSlots();
  }, [payLoad.date, payLoad.booking_type]);

  console.log('val', payLoad);
  console.log('valu', pets);

  // const availableSlots = [
  //   '09:00 AM - 10:00 AM',
  //   '10:00 AM - 11:00 AM',
  //   '11:00 AM - 12:00 PM',
  //   '01:00 PM - 02:00 PM',
  //   '02:00 PM - 03:00 PM',
  //   '03:00 PM - 04:00 PM',
  //   '04:00 PM - 05:00 PM',
  //   '05:00 PM - 06:00 PM',
  // ];

  const checkUps = ['General Checkup', 'Vaccination', 'Deworming'];

  const services = ['Grooming', 'Microchipping', 'Dental Cleaning'];

  const submitData = async (e) => {
    const response = await axios.post(
      'http://127.0.0.1:8000/addbooking/',
      payLoad
    );
    if (response?.data === 'Added successfully') {
      alert('Booked successfully!');
      _props.getAllBookings();
      _props.handleClose();
    }
  };

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={_props.open}
      onClose={_props.handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={_props.open}>
        <Box sx={style}>
          <Typography
            id='transition-modal-title'
            sx={{
              fontSize: 22,
              mb: 4,
              fontFamily: 'Poppins',
              fontWeight: 600,
              color: 'black',
              textAlign: 'center',
            }}
          >
            {'Book  slot'}
          </Typography>

          <Box
            sx={{
              mt: 2,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <Typography
              id='transition-modal-description'
              sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
            >
              <strong className='capitalize'>Date</strong>
            </Typography>

            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                onChange={(date) =>
                  handleChange('date', date?.format('DD-MM-YYYY'))
                }
                // disablePast={true}
                slotProps={{
                  textField: {
                    size: 'small', // Reduces padding
                    sx: { height: 40, '& .MuiInputBase-root': { height: 40 } }, // Adjust height
                  },
                }}
              />
            </LocalizationProvider>
          </Box>

          <Box
            sx={{
              mt: 2,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <Typography
              id='transition-modal-description'
              sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
            >
              <strong className='capitalize'>Booking Type</strong>
            </Typography>

            <div className='w-full'>
              <select
                onChange={(e) => {
                  handleChange('booking_type', e.target.value);
                  handleChange(
                    'doctor_id',
                    e.target.value === 'Check up' ? 1 : 2
                  );
                }}
                // value={pageSize}
                className='z-10 cursor-pointer block w-full px-2 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500'
              >
                <option key={'Other Service'} value={'Other Service'}>
                  {'Other Service'}
                </option>
                <option key={'Check up'} value={'Check up'}>
                  {'Check up'}
                </option>
              </select>
            </div>
          </Box>

          <Box
            sx={{
              mt: 2,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <Typography
              id='transition-modal-description'
              sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
            >
              <strong className='capitalize'>Slot</strong>
            </Typography>

            <div className='w-full border-gray-200'>
              <select
                onChange={(e) => handleChange('slot', e.target.value)}
                value={payLoad.slot}
                className='z-10 cursor-pointer block w-full px-2 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500'
              >
                <option value={1}>{'Choose Option'}</option>
                {availableSlots?.available_slots?.map((slots) => (
                  <option key={slots} value={slots}>
                    {slots}
                  </option>
                ))}
              </select>
            </div>
          </Box>

          <Box
            sx={{
              mt: 2,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <Typography
              id='transition-modal-description'
              sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
            >
              <strong className='capitalize'>Booked For</strong>
            </Typography>

            <select
              onChange={(e) => handleChange('booked_for', e.target.value)}
              // value={pageSize}
              className='z-10 cursor-pointer block w-full px-2 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500'
            >
              {payLoad.booking_type === 'Check up'
                ? checkUps.map((slots) => (
                    <option key={slots} value={slots}>
                      {slots}
                    </option>
                  ))
                : services.map((slots) => (
                    <option key={slots} value={slots}>
                      {slots}
                    </option>
                  ))}
            </select>
          </Box>

          <Box
            sx={{
              mt: 2,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <Typography
              id='transition-modal-description'
              sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
            >
              <strong className='capitalize'> Pet Id</strong>
            </Typography>

            <div className='w-full border-gray-200'>
              <select
                onChange={(e) => handleChange('pet_id', Number(e.target.value))}
                // value={pageSize}
                className='z-10 cursor-pointer block w-full px-2 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500'
              >
                <option value={1}>{'Choose Option'}</option>
                {pets?.map((pet) => (
                  <option key={pet.petid} value={pet.petid}>
                    {pet.name + ':' + pet.petid}
                  </option>
                ))}
              </select>
            </div>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: 'flex', columnGap: 3, justifyContent: 'end' }}>
            <Button variant='outlined' onClick={_props.handleClose}>
              Cancel
            </Button>
            <Button variant='contained' onClick={() => submitData()}>
              Book
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
