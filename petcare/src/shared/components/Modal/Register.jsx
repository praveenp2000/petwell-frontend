'use client';

import {
  Backdrop,
  Box,
  Button,
  Divider,
  Fade,
  Modal,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';

import axios from 'axios';
import React, { useState } from 'react';

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
  height: 500,
  overflowY: 'auto',
};

const Register = (_props) => {
  const [payLoad, setPayLoad] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  });

  const handleChange = (field, value) => {
    setPayLoad((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const submitData = async () => {
    const response = await axios.post(
      'http://127.0.0.1:8000/customerregister/',
      payLoad
    );

    if (response?.data === 'Added successfully') {
      alert('Registered successfully!');
      _props.handleClose();
    } else alert('Cannot Register');
    _props.handleClose();
  };

  return (
    <Modal
      sx={{ zIndex: 4000 }}
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
            {'Register '}
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
              <strong className='capitalize'>Full Name</strong>
            </Typography>

            <div>
              <TextField
                sx={{ my: 'auto' }}
                id='standard-basic'
                defaultValue={payLoad.name}
                onChange={(e) => handleChange('name', e.target.value)}
                variant='outlined'
                size='small'
              />
              {validator.isEmpty(payLoad.name) && (
                <div className='text-red-500 mt-1 pl-2'>Name required</div>
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
              id='transition-modal-description'
              sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
            >
              <strong className='capitalize'>Email</strong>
            </Typography>

            <div>
              <TextField
                sx={{ my: 'auto' }}
                id='standard-basic'
                type='email'
                defaultValue={payLoad.email}
                onChange={(e) => handleChange('email', e.target.value)}
                variant='outlined'
                size='small'
              />
              {!validator.isEmail(payLoad.email) && (
                <div className='text-red-500 mt-1 pl-2'>Not a valid Email </div>
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
              id='transition-modal-description'
              sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
            >
              <strong className='capitalize'>Phone</strong>
            </Typography>

            <div>
              <TextField
                sx={{ my: 'auto' }}
                id='standard-basic'
                type='phone'
                defaultValue={payLoad.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                variant='outlined'
                size='small'
              />
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
              id='transition-modal-description'
              sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
            >
              <strong className='capitalize'>Password</strong>
            </Typography>

            <div>
              <TextField
                sx={{ my: 'auto' }}
                type='password'
                id='standard-basic'
                defaultValue={payLoad.password}
                onChange={(e) => handleChange('password', e.target.value)}
                variant='outlined'
                size='small'
              />
              {validator.isEmpty(payLoad.password) && (
                <div className='text-red-500 mt-1 pl-2'>Password required </div>
              )}
            </div>
          </Box>

          {/* 
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
              <strong className='capitalize'> Confirm Password</strong>
            </Typography>

            <TextField
              sx={{ my: 'auto' }}
              type='password'
              id='standard-basic'
              defaultValue={'email'}
              variant='outlined'
              size='small'
            />
          </Box> */}

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
              <strong className='capitalize'>Address</strong>
            </Typography>

            <div>
              <TextField
                multiline
                maxRows={4}
                sx={{ my: 'auto' }}
                id='standard-basic'
                defaultValue={payLoad.address}
                onChange={(e) => handleChange('address', e.target.value)}
                variant='outlined'
                size='small'
              />
              {validator.isEmpty(payLoad.address) && (
                <div className='text-red-500 mt-1 pl-2'>Address required </div>
              )}
            </div>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: 'flex', columnGap: 3, justifyContent: 'end' }}>
            <Button variant='outlined' onClick={_props.handleClose}>
              Cancel
            </Button>
            <Button variant='contained' onClick={() => submitData()}>
              Save
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default Register;
