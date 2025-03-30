'use client'
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const Page = () => {

    const storedUser = sessionStorage.getItem('user');
    const userData = JSON.parse(storedUser);
    const user_id = userData?.cid;


    const [payLoad, setPayload] = useState({
        current_password: '',
        password: '',
        user_id: user_id || ''
    });

    const submitData = async (e) => {
        const response = await axios.put(
            'http://127.0.0.1:8000/changecustomerpasswordapi/',
            payLoad
        );
        if (response?.data === 'Password Changed') {
            alert('Password Changed successfully!');
        }
        else if (response?.data === 'Enter Correct Password') {
            alert('Enter Correct Password!');
        }
        else alert('Unknown Error!');
    };

    const handleChange = (field, value) => {
        setPayload((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className='h-[100vh] w-full'>
            <h4 className='text-center text-[#ECDFCC] font-[Poppins]'>Change Password</h4>

            <div className=" mt-10 h-[450px] w-full">
                <div className="">
                    <Typography>Current Password: </Typography>
                    <TextField
                        type="password"
                        sx={{
                            mt: 4,
                            input: { color: 'white' }, // Text color
                            label: { color: 'white' }, // Label color
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: 'white' }, // Border color
                                '&:hover fieldset': { borderColor: '#90caf9' }, // Hover border color
                                '&.Mui-focused fieldset': { borderColor: '#64b5f6' }, // Focus border color
                            }
                        }}
                        name='pet_id'
                        value={payLoad.current_password}
                        onChange={(e) => handleChange('current_password', e.target.value)}
                        variant='outlined'
                        size='small'
                    />
                </div>

                <div className="mt-7">
                    <Typography>New Password: </Typography>
                    <TextField
                        type="password"
                        sx={{
                            mt: 4,
                            input: { color: 'white' }, // Text color
                            label: { color: 'white' }, // Label color
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: 'white' }, // Border color
                                '&:hover fieldset': { borderColor: '#90caf9' }, // Hover border color
                                '&.Mui-focused fieldset': { borderColor: '#64b5f6' }, // Focus border color
                            }
                        }}
                        name='pet_id'
                        value={payLoad.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        variant='outlined'
                        size='small'
                    />
                </div>

                <Button variant='contained' onClick={() => submitData()} sx={{ mt: 4 }}>
                    Update
                </Button>

            </div>

        </div>
    )
}

export default Page;