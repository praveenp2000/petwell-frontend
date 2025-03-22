import React from 'react';

const Report = (_props) => {

  const returnReports = () => {
    if (_props.type === 'seller')
      return (
        <div className='grid grid-cols-3 gap-8'>
          <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>101 Sales</div>

          <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>
            10 Customers
          </div>

        </div>
      )

    else
      if (_props.type == 'admin')
        return (
          <div className='grid grid-cols-3 gap-8'>
            <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>101 Sales</div>
            <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>
              102 Services
            </div>
            <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>
              10 Pets Treated
            </div>
            <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>
              10 Customers
            </div>
            <div className='bg-[#424769] px-5 py-5 text-[#ECDFCC]'>10 Sellers</div>
          </div>
        )
  }
  return (
    <div className='pb-[180px] font-[Poppins] h-[100vh]'>
      <div className='text-lg text-[#ECDFCC] font-bold pb-10'>Report</div>
      {returnReports()}
    </div>
  );
};

export default Report;
