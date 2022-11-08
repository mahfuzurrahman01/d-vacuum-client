import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Example from '../../utilities/title';
const Register = () => {
    const navigate = useNavigate()
    const { createUser } = useContext(AuthContext);
    const signUpHandle = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photourl, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(err => console.error(err.massage))
    }

    Example('Register')
    return (
        <div className='lg:w-1/4 md:w-1/2 w-11/12 my-16 mx-auto'>
            <div className='flex justify-between items-center'>
                <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
                    <Link to='/login'>
                        <span className="relative">
                            <input id="Toggle1" type="checkbox" className="hidden peer" />
                            <div className="w-12 h-6 rounded-full shadow-inner  bg-slate-200 peer-checked:bg-stone-100"></div>
                            <div className="absolute inset-y-0 right-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto  " style={{ backgroundColor: '#83BD75' }}></div>
                        </span>
                    </Link>

                </label>

                <p className='text-gray-400 text-2xl font-semibold text-center my-3'>Sign up</p>
            </div>
            <div className="flex items-center justify-center text-center bg-slate-100 bg-opacity-60 text-gray-100">
                <form onSubmit={signUpHandle} noValidate="" action="" className="flex flex-col w-full p-8 rounded shadow-lg  text-gray-100 ng-untouched ng-pristine ng-valid">
                    <input required id="name" placeholder='Your name' name='name' type="text" className="flex items-center h-10 text-xs px-4 mt-2 focus:outline-none focus:ring-2  text-gray-900 border-green-600 bg-gray-200 focus:ring-green-600" />

                    <input required id="photoUrl" placeholder='Your photo url' name='photourl' type="text" className="flex items-center h-10 text-xs px-4 mt-2 focus:outline-none focus:ring-2  text-gray-900 border-green-600 bg-gray-200 focus:ring-green-600" />

                    <input required id="email" placeholder='Your email' type="email" name='email' className="flex items-center h-10 text-xs px-4 mt-2 focus:outline-none focus:ring-2  text-gray-900 border-green-600 bg-gray-200 focus:ring-green-600" />

                    <input required id="password" name='password' placeholder='Password' type="password" className="flex items-center h-10 text-xs px-4 mt-2 focus:outline-none focus:ring-2  text-gray-900 border-green-600 bg-gray-200 focus:ring-green-600" />
                    <button type="submit" className="flex items-center justify-center h-12 px-6 mt-2 text-sm font-semibold text-white  duration-300 hover:bg-green-600 " style={{ backgroundColor: '#83BD75' }}>Sign up</button>
                    <div className="flex justify-center mt-6 space-x-2 text-xs">
                        <p className="px-6 text-xs text-center text-gray-800">Already have an account?
                            <Link rel="noopener noreferrer" to='/login' className="hover:underline text-green-600"> Login</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;