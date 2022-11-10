import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { MdRateReview } from 'react-icons/md'
import { Link, useLoaderData, useLocation } from 'react-router-dom';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import logo from '../../assets/logo/H Black and white Fashion or Design studio logo.png'
import Example from '../../utilities/title';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ReviewsCard from '../../Shared/Reviews/ReviewsCard';
import sweetAlert from '../../utilities/Alert';
const ServiceDetails = () => {
    // title 
    Example('Details')

    // set the reviews in state
    const [reviews, setReviews] = useState([])
    const location = useLocation()
    const { user } = useContext(AuthContext);
    const service = useLoaderData()
    const { _id, name, price, picture, about, rating } = service;
    //title
    useEffect(() => {
        fetch(`https://server-zeta-two.vercel.app/comments/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)

            })

    }, [_id])

    const reviewSubmitHandler = event => {
        event.preventDefault()
        const form = event.target;
        const comment = event.target.comment.value;

        const reviewData = {
            reviewId: _id,
            name,
            picture,
            comment,
            userName: user.displayName,
            userEmail: user.email,
            userPhoto: user.photoURL,
            time: new Date().getTime()
        }
        fetch('https://server-zeta-two.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const newReviews = [reviewData, ...reviews]
                setReviews(newReviews)
                sweetAlert('success', 'Thank you!')
            })

        form.reset()
    }

    return (
        <div >
            <div data-aos='fade-left' className='lg:w-4/5 w-full mx-auto flex lg:flex-row flex-col gap-10 my-10 items-center'>
                <div className="lg:w-1/2 w-11/12 flex flex-col p-6 space-y-6 overflow-hidden shadow-md  bg-slate-100  text-gray-800" >
                    <div className="flex justify-between items-center">
                        <img alt="" src={logo} className="object-cover w-12 h-12 rounded-full shadow  bg-gray-500" />
                        <div className="space-x-2">
                            <button aria-label="Share this post" type="button" className="p-2 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-green-600 ">
                                    <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                                </svg>
                            </button>
                            <button aria-label="Bookmark this post" type="button" className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-green-600">
                                    <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <PhotoProvider speed={() => 800}
                            easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                            <PhotoView src={picture}>
                                <img src={picture} alt="cleaning-services" className="object-cover w-full mb-4 h-60 sm:h-96  bg-gray-500" />
                            </PhotoView>
                        </PhotoProvider>
                        <h2 className="mb-1 text-xl font-semibold">{name}</h2>
                        <p className="text-sm  text-gray-400">{about}</p>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <div>
                            <div className="flex flex-col space-y-1">
                                <span className="text-lg  text-gray-400 flex items-center gap-1">{rating} <FaStar className='text-yellow-500 w-5 h-5' ></FaStar> </span>
                            </div>
                        </div>
                        <div>
                            <p className='text-3xl text-green-600 font-serif'>${price}</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 w-11/12'>
                    {/* reviews are coming soon her  */}
                    <div className="flex flex-col max-w-3xl mx-auto p-6 space-y-4 sm:p-10 bg-slate-200 text-gray-800" data-aos='fade-right'>
                        <h2 className="text-xl font-semibold">Client Reviews</h2>
                        <ul className="flex flex-col gap-y-2 divide-gray-700">
                            {
                                reviews.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>)
                            }
                        </ul>
                        <div>
                            {
                                user?.email ? <form onSubmit={reviewSubmitHandler} className='flex flex-col gap-y-2'><textarea className='focus:outline-none focus:ring-2 focus:ring-green-600 h-20 p-2' placeholder='Please add a review about this service...' name='comment'></textarea><button type='submit' className='text-white py-1 px-3 flex items-baseline gap-2 justify-center' style={{ backgroundColor: '#83BD75' }}>Submit<MdRateReview></MdRateReview></button></form> : <button className='text-white w-full py-1 px-3' style={{ backgroundColor: '#83BD75' }}><Link to='/login' state={{ from: location }} replace>Please login to add a review</Link></button>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;