'use client';
import '../../../app/styles.css';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';
import { ContactUs } from '../Modal/contactus'
import { useState } from 'react';

export default function Footer() {
  const [openContactUs, setOpenContactUs] = useState(false);
  return (
    <div className='bg-black'>
      <div className='container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5'>
        <div className='row pt-5'>
          <div className='col-lg-4 col-md-12 mb-5'>
            <h1 className='mb-3 display-5 text-capitalize text-white'>
              <span className='text-[#1989ce]'>Pet</span>Well
            </h1>
            <p className='m-0'>
              PetWell is a one-stop destination for all your pet care needs,
              offering top-quality pet grooming, pet healthcare, and premium pet
              care products. Our mission is to ensure the well-being and
              happiness of your furry friends by providing expert care,
              high-quality accessories, and professional grooming services.
            </p>
          </div>
          <div className='col-lg-8 col-md-12'>
            <div className='md:flex block'>
              <div className='col-md-6 mb-5'>
                <h5 className='text-[#1989ce]'>Get In Touch</h5>
                <div className='flex'>
                  <LocationOnIcon />
                  <p className='ml-2'>PetWell, Edappally, Ernakulam</p>
                </div>
                <div className='flex'>
                  <PhoneIcon />
                  <p className='ml-2'> +91 9645685427</p>
                </div>
                <div className='flex'>
                  <EmailIcon />
                  <p className='ml-2'>praveenpoulose9645@gmail.com</p>
                </div>
              </div>
              <div className='col-md-4 mb-5'>
                <h5 className='text-[#1989ce]'>Popular Links</h5>
                <div className='d-flex flex-column justify-content-start'>
                  <Link className='text-white mb-2' href='/'>
                    <ChevronRightIcon /> Home
                  </Link>
                  <Link className='text-white mb-2' href='/about-us'>
                    <ChevronRightIcon />
                    About Us
                  </Link>
                  <Link className='text-white mb-2' href='/our-services'>
                    <ChevronRightIcon />
                    Our Services
                  </Link>
                  {/* <Link className='text-white mb-2' href='/our-team'>
                    <ChevronRightIcon />
                    Our Team
                  </Link> */}
                  {/* <div
                    onClick={() => setOpenContactUs(true)}
                    className='nav-item nav-link !text-white hover:bg-[#1989ce]'
                  >
                    Contact Us
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid text-white py-4 px-sm-3 px-md-5 bg-[#111111]'>
        <div className='row'>
          <div className='col-md-6 text-center text-md-left mb-3 mb-md-0'>
            <p className='m-0 text-white'>
              &copy;{' '}
              <Link className='hover:!text-[#1989ce] text-white' href='/'>
                {'PetWell'}
              </Link>
              .{'   All Rights Reserved.'}
            </p>
          </div>
          <div className='col-md-6 text-center text-md-right flex'>
            <ul className='nav d-inline-flex flex'>
              {/* <li className='nav-item'>
                <Link
                  className='nav-link text-white py-0 hover:!underline'
                  href='/privacy-policy'
                >
                  Privacy
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link text-white py-0 hover:!underline'
                  href='/terms-and-conditions'
                >
                  Terms
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <ContactUs
        open={openContactUs}
        handleClose={() => setOpenContactUs(false)}
      />
    </div>
  );
}
