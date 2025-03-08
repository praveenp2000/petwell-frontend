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
      <div className="">
        <div className="container-fluid bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img className="img-fluid w-100" src="/img/feature.jpg" alt="" />
              </div>
              <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                <h4 className="text-secondary mb-3">Why Choose Us?</h4>
                <h1 className="display-4 mb-4"><span className="text-primary">Special Care</span> On Pets</h1>
                <p className="mb-4">Dolor lorem lorem ipsum sit et ipsum. Sadip sea amet diam sed ut vero no sit. Et elitr stet sed sit sed kasd. Erat duo eos et erat sed diam duo</p>
                <div className="row py-2">
                  <div className="col-6">
                    <div className="d-flex align-items-center mb-4">
                      <PetsIcon className="text-green-600 m-0 mr-3" fontSize='large' />
                      <h5 className="text-truncate m-0">Best In Industry</h5>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center mb-4">
                      <MedicationIcon className="text-green-600 m-0 mr-3" fontSize='large' />
                      <h5 className="text-truncate m-0">Emergency Services</h5>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <AccountBalanceIcon className="text-green-600 m-0 mr-3" fontSize='large' />
                      <h5 className="text-truncate m-0">Special Care</h5>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <SupportAgentIcon className="text-green-600 m-0 mr-3" fontSize='large' />
                      <h5 className="text-truncate m-0">Customer Support</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-secondary mb-3">Our Services</h4>
            <h1 className="display-4 m-0"><span className="text-primary">Premium</span> Pet Services</h1>
          </div>
          <div className="row pb-3">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                <MapsHomeWorkIcon className='mb-3 text-[#1989ce] mx-auto' sx={{ fontSize: 130 }} />
                <h3 className="mb-3">Pet Boarding</h3>
                <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                <a className="text-uppercase font-weight-bold" href="">Read More</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                <FastfoodIcon className='mb-3 text-[#1989ce] mx-auto' sx={{ fontSize: 130 }} />
                <h3 className="mb-3">Pet Feeding</h3>
                <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                <a className="text-uppercase font-weight-bold" href="">Read More</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                <FaceRetouchingNaturalIcon className='mb-3 text-[#1989ce] mx-auto' sx={{ fontSize: 130 }} />
                <h3 className="mb-3">Pet Grooming</h3>
                <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                <a className="text-uppercase font-weight-bold" href="">Read More</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                <AccessibilityNewIcon className='mb-3 text-[#1989ce] mx-auto' sx={{ fontSize: 130 }} />
                <h3 className="mb-3">Per Training</h3>
                <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                <a className="text-uppercase font-weight-bold" href="">Read More</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                <FitnessCenterIcon className='mb-3 text-[#1989ce] mx-auto' sx={{ fontSize: 130 }} />
                <h3 className="mb-3">Pet Exercise</h3>
                <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                <a className="text-uppercase font-weight-bold" href="">Read More</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                <MedicalServicesIcon className='mb-3 text-[#1989ce] mx-auto' sx={{ fontSize: 130 }} />
                <h3 className="mb-3">Pet Treatment</h3>
                <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                <a className="text-uppercase font-weight-bold" href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
