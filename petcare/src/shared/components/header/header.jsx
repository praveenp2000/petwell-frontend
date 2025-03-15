import Link from 'next/link';

export default function Header(_props) {
  return (
    <div className='z-40'>
      {!_props.hideLayout && (
        <div className='flex py-3 px-lg-5'>
          <div className='col-lg-4'>
            <a href='' className='navbar-brand d-none d-lg-block'>
              <img className='h-14 w-24' src={'/images/logo.png'} />
            </a>
          </div>
          <div className='col-lg-8 text-center text-lg-right'>
            <div className='d-inline-flex align-items-center'>
              <div className='d-inline-flex flex-column text-center pr-3 border-right'>
                <h6>Opening Hours</h6>
                <p className='m-0'>8.00AM - 9.00PM</p>
              </div>
              <div className='d-inline-flex flex-column text-center px-3 border-right'>
                <h6>Email Us</h6>
                <p className='m-0'>info@example.com</p>
              </div>
              <div className='d-inline-flex flex-column text-center pl-3'>
                <h6>Call Us</h6>
                <p className='m-0'>+012 345 6789</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`'container-fluid p-0' ${
          _props.hideLayout ? '!fixed w-full mb-4' : ''
        }`}
      >
        <div className='bg-dark h-[87px] pt-4'>
          <nav className='py-lg-0 px-lg-5'>
            <div className=' px-3 flex'>
              <div className='mr-auto py-0 flex justify-between'>
                <Link
                  href='/'
                  className='nav-item nav-link active !text-white hover:bg-[#1989ce]'
                >
                  Home
                </Link>
                <Link
                  href='/about-us'
                  className='nav-item nav-link !text-white hover:bg-[#1989ce]'
                >
                  About
                </Link>
                <Link
                  href='/our-services'
                  className='nav-item nav-link !text-white hover:bg-[#1989ce]'
                >
                  Service
                </Link>
                <Link
                  href='/contact-us'
                  className='nav-item nav-link !text-white hover:bg-[#1989ce]'
                >
                  Contact
                </Link>
              </div>
              <div className='mr-auto py-0'>
                <Link
                  href='/sign-in'
                  className='nav-item nav-link !text-white hover:bg-[#1989ce]'
                >
                  Sign In
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
