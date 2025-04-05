'use client';

import { useGlobalState } from "../../../shared/components/globalState/GlobalStateProvider";
import { Alert, Backdrop, Box, Button, Divider, Fade, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
};


export const Register = (_props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
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

  const payload = { email: email, password: password, name: name };

  const submitData = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/sellerregister/', payload);
      setLoginData(response.data);
      console.log('lolo', response.data);
      if (response.data === 'Added successfully') {
        alert("Registration Success, Login to continue")
        setStatus(1);
        _props.handleClose();
      } else {
        alert(response.data)
      }
    } catch (error) {
      setStatus(0);
      setShowAlert(false);
    }
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
          <Box >
            <Typography
              id='transition-modal-description'
              sx={{ fontFamily: 'Poppins', color: '#393646', my: 'auto', }}
            >
              <strong className='capitalize'>Seller Registration </strong>
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
                <strong className='capitalize'>Name</strong>
              </Typography>

              <Box>
                <TextField
                  sx={{ my: 'auto' }}
                  id='name'
                  type='name'
                  defaultValue={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  variant='outlined'
                  size='small'
                />
                {validator.isEmpty(name) && <div className="text-red-500 mt-1 pl-2">Name required</div>}
              </Box>


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

              <Box>
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
                {!validator.isEmail(email) && <div className="text-red-500 mt-1 pl-2">Not a valid email</div>}
              </Box>


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
              <Box>
                <TextField
                  sx={{ my: 'auto' }}
                  type='password'
                  id='password'
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  defaultValue={password}
                  variant='outlined'
                  size='small'
                />
                {validator.isEmpty(password) && <div className="text-red-500 mt-1 pl-2">Password required</div>}
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', columnGap: 3, justifyContent: 'end' }}>
              <Button variant='outlined' onClick={() => submitData()} disabled={!validator.isEmail(email) || validator.isEmpty(name) || validator.isEmpty(password)}>
                Register
              </Button>
            </Box>

          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
