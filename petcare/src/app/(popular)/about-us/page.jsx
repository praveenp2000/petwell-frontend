'use client';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import MedicationIcon from '@mui/icons-material/Medication';
import PetsIcon from '@mui/icons-material/Pets';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Page = () => (
  <div>
    <div className='container py-5'>
      <div className='row py-5'>
        <div className='col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5'>
          <h4 className='text-[#1989ce]'>About Us</h4>
          <h1 className='display-4 mb-4'>
            <span className='text-[#1989ce]'>Boarding</span> &{' '}
            <span className='text-bg-white'>Daycare</span>
          </h1>
          <h5 className='text-muted mb-3'>
            Amet stet amet ut. Sit no vero vero no dolor. Sed erat ut sea. Just
            clita ut stet kasd at diam sit erat vero sit.
          </h5>
          <p className='mb-4'>
            Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore
            sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor
            sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo
          </p>
          <ul className='list-inline'>
            <li>
              <h5>
                <DoneAllIcon className='text-secondary mr-3 text-green-800' />
                Best In Industry
              </h5>
            </li>
            <li>
              <h5>
                <DoneAllIcon className='text-secondary mr-3 text-green-800' />
                Emergency Services
              </h5>
            </li>
            <li>
              <h5>
                <DoneAllIcon className='text-secondary mr-3 text-green-800' />
                24/7 Customer Support
              </h5>
            </li>
          </ul>
          <a href='' className='btn btn-lg btn-primary mt-3 px-4'>
            Learn More
          </a>
        </div>
        <div className='col-lg-5'>
          <div className='row px-3'>
            <div className='col-12 p-0'>
              <img className='img-fluid w-100' src='/img/about-1.jpg' alt='' />
            </div>
            <div className='col-6 p-0'>
              <img className='img-fluid w-100' src='/img/about-2.jpg' alt='' />
            </div>
            <div className='col-6 p-0'>
              <img className='img-fluid w-100' src='/img/about-3.jpg' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='container-fluid bg-light'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-5'>
            <img className='img-fluid w-100' src='/img/feature.jpg' alt='' />
          </div>
          <div className='col-lg-7 py-5 py-lg-0 px-3 px-lg-5'>
            <h4 className='text-secondary mb-3'>Why Choose Us?</h4>
            <h1 className='display-4 mb-4'>
              <span className='text-primary'>Special Care</span> On Pets
            </h1>
            <p className='mb-4'>
              "Your pet deserves the best, and we provide the special care they
              need to thrive. Trust us to treat your furry family member like
              our own, with love and attention every step of the way."
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

    <div className='container mt-5 pt-5 pb-3'>
      <div className='d-flex flex-column text-center mb-5'>
        <h4 className='text-secondary mb-3'>Team Member</h4>
        <h1 className='display-4 m-0'>
          Meet Our <span className='text-primary'>Team Member</span>
        </h1>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-md-6'>
          <div className='team card position-relative overflow-hidden border-0 mb-4'>
            <img className='card-img-top' src='/img/team-1.jpg' alt='' />
            <div className='card-body text-center p-0'>
              <div className=' py-4 flex-column justify-content-center bg-light'>
                <h5>Mollie Ross</h5>
                <i>Founder & CEO</i>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className='team card position-relative overflow-hidden border-0 mb-4'>
            <img className='card-img-top' src='/img/team-2.jpg' alt='' />
            <div className='card-body text-center p-0'>
              <div className='py-4 flex-column justify-content-center bg-light'>
                <h5>Jennifer Page</h5>
                <i>Chef Executive</i>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className='team card position-relative overflow-hidden border-0 mb-4'>
            <img className='card-img-top' src='/img/team-3.jpg' alt='' />
            <div className='card-body text-center p-0'>
              <div className='py-4 flex-column justify-content-center bg-light'>
                <h5>Kate Glover</h5>
                <i>Doctor</i>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className='team card position-relative overflow-hidden border-0 mb-4'>
            <img className='card-img-top' src='/img/team-4.jpg' alt='' />
            <div className='card-body text-center p-0'>
              <div className='py-4 flex-column justify-content-center bg-light'>
                <h5>Lilly Fry</h5>
                <i>Trainer</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page;
