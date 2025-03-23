'use client';
import { Button, Divider, TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axios from 'axios';
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
  overflowY: "auto",
  maxHeight: "65vh",
};

export const EditModal = (_props) => {
  const [editData, setData] = useState(_props.data);

  const submitData = async () => {
    const payload = editData;
    try {
      const response = await axios.put(
        _props.url,
        payload
      );

      console.log('✅ Customer saved successfully:', response.data);
      alert('Successfully Updated');
      _props.handleClose();
      window.location.reload();
    } catch (error) {
      console.error(
        '❌ Error saving adoption:',
        error.response ? error.response.data : error.message
      );
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
            }}
          >
            {_props.title}
          </Typography>

          {Object.entries(editData).map(([key, value], index) => (
            <Box
              key={index}
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
                <strong className='capitalize'>{key}:</strong>
              </Typography>

              <TextField
                disabled={key === 'image' || key.endsWith("id")}
                sx={{ my: 'auto' }}
                id='standard-basic'
                defaultValue={value}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData, // Keep previous data
                    [key]: (key === 'quantity' || key === 'price' || key === 'rating') ? Number(e.target.value) : e.target.value, // Update only the changed key
                  }))
                }
                variant='outlined'
                size='small'
              />
            </Box>
          ))}

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: 'flex', columnGap: 3, justifyContent: 'end' }}>
            <Button variant='outlined' onClick={_props.handleClose}>
              Close
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
