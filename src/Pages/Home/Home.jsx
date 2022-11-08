import React from 'react';
import image from '../../assets/cover/pexels-anete-lusina-4792771.jpg'
import 'aos/dist/aos.css';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceRow from '../Services/ServiceRow';
import Example from '../../utilities/title';
const Home = () => {

    const services = useLoaderData();
    //title setting with utilities function
    Example('D-Home')
   
    return (
        <div>
            <div className='relative'>
                <img src={image} alt="" className='w-full h-[500px]' />
                <div className='grid grid-cols-2 gap-10 w-3/5 absolute top-[10%] right-64 p-10' >
                    <div className=' flex flex-col justify-center w-full' data-aos='fade-left'>
                        <p className='text-xs text-green-600'>GUARANTEED</p>
                        <h1 className='text-4xl font-bold text-white'>Professional cleaning service for your home</h1>
                        <p className='text-gray-300'>Hey there, I'm Nick Jhonathen . Its been 2 years I'm providing cleaning services in this area .And i love to call my service D Vacuum.D Vacuum is committed to creating a clean and healthy environment for you and your family. In addition to our exceptional routine cleaning, enhanced disinfection services are available for your home to help ensure your family’s wellness.</p>
                    </div>
                    <div data-aos='fade-right'>
                        <div className="flex items-center justify-center text-center bg-white bg-opacity-60 text-gray-100">
                            <form noValidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg  text-gray-100 ng-untouched ng-pristine ng-valid">
                                <p className='text-lg font-semibold text-gray-700'>Request an estimate</p>
                                <input id="name" placeholder='Your name' name='name' type="text" className="flex items-center h-10 text-xs px-4 mt-2 focus:outline-none focus:ring-2  text-gray-900 border-green-600 bg-gray-200 focus:ring-green-600" />

                                <input id="email" placeholder='Your email' type="email" name='email' className="flex items-center h-10 text-xs px-4 mt-2 focus:outline-none focus:ring-2  text-gray-900 border-green-600 bg-gray-200 focus:ring-green-600" />

                                <input id="password" name='password' placeholder='Password' type="password" className="flex items-center h-10 text-xs px-4 mt-2 focus:outline-none focus:ring-2  text-gray-900 border-green-600 bg-gray-200 focus:ring-green-600" />
                                <button type="submit" className="flex items-center justify-center h-12 px-6 mt-2 text-sm font-semibold text-white  duration-300 hover:bg-green-600 " style={{ backgroundColor: '#83BD75' }}>Submit</button>
                                <div className="flex justify-center mt-6 space-x-2 text-xs">
                                    <p className="px-6 text-xs text-center text-gray-800">Already have an account?
                                        <a rel="noopener noreferrer" href="# " className="hover:underline text-green-600"> Login</a>.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-4/6 p-5 mx-auto flex items-center gap-10 justify-center my-5'>
                    <div className='w-1/3'>
                        <p className='text-4xl font-bold ml-5' style={{ color: '#83BD75' }}>Complete and quick cleaning services</p>
                    </div>
                    <div className='w-1/2 border-l-4 border-gray-800 pl-5'>
                        <p className='text-gray-600 text-sm'>Listening to my customers and providing a consistently high quality of service in a cost-effective manner is how I’ve work with this sector back in 2020 to what D Vacuum is today: a cleaning operation of more than 100 professionals taking care of two million square feet of space throughout Metropolitan Boston and Southeastern Massachusetts.</p>
                    </div>
                </div>
                <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-4/5 w-full  mx-auto lg:my-10 md:my-7 my-5 gap-5' data-aos='fade-up'>
                    {
                        services.map(service => <ServiceRow key={service._id} service={service}></ServiceRow>)
                    }
                </section>

            </div>
            <div className='w-1/4 mx-auto flex items-center justify-center mb-10'>
                <button className='text-white font-semibold py-1 px-10 ' style={{ backgroundColor: '#83BD75' }}><Link to='/services'>See All</Link></button>
            </div>
        </div>
    );
};

export default Home;