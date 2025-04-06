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
import axios from 'axios';
import { useState } from 'react';

import validator from 'validator';

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
  overflowY: 'auto',
  maxHeight: '65vh',
};

export const AddForms = (_props) => {
  const storedUser = sessionStorage.getItem('user');
  const userData = JSON.parse(storedUser || '{}');
  const cid = userData.cid || '';

  const [payLoad, setPayLoad] = useState({
    customer_id: cid,
    phone: '',
    adopted: false,
    breed: '',
    color: '',
    animal: '',
    age: '',
    description: '',
    gender: '',
    image: null,
  });

  // const handleChange = (e) => {
  //   const { name, value, type, files } = e.target;

  //   setPayLoad((prev) => ({
  //     ...prev,
  //     [name]: type === 'file' ? files[0] : value,
  //   }));
  // };

  const handleChange = (field, value) => {
    setPayLoad((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(payLoad).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await axios.post(
      'http://127.0.0.1:8000/addadoption/',
      formData
    );

    if (response?.data === 'Added successfully') {
      alert('Booked successfully!');
      _props.getAllAdoptions();
      _props.handleClose();
    } else alert('Cannot Book');
    _props.handleClose();
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
        <Box sx={style} component='form' onSubmit={handleSubmit}>
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
            Add Pet For adoption
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
              <strong className='capitalize'>Animal</strong>
            </Typography>

            <div className='w-full border-gray-200'>
              <select
                onChange={(e) => handleChange('animal', e.target.value)}
                value={payLoad.animal}
                className='z-10 cursor-pointer block w-full px-2 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500'
              >
                <option value={1}>{'Choose Option'}</option>
                <option value={'Dog'}>Dog</option>
                <option value={'Cat'}>Cat</option>
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
              <strong className='capitalize'>Gender</strong>
            </Typography>

            <div className='w-full border-gray-200'>
              <select
                onChange={(e) => handleChange('gender', e.target.value)}
                value={payLoad.gender}
                className='z-10 cursor-pointer block w-full px-2 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500'
              >
                <option value={1}>{'Choose Option'}</option>
                <option value={'Male'}>Male</option>
                <option value={'Female'}>Female</option>
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
              sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
            >
              <strong className='capitalize'>Breed</strong>
            </Typography>
            <div>
              <TextField
                sx={{ my: 'auto' }}
                name='breed'
                value={payLoad.breed}
                onChange={(e) => handleChange('breed', e.target.value)}
                variant='outlined'
                size='small'
              />
              {validator.isEmpty(payLoad.breed) && (
                <div className='text-red-500 mt-1 pl-2'>Breed required</div>
              )}
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
              sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
            >
              <strong className='capitalize'>Age</strong>
            </Typography>
            <div>
              <TextField
                sx={{ my: 'auto' }}
                name='age'
                type='number'
                value={payLoad.age}
                onChange={(e) => handleChange('age', Number(e.target.value))}
                variant='outlined'
                size='small'
              />
              {validator.isInt(payLoad.age) && (
                <div className='text-red-500 mt-1 pl-2'>Age required</div>
              )}
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
              sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
            >
              <strong className='capitalize'>Color</strong>
            </Typography>
            <div>
              <TextField
                sx={{ my: 'auto' }}
                name='color'
                value={payLoad.color}
                onChange={(e) => handleChange('color', e.target.value)}
                variant='outlined'
                size='small'
              />
              {validator.isEmpty(payLoad.color) && (
                <div className='text-red-500 mt-1 pl-2'>Color required</div>
              )}
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
              sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
            >
              <strong className='capitalize'>Description </strong>
            </Typography>
            <TextField
              sx={{ my: 'auto' }}
              name='description'
              minRows={4}
              multiline={true}
              value={payLoad.description}
              onChange={(e) => handleChange('description', e.target.value)}
              variant='outlined'
              size='small'
            />
          </Box>

          <Box
            sx={{
              mt: 2,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <Typography
              sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
            >
              <strong className='capitalize'>Phone No </strong>
            </Typography>
            <div>
              <TextField
                sx={{ my: 'auto' }}
                name='phone'
                value={payLoad.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                variant='outlined'
                size='small'
              />
              {validator.isEmpty(payLoad.phone) && (
                <div className='text-red-500 mt-1 pl-2'>Phone required</div>
              )}
              {!/^\d{10}$/.test(payLoad.phone) && (
                <div className='text-red-500 mt-1 pl-2'>
                  Enter a valid 10-digit phone number
                </div>
              )}
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
              sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
            >
              <strong className='capitalize'>Image</strong>
            </Typography>
            <input
              type='file'
              name='image'
              id='image'
              onChange={(e) => handleChange('image', e.target.files[0])}
              required
            />
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: 'flex', columnGap: 3, justifyContent: 'end' }}>
            <Button variant='outlined' onClick={_props.handleClose}>
              Cancel
            </Button>
            <Button
              variant='contained'
              type='submit'
              disabled={
                !validator.isEmpty(payLoad.age) ||
                !validator.isEmpty(payLoad.breed) ||
                !validator.isEmpty(payLoad.phone) ||
                !validator.isEmpty(payLoad.color)
              }
            >
              Save
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
