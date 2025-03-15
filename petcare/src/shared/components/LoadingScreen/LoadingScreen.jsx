import { CircularProgress } from '@mui/material';
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black z-[2000]'>
      <CircularProgress className='text-white' />
    </div>
  );
};

export default LoadingScreen;
