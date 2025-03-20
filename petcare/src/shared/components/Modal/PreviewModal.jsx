import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

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

export const PreviewModal = (_props) => {
  console.log('open', _props);
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

          {Object.entries(_props.data).map(([key, value], index) => (

            <div key={index} className='w-full'>

              {key === 'image' && (
                <div className='w-full justify-center mt-10'>
                  <img className='w-[90px] h-[90px]' src={`http://127.0.0.1:8000${value}`} />
                </div>
              )}

              <Typography
                id='transition-modal-description'
                sx={{ mt: 2, fontFamily: 'Poppins', color: '#393646' }}
              >
                {key !== 'image' && (
                  <>
                    <strong className='capitalize'>{key}:  </strong>{value}
                  </>
                )}

              </Typography>
            </div>
          ))}
        </Box>
      </Fade>
    </Modal>
  );
};
