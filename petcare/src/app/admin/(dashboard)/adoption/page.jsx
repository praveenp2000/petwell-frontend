'use client';
import { PreviewModal } from '@/shared/components/Modal/PreviewModal';
import { EditModal } from '@/shared/components/Modal/EditModal';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Pagination from '@mui/material/Pagination';
import LoadingScreen from '@/shared/components/LoadingScreen/LoadingScreen';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Page = () => {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [adoptionData, setAdoptionData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(10);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [previewData, setPreviewData] = useState([]);

  const payload = {
    page_size: pageSize,
    current_page: page,
  };

  useEffect(() => {
    const storeAdoption = async () => {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/getalladoption/',
          payload
        );
        console.log('✅ Customer saved successfully:', response.data);
        setAdoptionData(response.data);
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

  if (adoptionData.length === 0) return <LoadingScreen />;

  const handleChange = (event, value) => {
    console.log('lol', value);
    setPage(value);
  };

  return (
    <>
      <div className='flex justify-between my-auto font-[Poppins] w-full'>
        <h4 className='text-center text-[#ECDFCC]'>Adoption List</h4>
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
              <th>No</th>
              <th className='w-[250px]'>Breed</th>
              <th className='w-[250px]'>Animal</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {adoptionData.data.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.breed}</td>
                <td>{data.animal}</td>
                <td>{data.age}</td>
                <td className='flex gap-x-2 h-[73.5px] py-auto'>
                  <EditIcon
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
                  />
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
            title='Adoption Details'
            open={true}
            handleClose={() => setPreviewOpen(false)}
            data={previewData}
          />
        )}

        {editOpen && (
          <EditModal
            title='Edit Adoption Details'
            open={true}
            handleClose={() => setEditOpen(false)}
            data={previewData}
          />
        )}
      </div>
    </>
  );
};

export default Page;
