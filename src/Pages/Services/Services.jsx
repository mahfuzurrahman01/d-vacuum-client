import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import AOS from 'aos';
import image from '../../assets/cover/services_cover.jpg'
import Example from '../../utilities/title';
import ServiceRow from './ServiceRow';
const Services = () => {
    const services = useLoaderData()
    Example('D-Services')
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div className='relative'>
                <img src={image} alt="" />
                <div className='absolute w-1/2 bg-white bg-opacity-30 left-1/4 top-1/3 p-5' data-aos='fade-left'>
                    <p className='text-green-600 text-sm font-bold' data-aos='fade-up'>WHAT I DO ?</p>
                    <p className='text-4xl font-bold text-white' data-aos='fade-up'>Services</p>
                    <p className='text-gray-200' data-aos='fade-up'>When you trust your space to the team at D Vacuum®, you can rest easy knowing your home is in great hands. You deserve to feel confident knowing you’ll receive consistently flawless results from friendly, trustworthy professionals.</p>
                </div>
            </div>
            <div className='w-4/5 mx-auto flex items-center gap-10 justify-center my-5'>
                <div className='w-1/3'>
                    <p className='text-4xl font-bold ml-5' style={{color:'#83BD75'}}>Complete and quick cleaning services</p>
                </div>
                <div className='w-1/2 border-l-4 border-gray-800 pl-5'>
                    <p className='text-gray-600 text-sm'>Listening to my customers and providing a consistently high quality of service in a cost-effective manner is how I’ve work with this sector back in 2020 to what D Vacuum is today: a cleaning operation of more than 100 professionals taking care of two million square feet of space throughout Metropolitan Boston and Southeastern Massachusetts.</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-4/5 w-full  mx-auto lg:my-10 md:my-7 my-5 gap-5'data-aos='fade-up-right'>
                {
                    services.map(service => <ServiceRow key={service._id} service={service}></ServiceRow>)
                }
            </div>
        </div>
    );
};

export default Services;