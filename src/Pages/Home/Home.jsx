import React from 'react';
import image from '../../assets/cover/pexels-anete-lusina-4792771.jpg'
import 'aos/dist/aos.css';
import { BiSelectMultiple } from 'react-icons/bi'
import {SlCalender} from 'react-icons/sl'
import {MdGppGood} from 'react-icons/md'
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
                <img src={image} alt="" className='w-full lg:h-[500px] md:h-[300px] h-[200px]' />
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 lg:w-3/5 w-full absolute lg:top-[10%] top-2 lg:right-64 p-10' >
                    <div className=' flex lg:flex-col flex-row lg:gap-0 md:gap-3 gap-5 justify-center w-full' data-aos='fade-left'>
                        <p className='text-xs text-green-600 md:block hidden'>GUARANTEED</p>
                        <div>
                        <h1 className='lg:text-4xl md:text-3xl text-md font-bold text-white'>Professional cleaning service for your home</h1>
                        <button className='text-white px-1 md:hidden block' style={{ backgroundColor: '#83BD75' }}><Link to='/services'>Book Now!</Link></button>
                        </div>
                        <p className='text-gray-300 text-xs md:block hidden'>Hey there, I'm Nick Jhonathen . Its been 2 years I'm providing cleaning services in this area .And i love to call my service D Vacuum.D Vacuum is committed to creating a clean and healthy environment for you and your family. In addition to our exceptional routine cleaning, enhanced disinfection services are available for your home to help ensure your family’s wellness.</p>
                        <p className='text-gray-300 text-xs md:hidden bolck'>Hey there, I'm Nick Jhonathen . Its been 2 years I'm providing cleaning services in this area .And i love to call my service D Vacuum.D Vacuum is committed to creating a clean and healthy environment for you and your family.</p>
                    </div>
                    <div data-aos='fade-right' className='lg:block hidden'>
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
                {/* service section start from here  */}
                <div className='w-4/6 p-5 mx-auto flex items-center gap-10 justify-center my-5'>
                    <div className='w-1/3'>
                        <p className='text-4xl font-bold ml-5' style={{ color: '#83BD75' }}>Complete and quick cleaning services</p>
                    </div>
                    <div className='w-1/2 border-l-4   border-gray-400 pl-5'>
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
            {/* how to order  */}
            <section className='my-10'>
                <div className='w-4/6 p-5 mx-auto flex items-center gap-10 justify-center my-5' data-aos='fade-left'>
                    <div className='w-1/3'>
                        <p className='text-4xl font-bold ml-5' style={{ color: '#83BD75' }}>Simple Order Process</p>
                    </div>
                    <div className='w-1/2 border-l-4 border-gray-400 pl-5'>
                        <p className='text-gray-600 text-sm'>If you are going to hire me for 1 or 2 days and also if you want to ensure then please contact/order us via website also you can call me in my whatsapp</p>
                    </div>
                </div>
                <div className='w-4/5 mx-auto grid grid-cols-3 gap-5'>
                    <div className='border-green-600  bg-slate-100 flex flex-col gap-y-2 p-5' data-aos='fade-left'>
                        <div className='flex justify-between'>
                            <p className='font-bold text-5xl text-gray-300'>01</p>
                            <p><BiSelectMultiple className=' w-12 h-12'style={{ color: '#83BD75' }}></BiSelectMultiple></p>
                        </div>
                        <p className='text-2xl text-center font-semibold text-gray-400'>Select service</p>
                        <p className='text-gray-600 text-sm'>First You have to goto the service page and then choose which service you want then simply click the service and if you wants to know about this service then click on the details button.</p>
                    </div>
                    <div className='border-green-600  bg-slate-100 flex flex-col gap-y-2 p-5' data-aos='fade-down'>
                        <div className='flex justify-between'>
                            <p className='font-bold text-5xl text-gray-300'>02</p>
                            <p><SlCalender className=' w-12 h-12'style={{ color: '#83BD75' }}></SlCalender></p>
                        </div>
                        <p className='text-2xl text-center font-semibold text-gray-400'>Pick a date</p>
                        <p className='text-gray-600 text-sm'>After selecting your service you have to confirm it but before confirmation you have to set the date so pick a date which date you want to get the service .</p>
                    </div>
                    <div className='border-green-600  bg-slate-100 flex flex-col gap-y-2 p-5'data-aos='fade-right'>
                        <div className='flex justify-between'>
                            <p className='font-bold text-5xl text-gray-300'>03</p>
                            <p><MdGppGood className=' w-12 h-12'style={{ color: '#83BD75' }}></MdGppGood></p>
                        </div>
                        <p className='text-2xl text-center font-semibold text-gray-400'>Getting things done!</p>
                        <p className='text-gray-600 text-sm'>Then you'r done with your online order now all i have to do response you with a text massage that your order is confirmed then just wait to see the clean work and of course don't forgot to give me review about my work</p>
                    </div>
                </div>
            </section>
            {/* blog section start from here  */}
            <section className='w-4/5 mx-auto'>
                <p className='text-xl mx-auto p-3 border-l-4 border-gray-400 pl-2 border-r-4 w-1/4 text-center text-white font-semibold' style={{ color: '#83BD75' }}>Blogs</p>
                <section className="p-4 lg:p-8   bg-gray-50   text-gray-100">
                    <div className="container mx-auto space-y-12">
                        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row" data-aos='fade-right'>
                            <img src="https://images.pexels.com/photos/3712597/pexels-photo-3712597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-80   bg-gray-500 aspect-video" />
                            <div className="flex flex-col justify-center flex-1 p-6 bg-slate-200">
                                <span className="text-xs uppercase   text-green-600">Join, it's free</span>
                                <h3 className="text-3xl font-bold text-gray-800">OUR SERVICES, YOUR SCHEDULE</h3>
                                <p className="my-6   text-gray-500">I'll familiarize my self with your facility and then create a customized cleaning and disinfecting plan that perfectly accommodates your needs. I can schedule my cleaning services at a time and frequency that works best.</p>
                                <button type="button" className="self-start  py-1 px-4 text-gray-100 font-semibold text-sm" style={{ backgroundColor: '#83BD75' }}>Call Now</button>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse"data-aos='fade-left'>
                            <img src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-80 bg-gray-500 aspect-video" />
                            <div className="flex flex-col justify-center flex-1 p-6 bg-slate-200">
                                <span className="text-xs uppercase text-green-600">Join, it's free</span>
                                <h3 className="text-3xl font-bold text-gray-800">SAVE TIME & MONEY</h3>
                                <p className="my-6   text-gray-500">Outsourcing your cleaning services can help streamline your expenses and reduce cleaning time by about 25% while ensuring a spotless, disinfected environment.</p>
                                <button type="button" className="self-start py-1 px-4 text-gray-100 text-sm font-semibold" style={{ backgroundColor: '#83BD75' }}>Call Now</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </div>
    );
};

export default Home;