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
import { useState } from 'react';

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

export const AddForms = ({ open, handleClose }) => {
  const storedUser = sessionStorage.getItem('user');
  const userData = JSON.parse(storedUser || '{}');
  const seller_id = userData.sid || '';

  const [payLoad, setPayLoad] = useState({
    seller_id: seller_id,
    name: '',
    price: '',
    quantity: '',
    animal: '',
    producttype: '',
    rating: 4,
    approved: false,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setPayLoad((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(payLoad).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch('http://127.0.0.1:8000/addproduct/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Product added successfully!');
        setPayLoad((prev) => ({
          ...prev,
          name: '',
          price: '',
          quantity: '',
          animal: '',
          producttype: '',
          image: null,
        }));
        handleClose();
      } else {
        const errorData = await response.json();
        alert('Error: ' + JSON.stringify(errorData));
      }
    } catch (error) {
      alert('Network error: ' + error.message);
    }
  };

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style} component='form' onSubmit={handleSubmit}>
          <Typography
            id='transition-modal-title'
            sx={{ fontSize: 22, mb: 4, fontFamily: 'Poppins', fontWeight: 600, color: 'black', textAlign: 'center' }}
          >
            Add Products
          </Typography>

          {['name', 'price', 'quantity', 'animal', 'producttype'].map((field) => (
            <Box key={field} sx={{ mt: 2, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <Typography sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}>
                <strong className='capitalize'>{field}</strong>
              </Typography>
              <TextField
                sx={{ my: 'auto' }}
                name={field}
                value={payLoad[field]}
                onChange={handleChange}
                variant='outlined'
                size='small'
                type={field === 'price' || field === 'quantity' ? 'number' : 'text'}
              />
            </Box>
          ))}

          <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Typography sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}>
              <strong className='capitalize'>Image</strong>
            </Typography>
            <input type='file' name='image' id='image' onChange={handleChange} required />
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: 'flex', columnGap: 3, justifyContent: 'end' }}>
            <Button variant='outlined' onClick={handleClose}>
              Cancel
            </Button>
            <Button variant='contained' type='submit'>
              Save
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};