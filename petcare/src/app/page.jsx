'use client';

import MedicationIcon from '@mui/icons-material/Medication';
import PetsIcon from '@mui/icons-material/Pets';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

export default function Home() {
  return (
    <div>
      <div className=''>
        <div className='container-fluid bg-light'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-5'>
                <img
                  className='img-fluid w-100'
                  src='/img/feature.jpg'
                  alt=''
                />
              </div>
              <div className='col-lg-7 py-5 py-lg-0 px-3 px-lg-5'>
                <h4 className='text-secondary mb-3'>Why Choose Us?</h4>
                <h1 className='display-4 mb-4'>
                  <span className='text-[#1989ce]'>Special Care</span> On Pets
                </h1>
                <p className='mb-4'>
                  "Your pet deserves the best, and we provide the special care
                  they need to thrive. Trust us to treat your furry family
                  member like our own, with love and attention every step of the
                  way."
                </p>
                <div className='row py-2'>
                  <div className='col-6'>
                    <div className='d-flex align-items-center mb-4'>
                      <PetsIcon
                        className='text-green-600 m-0 mr-3'
                        fontSize='large'
                      />
                      <h5 className='text-truncate m-0'>Best In Industry</h5>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='d-flex align-items-center mb-4'>
                      <MedicationIcon
                        className='text-green-600 m-0 mr-3'
                        fontSize='large'
                      />
                      <h5 className='text-truncate m-0'>Emergency Services</h5>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='d-flex align-items-center'>
                      <AccountBalanceIcon
                        className='text-green-600 m-0 mr-3'
                        fontSize='large'
                      />
                      <h5 className='text-truncate m-0'>Special Care</h5>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='d-flex align-items-center'>
                      <SupportAgentIcon
                        className='text-green-600 m-0 mr-3'
                        fontSize='large'
                      />
                      <h5 className='text-truncate m-0'>Customer Support</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="bg-white text-gray-800">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-[#1989ce] mb-2">Start Selling on PetCare</h2>
              <p className="text-lg text-gray-600">Turn your passion for pets into profit.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <img src={"/img/img12.jpg"} alt="Sell Products" className="rounded-lg shadow-md" />
              </div>
              <div>
                <ol className="list-decimal list-inside space-y-4 text-lg">
                  <li><span className="font-semibold text-[#1989ce]">Signup</span> to create your seller account.</li>
                  <li><span className="font-semibold text-[#1989ce]">Sign In</span> to access your dashboard.</li>
                  <li><span className="font-semibold text-[#1989ce]">Add Products</span> related to pet care, grooming, or wellness.</li>
                  <li><span className="font-semibold text-[#1989ce]">Get Approved</span> by our admin team for quality check.</li>
                  <li><span className="font-semibold text-[#1989ce]">Start Selling</span> and reach thousands of pet lovers!</li>
                </ol>

                <div className="mt-8">
                  <a href="/seller-login" className="inline-block bg-[#1989ce] hover:bg-blue-700 text-white text-lg font-medium py-2 px-6 rounded transition duration-300">
                    Login to Start Selling
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 py-10">
            <div className="container mx-auto text-center">
              <h3 className="text-3xl font-bold mb-3 text-[#1989ce]">Why Sell With Us?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join a trusted platform dedicated to pet lovers. We help you manage orders, reach a loyal customer base, and grow your business with ease.
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded shadow">
                  <h4 className="text-lg font-semibold text-green-600">Zero Listing Fee</h4>
                  <p className="text-sm text-gray-500">Add your products for free.</p>
                </div>
                <div className="bg-white p-6 rounded shadow">
                  <h4 className="text-lg font-semibold text-green-600">Admin Verified</h4>
                  <p className="text-sm text-gray-500">Only quality products go live.</p>
                </div>
                <div className="bg-white p-6 rounded shadow">
                  <h4 className="text-lg font-semibold text-green-600">Customer Support</h4>
                  <p className="text-sm text-gray-500">We're here 24/7 for you and your customers.</p>
                </div>
                <div className="bg-white p-6 rounded shadow">
                  <h4 className="text-lg font-semibold text-green-600">Fast Payouts</h4>
                  <p className="text-sm text-gray-500">Get paid quickly & securely.</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='container'>
          <div className='d-flex flex-column text-center mb-5 mt-10'>
            <h4 className='text-secondary mb-3'>Our Services</h4>
            <h1 className='display-4 m-0'>
              <span className='text-[#1989ce]'>Premium</span> Pet Services
            </h1>
          </div>
          <div className='row'>
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
                  A general checkup provides a comprehensive health assessment
                  for your pet, ensuring early detection of any issues and
                  maintaining their overall well-being.
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
                  providing services like bathing, brushing, ensuring they feel
                  and look their best.
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
                  providing peace of mind by ensuring they can always be
                  returned to you if lost.
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
    </div>
  );
}
