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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

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

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const AddForms = (_props) => {
  const [payLoad, setPayLoad] = useState({
    seller_id: '',
    name: '',
    price: '',
    quantity: '',
    animal: '',
    producttype: '',
    rating: 4,
    approved: false,
    image: '',
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]); // Store the selected file
  };

  // addproduct/

  const handleChange = (field, value) => {
    setPayLoad((prevData) => ({
      ...prevData,
      [field]: value,
    }));
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
            {'Add Products'}
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
              <strong className='capitalize'>Product Name</strong>
            </Typography>

            <TextField
              sx={{ my: 'auto' }}
              id='standard-basic'
              defaultValue={payLoad.name}
              onChange={(e) => handleChange('name', e.target.value)}
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
              <strong className='capitalize'>Price</strong>
            </Typography>

            <TextField
              sx={{ my: 'auto' }}
              id='standard-basic'
              type='email'
              defaultValue={payLoad.price}
              onChange={(e) => handleChange('price', e.target.value)}
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
              <strong className='capitalize'>Quantity</strong>
            </Typography>

            <TextField
              sx={{ my: 'auto' }}
              id='standard-basic'
              type='phone'
              defaultValue={payLoad.quantity}
              onChange={(e) => handleChange('quantity', e.target.value)}
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
              <strong className='capitalize'>Animal</strong>
            </Typography>

            <TextField
              sx={{ my: 'auto' }}
              type='password'
              id='standard-basic'
              defaultValue={payLoad.animal}
              onChange={(e) => handleChange('animal', e.target.value)}
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
              <strong className='capitalize'> Product Type</strong>
            </Typography>

            <TextField
              sx={{ my: 'auto' }}
              type='password'
              id='standard-basic'
              defaultValue={payLoad.producttype}
              onChange={(e) => handleChange('producttype', e.target.value)}
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
              <strong className='capitalize'>Image</strong>
            </Typography>

            <Button
              component='label'
              variant='contained'
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload files
              <VisuallyHiddenInput
                type='file'
                onChange={(event) => console.log(event.target.files)}
                multiple
              />
            </Button>
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
