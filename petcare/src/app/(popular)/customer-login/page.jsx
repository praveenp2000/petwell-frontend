'use client';

import { useState } from 'react';
import Login from '../../../shared/components/Modal/Login';

const Page = () => {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <div className='bg-gray-100 flex items-center justify-center h-[800px]'>
      <div className='bg-white p-8 rounded-xl shadow-lg max-w-sm w-full text-center'>
        <h2 className='text-2xl font-bold mb-4 text-gray-800'>Please Login</h2>
        <p className='text-gray-600 mb-6'>
          You must be logged in to purchase our products.
        </p>

        <button
          className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition'
          onClick={() => setOpenLogin(true)}
        >
          Login
        </button>
      </div>

      <Login
        open={openLogin}
        handleClose={() => setOpenLogin(false)}
        type={'customer'}
      />
    </div>
  );
};

export default Page;
