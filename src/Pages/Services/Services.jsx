import React from 'react';
import { useLoaderData } from 'react-router-dom';
import image from '../../assets/cover/services_cover.jpg'
const Services = () => {
    const services = useLoaderData()

    return (
        <div className='relative'>
            <img src={image} alt="" />
            <div className='absolute w-1/2 bg-white bg-opacity-30 left-1/4 top-1/3 p-5'>
                <p className='text-green-500 text-sm font-semibold'>WHAT WE DO</p>
                <p className='text-4xl font-bold text-white'>Services</p>
                <p className='text-gray-200'>When you trust your space to the team at D cleaner®, you can rest easy knowing your home is in great hands. You deserve to feel confident knowing you’ll receive consistently flawless results from friendly, trustworthy professionals.</p>
            </div>
            <div>
                {
                    services.map()
                }
            </div>
        </div>
    );
};

export default Services;