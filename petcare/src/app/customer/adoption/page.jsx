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
import { Button } from '@mui/material';
import { AddForms } from './AddForms';

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

  const storeAdoption = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/getalladoptionbycustomer/',
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
    const storeAdoption = async () => {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/getalladoptionbycustomer/',
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
    storeAdoption();
  }, [pageSize, page]);

  if (petData.length === 0) return <LoadingScreen />;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const updateAdoptionStatus = async (adoptionId) => {

    const response = await axios.put(
      `http://127.0.0.1:8000/editadoption/`,
      { adopted: true, aid: adoptionId }, // Send only the field that needs updating
    );

    if (response.data === 'Update successfully') {
      alert("Pet marked as adopted!");
      storeAdoption();
    }

  };

  return (
    <div className='h-auto min-h-[640px]'>
      <div className='flex justify-between my-auto font-[Poppins] w-full'>
        <h4 className='text-center text-[#ECDFCC]'>Adoptions</h4>
        <Button
          sx={{ height: 36, textTransform: 'capitalize' }}
          variant='contained'
          onClick={() => setOpenForm(true)}
        >
          Add Pet For Adoption
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
              <th>Id</th>
              <th className='w-[250px]'>Breed</th>
              <th className='w-[250px]'>Animal</th>
              <th className='w-[250px]'>Age</th>
              <th>Action</th>
              <th>Adoption Status</th>
            </tr>
          </thead>
          <tbody>
            {petData.data.map((data, index) => (
              <tr key={index}>
                <td>{data.aid}</td>
                <td>{data.breed}</td>
                <td>{data.animal}</td>
                <td>{data.age}</td>
                <td className='flex gap-x-2 h-[73.5px] my-auto '>
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

                <td className='h-[73.5px] my-auto '>
                  {
                    !data?.adopted ? (
                      <Button
                        sx={{ height: 36, textTransform: 'capitalize', backgroundColor: 'green' }}
                        variant='contained'
                        onClick={() => updateAdoptionStatus(data.aid)}
                      >
                        Adopted
                      </Button>
                    ) : (
                      <Button
                        sx={{ height: 36, textTransform: 'capitalize', backgroundColor: 'green' }}
                        variant='contained'
                        onClick={() => updateAdoptionStatus(data.aid)}
                        disabled
                      >
                        Adopted
                      </Button>
                    )
                  }
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
        getAllAdoptions={() => storeAdoption()}
        open={openForm}
        handleClose={() => setOpenForm(false)}
      />
    </div>
  );
};

export default Page;
