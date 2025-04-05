'use client';

import { useGlobalState } from "../../../shared/components/globalState/GlobalStateProvider";
import { Alert, Box, Button, Divider, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const payload = { email: email, password: password };

  const submitData = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/adminlogin/', payload);
      setLoginData(response.data);
      if (response.data.message === 'Login successfull') {
        setStatus(1);
        setUser(response.data.data);
        sessionStorage.setItem('user', JSON.stringify(response.data.data));
        router.push('/admin/report');
      } else {
        setStatus(2);
        setShowAlert(true);
      }
    } catch (error) {
      setStatus(0);
      setShowAlert(false);
    }
  };
  return (<div className="bg-gray-100 flex items-center justify-center h-[800px]">

    <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Please Login</h2>

      <Box >
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
            <strong className='capitalize'>Password</strong>
          </Typography>

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
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', columnGap: 3, justifyContent: 'end' }}>

          <Button variant='contained' onClick={() => submitData()}>
            Login
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

    </div>

  </div>
  );
}


export default Page;
