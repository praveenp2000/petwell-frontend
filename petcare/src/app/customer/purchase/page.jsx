'use client';
import { PreviewModal } from '../../../shared/components/Modal/PreviewModal';
import { EditModal } from '../../../shared/components/Modal/EditModal';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Pagination from '@mui/material/Pagination';
import LoadingScreen from '../../../shared/components/LoadingScreen/LoadingScreen';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import Link from 'next/link';
import { Invoice } from '../../../shared/components/invoice/Invoice';
import { Backdrop, Box, Fade, Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 730,
  bgcolor: '#F4EEE0',
  boxShadow: 24,
  outline: 'none',
  border: 'none',
  p: 4,
  overflowY: 'auto',
  maxHeight: '65vh',
};

const Page = () => {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [purchaseData, setPurchaseData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(10);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [previewData, setPreviewData] = useState([]);
  const [printOpen, setPrintOpen] = useState(false);

  const payload = {
    page_size: pageSize,
    current_page: page,
  };

  useEffect(() => {
    const storeAdoption = async () => {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/getallpurchase/',
          payload
        );
        setPurchaseData(response.data);
        setTotalRecords(response.data.total_records);
      } catch (error) {
        console.error(
          '❌ Error saving adoption:',
          error.response ? error.response.data : error.message
        );
      }
    };
    storeAdoption();
  }, [pageSize, page]);

  if (purchaseData.length === 0) return <LoadingScreen />;

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div className='flex justify-between my-auto font-[Poppins] w-full'>
        <h4 className='text-center text-[#ECDFCC]'>Purchase List</h4>
        <div className='text-center justify-center'>
          <div className='w-20 mb-4'>
            <select
              onChange={(event) => setPageSize(event.target.value)}
              value={pageSize}
              className='z-10 cursor-pointer block w-full px-2 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500'
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>
        </div>
      </div>

      <div className='table-container w-full font-[Poppins]'>
        <table>
          <thead>
            <tr>
              <th>Id </th>
              <th className='w-[250px]'>Date</th>
              <th>Paid</th>
              <th className='w-[250px]'>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {purchaseData.data.map((data, index) => (
              <tr key={index}>
                <td>{data.purchaseid}</td>
                <td>{data.date}</td>
                <td>{data.payed ? 'Yes' : 'No'}</td>
                <td>{data.delivery_status}</td>
                <td className='flex gap-x-2 h-[73.5px] py-auto'>
                  {/* <EditIcon
                    sx={{
                      height: 20,
                      width: 20,
                      cursor: 'pointer',
                      marginY: 'auto',
                      '&:hover': {
                        color: '#1989ce',
                        transform: 'scale(1.1)',
                      },
                    }}
                    onClick={() => {
                      setPreviewData(data);
                      setEditOpen(true);
                    }}
                  /> */}

                  <LocalPrintshopIcon
                    onClick={() => { setPrintOpen(true); setPreviewData(data); }}
                    sx={{
                      height: 20,
                      width: 20,
                      cursor: 'pointer',
                      marginY: 'auto',
                      '&:hover': {
                        color: '#1989ce',
                        transform: 'scale(1.1)',
                      },

                    }} />

                  <VisibilityIcon
                    sx={{
                      height: 20,
                      width: 20,
                      cursor: 'pointer',
                      marginY: 'auto',
                      '&:hover': {
                        color: '#1989ce',
                        transform: 'scale(1.1)',
                      },
                    }}
                    onClick={() => {
                      setPreviewData(data);
                      setPreviewOpen(true);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='mt-2 mb-2'>
          <Pagination
            count={Math.ceil(totalRecords / pageSize)}
            page={page}
            size='small'
            onChange={handleChange}
          />
        </div>

        {previewOpen && (
          <PreviewModal
            title='Purchase Details'
            open={true}
            handleClose={() => setPreviewOpen(false)}
            data={previewData}
          />
        )}

        {editOpen && (
          <EditModal
            title='Edit Purchase Details'
            open={true}
            handleClose={() => setEditOpen(false)}
            data={previewData}
          />
        )}

        {printOpen &&
          <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            open={printOpen}
            onClose={() => setPrintOpen(false)}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}

          >
            <Fade in={printOpen} >
              <Box style={style} sx={{
                backgroundColor: 'white'
              }}>
                <Invoice
                  cart={previewData}
                />
              </Box>
            </Fade>
          </Modal>
        }



      </div >
    </>
  );
};

export default Page;
