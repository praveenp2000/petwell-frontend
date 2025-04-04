'use client';
import { PreviewModal } from '../../../shared/components/Modal/PreviewModal';
import { EditModal } from '../../../shared/components/Modal/EditModal';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Pagination from '@mui/material/Pagination';
import LoadingScreen from '../../../shared/components/LoadingScreen/LoadingScreen';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { HealthModal } from '../../../shared/components/Modal/HealthModal';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { AddForms } from './AddForms';
import { Button } from '@mui/material';

const Page = () => {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [petData, setPetData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(10);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [previewData, setPreviewData] = useState([]);
  const [healthOpen, setHealthOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const storedUser = sessionStorage.getItem('user');
  const userData = JSON.parse(storedUser);
  const user_id = userData.cid;

  const payload = {
    page_size: pageSize,
    current_page: page,
    customer_id: user_id,
  };

  const allPets = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/getcustomerpets/',
        payload
      );
      setPetData(response.data);
      setTotalRecords(response.data.total_records);
    } catch (error) {
      console.error(
        '❌ Error saving adoption:',
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    const allPets = async () => {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/getcustomerpets/',
          payload
        );
        setPetData(response.data);
        setTotalRecords(response.data.total_records);
      } catch (error) {
        console.error(
          '❌ Error saving adoption:',
          error.response ? error.response.data : error.message
        );
      }
    };
    allPets();
  }, [pageSize, page]);

  if (petData.length === 0) return <LoadingScreen />;

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className='min-h-[100vh]'>
      <div className='flex justify-between my-auto font-[Poppins] w-full'>
        <h4 className='text-center text-[#ECDFCC]'>Pet Details</h4>
        <Button
          sx={{ height: 36, textTransform: 'capitalize' }}
          variant='contained'
          onClick={() => setOpenForm(true)}
        >
          Add My Pet
        </Button>
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
              <th>Pet Id</th>
              <th className='w-[250px]'>Name</th>
              <th className='w-[250px]'>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {petData.data.map((data, index) => (
              <tr key={index}>
                <td>{data.petid}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td className='flex gap-x-2 h-[73.5px] py-auto'>
                  <LocalHospitalIcon
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
                      setHealthOpen(true);
                    }}
                  />

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
            title='Pet Details'
            open={true}
            handleClose={() => setPreviewOpen(false)}
            data={previewData}
          />
        )}

        {editOpen && (
          <EditModal
            title='Edit Pet Details'
            open={true}
            handleClose={() => setEditOpen(false)}
            data={previewData}
          />
        )}
      </div>

      {healthOpen && (
        <HealthModal
          id={previewData.petid}
          data={previewData}
          handleClose={() => setHealthOpen(false)}
          open={healthOpen}
        />
      )}

      <AddForms
        getAllPets={() => allPets()}
        open={openForm}
        handleClose={() => setOpenForm(false)}
      />
    </div>
  );
};

export default Page;
