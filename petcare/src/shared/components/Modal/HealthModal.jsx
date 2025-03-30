import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';

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
    maxHeight: '75vh',
};

export const HealthModal = (_props) => {
    console.log('open', _props);
    const [healthData, setHealthData] = useState([]);

    useEffect(() => {
        const getCustId = async () => {
            try {
                const response = await axios.get(
                    'http://127.0.0.1:8000/gethealthbypetId/' + _props.id
                );

                setHealthData(response.data);

            } catch (error) {
                alert('Network error: ' + error.message);
            }
        }

        if (typeof _props.id != 'undefined')
            getCustId();
    }, [_props]);

    console.log('poool', healthData);
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
                        {`Health History of ${_props.data.name}`}
                    </Typography>

                    {healthData.length > 0 && healthData.map((data, idx) => (
                        <div key={idx} className="mb-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">{moment(data?.date, 'DD-MM-YYYY').format('MMMM D, YYYY')}</h3>
                            <div key={data.hid} className="bg-gray-100 p-4 rounded-lg mb-3 shadow-sm">
                                <p className="text-gray-700"><strong>Description:</strong> {data?.description}</p>
                                <p className="text-gray-700"><strong>Prescription:</strong> {data?.prescription}</p>
                            </div>
                        </div>
                    ))}

                    <button onClick={() => _props.handleClose()} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Close
                    </button>
                </Box>
            </Fade>
        </Modal>
    );
};
