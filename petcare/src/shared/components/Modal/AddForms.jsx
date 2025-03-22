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
};

export const AddForms = (_props) => {
  const [payLoad, setPayLoad] = useState([]);

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
        {_props.formType == 'product' && (
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
                defaultValue={'name'}
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
                defaultValue={'email'}
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
                defaultValue={'email'}
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
                defaultValue={'email'}
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
                defaultValue={'email'}
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

              <TextField
                multiline
                maxRows={4}
                sx={{ my: 'auto' }}
                id='standard-basic'
                defaultValue={'email'}
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
                Save
              </Button>
            </Box>
          </Box>
        )}
      </Fade>
    </Modal>
  );
};
