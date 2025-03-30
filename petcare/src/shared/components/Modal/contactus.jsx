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
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Alert from '@mui/material/Alert';
import { useGlobalState } from '../globalState/GlobalStateProvider';

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

export const ContactUs = (_props) => {
  const [userType, setUserType] = useState('Customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apiUrl, setApiUrl] = useState('http://127.0.0.1:8000/customerlogin/');
  const [navigationUrl, setNavigationUrl] = useState('/customer/booking');
  const [loginData, setLoginData] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState(0);
  const { user, setUser } = useGlobalState();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
      setStatus(0);
    }, 5000);
  }, [showAlert]);

  const payload = { email: email, name: name };

  const submitData = async () => {
    if (userType === 'Doctor') {
      setApiUrl('http://127.0.0.1:8000/doctorlogin/');
      setNavigationUrl('/doctor/booking');
    }

    if (userType === 'Seller') {
      setApiUrl('http://127.0.0.1:8000/sellerlogin/');
      setNavigationUrl('/seller/report');
    }

    if (userType === 'Customer') {
      setApiUrl('http://127.0.0.1:8000/customerlogin/');
      setNavigationUrl('/customer/booking');
    }

    if (userType === 'Admin') {
      setApiUrl('http://127.0.0.1:8000/adminlogin/');
      setNavigationUrl('/admin/report');
    }

    try {
      const response = await axios.post(apiUrl, payload);
      setLoginData(response.data);
      if (response.data.message === 'Login successfull') {
        setStatus(1);
        setUser(response.data.data);
        sessionStorage.setItem('user', JSON.stringify(response.data.data));
        _props.handleClose();
        router.push(navigationUrl);
      } else {
        setStatus(2);
        setShowAlert(true);
      }
    } catch (error) {
      setStatus(0);
      setShowAlert(false);
    }
  };

  return (
    <>
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
              {'Contact-Us'}
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
                <strong className='capitalize'>Email</strong>
              </Typography>

              <TextField
                sx={{ my: 'auto' }}
                id='email'
                type='email'
                defaultValue={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
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
                id='transition-modal-description'
                sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
              >
                <strong className='capitalize'>Name</strong>
              </Typography>

              <TextField
                sx={{ my: 'auto' }}
                type='text'
                id='name'
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                // defaultValue={name}
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
                id='transition-modal-description'
                sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
              >
                <strong className='capitalize'>Phone Number</strong>
              </Typography>

              <TextField
                sx={{ my: 'auto' }}
                type='text'
                id='name'
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                // defaultValue={name}
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
                id='transition-modal-description'
                sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}
              >
                <strong className='capitalize'>Message</strong>
              </Typography>

              <TextField multiline={true} rows={4}
                sx={{ my: 'auto' }}
                type='text'
                id='name'
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                // defaultValue={name}
                variant='outlined'
                size='small'
              />
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', columnGap: 3, justifyContent: 'end' }}>
              <Button variant='outlined' onClick={_props.handleClose}>
                Cancel
              </Button>
              <Button variant='contained' onClick={() => submitData()}>
                Submit
              </Button>
            </Box>

            <Box sx={{ pt: 4, pb: 4 }}>
              {showAlert && status === 2 && (
                <Alert variant='filled' severity='error'>
                  {loginData.message}
                </Alert>
              )}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

