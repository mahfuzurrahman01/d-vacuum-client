import React from 'react';
import { FaStar } from 'react-icons/fa'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo/H Black and white Fashion or Design studio logo.png'
const ServiceRow = ({ service }) => {
    const { _id, name, price, picture, about, rating } = service;

    return (
        <div className='w-11/12 mx-auto'>
            <div className="flex flex-col w-full p-6 space-y-6 overflow-hidden shadow-md  bg-slate-100  text-gray-800" >
                <div className="flex justify-between items-center">
                    <img alt="" src={logo} className="object-cover w-12 h-12 rounded-full shadow  bg-gray-500" />
                    <p className='text-2xl text-green-600 font-serif'>${price}</p>

                </div>
                <div>
                    <PhotoProvider speed={() => 800}
                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                        <PhotoView src={picture}>
                            <img src={picture} alt="cleaning-services" className="object-cover w-full mb-4 h-60 sm:h-96  bg-gray-500" />
                        </PhotoView>
                    </PhotoProvider>
                    <h2 className="mb-1 text-xl font-semibold">{name}</h2>
                    <p className="text-sm  text-gray-400">{about.slice(0, 100)}...<Link to={`/service/${_id}`} className='text-xs text-green-600 font-semibold'>read more</Link></p>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div>
                        <div className="flex flex-col space-y-1">
                            <span className="text-xs  text-gray-400 flex items-center gap-1">{rating} <FaStar className='text-yellow-500 w-3 h-3' ></FaStar> </span>
                        </div>
                    </div>
                    <div>
                        <Link to={`/service/${_id}`}><button className='text-white font-semibold py-1 px-3' style={{ backgroundColor: '#83BD75' }}> Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceRow;