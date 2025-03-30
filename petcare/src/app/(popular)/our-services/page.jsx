'use client';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const Page = () => (
  <div className='container-fluid bg-light pt-5'>
    <div className='container py-5'>
      <div className='d-flex flex-column text-center mb-5'>
        <h4 className='text-secondary mb-3'>Our Services</h4>
        <h1 className='display-4 m-0'>
          <span className='text-[#1989ce]'>Premium</span> Pet Services
        </h1>
      </div>
      <div className='row pb-3'>
        <div className='col-md-6 col-lg-4 mb-4'>
          <div className='d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5'>
            <MapsHomeWorkIcon
              className='mb-3 text-[#1989ce] mx-auto'
              sx={{ fontSize: 130 }}
            />
            <h3 className='mb-3'>Deworming</h3>
            <p>
              Deworming ensures your pet's health by eliminating harmful
              parasites, keeping them safe, comfortable, and free from
              infections
            </p>
            {/* <a className='text-uppercase font-weight-bold' href=''>
              Read More
            </a> */}
          </div>
        </div>
        <div className='col-md-6 col-lg-4 mb-4'>
          <div className='d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5'>
            <FastfoodIcon
              className='mb-3 text-[#1989ce] mx-auto'
              sx={{ fontSize: 130 }}
            />
            <h3 className='mb-3'>General Checkup</h3>
            <p>
              A general checkup provides a comprehensive health assessment for
              your pet, ensuring early detection of any issues and maintaining
              their overall well-being.
            </p>
            {/* <a className='text-uppercase font-weight-bold' href=''>
              Read More
            </a> */}
          </div>
        </div>
        <div className='col-md-6 col-lg-4 mb-4'>
          <div className='d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5'>
            <FaceRetouchingNaturalIcon
              className='mb-3 text-[#1989ce] mx-auto'
              sx={{ fontSize: 130 }}
            />
            <h3 className='mb-3'>Pet Grooming</h3>
            <p>
              Pet grooming enhances your pet's appearance and health by
              providing services like bathing, brushing, ensuring they feel and
              look their best.
            </p>
            {/* <a className='text-uppercase font-weight-bold' href=''>
              Read More
            </a> */}
          </div>
        </div>
        <div className='col-md-6 col-lg-4 mb-4'>
          <div className='d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5'>
            <AccessibilityNewIcon
              className='mb-3 text-[#1989ce] mx-auto'
              sx={{ fontSize: 130 }}
            />
            <h3 className='mb-3'>Microchipping</h3>
            <p>
              Microchipping is a safe, permanent way to identify your pet,
              providing peace of mind by ensuring they can always be returned to
              you if lost.
            </p>
            {/* <a className='text-uppercase font-weight-bold' href=''>
              Read More
            </a> */}
          </div>
        </div>
        <div className='col-md-6 col-lg-4 mb-4'>
          <div className='d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5'>
            <FitnessCenterIcon
              className='mb-3 text-[#1989ce] mx-auto'
              sx={{ fontSize: 130 }}
            />
            <h3 className='mb-3'>X-ray</h3>
            <p>
              X-ray imaging allows us to safely and accurately diagnose
              injuries, fractures, and internal health issues in your pet,
              helping us provide the best treatment plan.
            </p>
            {/* <a className='text-uppercase font-weight-bold' href=''>
              Read More
            </a> */}
          </div>
        </div>
        <div className='col-md-6 col-lg-4 mb-4'>
          <div className='d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5'>
            <MedicalServicesIcon
              className='mb-3 text-[#1989ce] mx-auto'
              sx={{ fontSize: 130 }}
            />
            <h3 className='mb-3'>Emergency Treatment</h3>
            <p>
              Emergency treatment provides immediate, ensuring quick and
              effective intervention to stabilize their condition.
            </p>
            {/* <a className='text-uppercase font-weight-bold' href=''>
              Read More
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page;
