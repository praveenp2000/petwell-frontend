'use client';
import { PreviewModal } from '../../../../shared/components/Modal/PreviewModal';
import { EditModal } from '../../../../shared/components/Modal/EditModal';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Pagination from '@mui/material/Pagination';
import LoadingScreen from '../../../../shared/components/LoadingScreen/LoadingScreen';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

const Page = () => {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [productData, setProductData] = useState([]);
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
          'http://127.0.0.1:8000/getallproduct/',
          payload
        );
        setProductData(response.data);
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

  if (productData.length === 0) return <LoadingScreen />;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleApproval = async (productId, approved) => {
    try {
      // Find the updated product
      const updatedProduct = productData.data.find(
        (product) => product.productid === productId
      );

      // Create a new object with the updated "approved" value
      const updatedProductPayload = { ...updatedProduct, approved: approved };

      // Update local state optimistically
      const updatedProducts = productData.data.map((product) =>
        product.productid === productId ? updatedProductPayload : product
      );


      // API call to update the product approval status (sending only the updated product)
      await axios.put("http://127.0.0.1:8000/editproduct/", updatedProductPayload);
      const response = await axios.post(
        'http://127.0.0.1:8000/getallproduct/',
        payload
      );
      setProductData(response.data);
      setTotalRecords(response.data.total_records);
    } catch (error) {
      alert("Failed to update product status. Try again!");
    }
  };


  return (
    <div className='pb-[190px]'>
      <div className='flex justify-between my-auto font-[Poppins] w-full'>
        <h4 className='text-center text-[#ECDFCC]'>Product List</h4>
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
              <th>Product id</th>
              <th className='w-[250px]'>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
              <th className='w-[150px]'>Action</th>
            </tr>
          </thead>
          <tbody>
            {productData.data.map((data, index) => (
              <tr key={index}>
                <td>{data.productid}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.quantity}</td>
                <td>
                  {data.approved === true ? (
                    <Button
                      sx={{ height: 36, textTransform: 'capitalize', backgroundColor: 'red' }}
                      variant='contained'
                      onClick={() => handleApproval(data.productid, false)}
                    >
                      Reject
                    </Button>
                  ) : (
                    <Button
                      sx={{ height: 36, textTransform: 'capitalize', }}
                      variant='contained'
                      onClick={() => handleApproval(data.productid, true)}
                    >
                      Approve
                    </Button>
                  )}
                </td>
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
            title='Prodcut Details'
            open={true}
            handleClose={() => setPreviewOpen(false)}
            data={previewData}
          />
        )}

        {editOpen && (
          <EditModal
            title='Edit Product Details'
            type='product'
            url='http://127.0.0.1:8000/editproduct/'
            open={true}
            handleClose={() => setEditOpen(false)}
            data={previewData}
          />
        )}
      </div>
    </div >
  );
};

export default Page;
