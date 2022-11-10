import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/H Black and white Fashion or Design studio logo.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import sweetAlert from '../../utilities/Alert';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const logoutHandle = () => {
        logOut()
            .then(() => {
                alert('logged out successfully')
            })
            .catch(err => {
                sweetAlert('error', err.massage)
            })
    }
    return (
        <div>
            <div className="navbar bg-white md:w-4/5 w-full mx-auto" data-theme='emerald' >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li><NavLink className={({ isActive }) => isActive ? 'text-md font-semibold text-green-600' : 'text-md font-light text-gray-700'} to='/home'>Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-md font-semibold text-green-600' : 'text-md font-light text-gray-700'} to='/services'>Services</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-md font-semibold text-green-600' : 'text-md font-light text-gray-700'} to='/my_review'>My review</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-md font-semibold text-green-600' : 'text-md font-light text-gray-700'} to='/add_service'>Add Service</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-md font-semibold text-green-600' : 'text-md font-light text-gray-700'} to='/blogs'>Blogs</NavLink></li>

                        </ul>
                    </div>
                    <div className='flex items-end'>
                        <img src={logo} alt="" className='w-10 h-12' />
                        <p className='text-md font-semibold uppercase text-gray-500 font-serif'>vacuum</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-4">
                        <li><NavLink className={({ isActive }) => isActive ? 'text-md font-semibold text-green-600' : 'text-md font-light text-gray-700'} to='/home'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-md font-semibold text-green-600' : 'text-md font-light text-gray-700'} to='/services'>Services</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-md font-semibold text-green-600' : 'text-md font-light text-gray-700'} to='/my_review'>My review</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-md font-semibold text-green-600' : 'text-md font-light text-gray-700'} to='/add_service'>Add Service</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-md font-semibold text-green-600' : 'text-md font-light text-gray-700'} to='/blogs'>Blogs</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end text-green-600">
                    {
                        user?.email ? <div className='flex gap-1 items-center'><img className='w-9 h-9 rounded-full' src={user?.photoURL} alt="" /><button onClick={logoutHandle} className='cursor-pointer hover:bg-green-500 duration-200 hover:text-white text-md border py-1 px-3 border-green-600'>Logout</button></div> : <Link to='/register'><div className='cursor-pointer hover:bg-green-500 duration-200 hover:text-white text-md border py-1 px-3 border-green-600'>
                            <p>Register</p>
                        </div></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;