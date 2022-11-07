import React, { useEffect } from 'react';
import image from '../../assets/cover/pexels-anete-lusina-4792771.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='relative'>
            <img src={image} alt="" className='w-full h-[500px]' />
            <div className='grid grid-cols-2 gap-10 w-3/5 absolute top-[10%] right-64 p-10' >
                <div className=' flex flex-col justify-center w-full' data-aos='fade-left'>
                    <p className='text-xs text-green-600'>GUARANTEED</p>
                    <h1 className='text-5xl font-bold text-white'>Professional cleaning service for your home</h1>
                    <p className='text-gray-300'>Deep Cleaning or D clean is committed to creating a clean and healthy environment for you and your family. In addition to our exceptional routine cleaning, enhanced disinfection services are available for your home to help ensure your family’s wellness.</p>
                </div>
                <div data-aos='fade-right'>
                    <div className="flex items-center justify-center text-center bg-white bg-opacity-60 text-gray-100">
                        <form novalidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg  text-gray-100 ng-untouched ng-pristine ng-valid">
                            <p className='text-lg font-semibold text-gray-700'>Request an estimate</p>
                            <input id="name" placeholder='Your name' name='name' type="text" className="flex items-center h-10 text-xs px-4 mt-2 focus:outline-none focus:ring-2  text-gray-900 border-green-600 bg-gray-200 focus:ring-green-600" />

                            <input id="email" placeholder='Your email' type="email" name='email' className="flex items-center h-10 text-xs px-4 mt-2 focus:outline-none focus:ring-2  text-gray-900 border-green-600 bg-gray-200 focus:ring-green-600" />

                            <input id="password" name='password' placeholder='Password' type="password" className="flex items-center h-10 text-xs px-4 mt-2 focus:outline-none focus:ring-2  text-gray-900 border-green-600 bg-gray-200 focus:ring-green-600" />
                            <button type="submit" className="flex items-center justify-center h-12 px-6 mt-2 text-sm font-semibold text-white  duration-300 hover:bg-green-600 " style={{ backgroundColor: '#83BD75' }}>Submit</button>
                            <div className="flex justify-center mt-6 space-x-2 text-xs">
                                <p className="px-6 text-xs text-center text-gray-400">Already have an account?
                                    <a rel="noopener noreferrer" href="# " className="hover:underline text-green-600">Login</a>.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;