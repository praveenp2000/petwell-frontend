import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const Page = () => (

    <div className="container-fluid bg-light pt-5">
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




        <div className="container-fluid p-0 py-5">
            <div className="container p-0 pt-5">
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-secondary mb-3">Testimonial</h4>
                    <h1 className="display-4 m-0">Our Client <span className="text-primary">Says</span></h1>
                </div>
                <div className="owl-carousel testimonial-carousel">
                    <div className="bg-light mx-3 p-4">
                        <div className="d-flex align-items-end mb-3 mt-n4 ml-n4">
                            <img className="img-fluid w-[80px] h-[80px]" src="/img/testimonial-1.jpg" alt="" />
                            <div className="ml-3">
                                <h5>Client Name</h5>

                            </div>
                        </div>
                        <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
                    </div>
                    <div className="bg-light mx-3 p-4">
                        <div className="d-flex align-items-end mb-3 mt-n4 ml-n4">
                            <img className="img-fluid w-[80px] h-[80px]" src="/img/testimonial-2.jpg" alt="" />
                            <div className="ml-3">
                                <h5>Client Name</h5>

                            </div>
                        </div>
                        <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
                    </div>
                    <div className="bg-light mx-3 p-4">
                        <div className="d-flex align-items-end mb-3 mt-n4 ml-n4">
                            <img className="img-fluid w-[80px] h-[80px]" src="/img/testimonial-3.jpg" alt="" />
                            <div className="ml-3">
                                <h5>Client Name</h5>

                            </div>
                        </div>
                        <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
                    </div>
                    <div className="bg-light mx-3 p-4">
                        <div className="d-flex align-items-end mb-3 mt-n4 ml-n4">
                            <img className="img-fluid w-[80px] h-[80px]" src="/img/testimonial-4.jpg" alt="" />
                            <div className="ml-3">
                                <h5>Client Name</h5>

                            </div>
                        </div>
                        <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Page;