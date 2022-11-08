import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi'
import logo from '../../assets/logo/H Black and white Fashion or Design studio logo.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-white md:w-4/5 w-full mx-auto" data-theme='emerald' >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink className={({ isActive }) => isActive ? 'text-lg font-semibold text-green-600' : 'text-lg font-light text-gray-700'} to='/home'>Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-lg font-semibold text-green-600' : 'text-lg font-light text-gray-700'} to='/services'>Services</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-lg font-semibold text-green-600' : 'text-lg font-light text-gray-700'} to='/pricing'>Pricing</NavLink></li>
                        </ul>
                    </div>
                    <div className='flex items-end'>
                        <img src={logo} alt="" className='w-10 h-12' />
                        <p className='text-lg font-semibold uppercase text-gray-500 font-serif'>vacuum</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-4">
                        <li><NavLink className={({ isActive }) => isActive ? 'text-lg font-semibold text-green-600' : 'text-lg font-light text-gray-700'} to='/home'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-lg font-semibold text-green-600' : 'text-lg font-light text-gray-700'} to='/services'>Services</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-lg font-semibold text-green-600' : 'text-lg font-light text-gray-700'} to='/pricing'>Pricing</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end text-green-600">
                    <div className='flex items-center gap-2 text-md border py-1 px-3 border-green-600'>
                        <FiPhoneCall></FiPhoneCall>
                        <p>+8834256</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;