import React from 'react';

const Register = () => {
    return (
        <div className='w-1/4 my-20 mx-auto'>
            <p className='text-gray-400 text-2xl font-semibold text-center my-3'>Sign up</p>
            <div className="flex items-center justify-center text-center bg-slate-100 bg-opacity-60 text-gray-100">
                <form noValidate="" action="" className="flex flex-col w-full p-8 rounded shadow-lg  text-gray-100 ng-untouched ng-pristine ng-valid">
                    <input id="name" placeholder='Your name' name='name' type="text" className="flex items-center h-10 text-xs px-4 mt-2 focus:outline-none focus:ring-2  text-gray-900 border-green-600 bg-gray-200 focus:ring-green-600" />

                    <input id="photoUrl" placeholder='Your photo url' name='photourl' type="text" className="flex items-center h-10 text-xs px-4 mt-2 focus:outline-none focus:ring-2  text-gray-900 border-green-600 bg-gray-200 focus:ring-green-600" />

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
    );
};

export default Register;