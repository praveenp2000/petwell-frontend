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

import axios from 'axios';
import moment from "moment";

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

export const AddHealthForms = (_props) => {

  const [payLoad, setPayLoad] = useState({
    customer_id: 0,
    pet_id: _props.id,
    description: '',
    prescription: '',
    date: _props.date
  });

  useEffect(() => {
    const getCustId = async () => {
      try {
        const cust = await axios.get(
          'http://127.0.0.1:8000/getcustomeridfrompetid/' + _props.id
        );
        setPayLoad((prevState) => ({
          ...prevState,
          customer_id: cust.data.cid,
        }));

      } catch (error) {
        alert('Network error: ' + error.message);
      }
    }

    if (typeof _props.id != 'undefined')
      getCustId();
  }, [_props]);

  const handleChange = (field, value) => {
    setPayLoad((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const submitData = async (e) => {
    const response = await axios.post(
      'http://127.0.0.1:8000/addhealth/',
      payLoad
    );
    if (response?.data === 'Added successfully') {
      alert('Record Added successfully!');
      _props.handleClose();
    }
    else alert('Unknown Error!');
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
            {'Health Record Details'}
          </Typography>


          <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Typography sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}>
              <strong className='capitalize'>Pet Id</strong>
            </Typography>
            <TextField
              sx={{ my: 'auto' }}
              name='pet_id'
              value={payLoad.pet_id}
              disabled={true}
              variant='outlined'
              size='small'
            />
          </Box>


          <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Typography sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}>
              <strong className='capitalize'>Description & Symptoms</strong>
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



          <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Typography sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto' }}>
              <strong className='capitalize'>Prescription</strong>
            </Typography>
            <TextField
              sx={{ my: 'auto' }}
              name='prescription'
              minRows={4}
              multiline={true}
              value={payLoad.prescription}
              onChange={(e) => handleChange('prescription', e.target.value)}
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
              Add
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
