import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Example from '../../utilities/title';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    Example('My-review')
    useEffect(() => {
        fetch(`https://server-zeta-two.vercel.app/comment?email=${user?.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    return (
        <div>
            <div>
                {
                    reviews.length === 0 && <div className='w-3/4 mx-auto bg-slate-200 text-center bg-opacity-50 my-20 p-7'><span className='text-green-600'>Hey {user?.displayName},</span> <p className='text-xs'>No review yet! <br /> checkout out <span className='text-lg text-green-600 font-semibold'><Link to='/services'>services</Link></span> take any of them <br /> and then show some love by doing a review for me!</p></div>
                }
            </div>
            <div className="flex flex-col md:max-w-2xl w-11/12 mx-auto my-10 p-6 space-y-4 sm:p-10 bg-slate-100 text-gray-800">
                {
                    reviews.length === 0 || <><h2 className="text-xl font-semibold text-gray-400">Your reviews</h2>
                        <ul className="flex flex-col gap-y-4">
                            {
                                reviews.map(review => <MyReviewCard key={review._id} review={review}></MyReviewCard>)
                            }
                        </ul></>
                }
            </div>
        </div>
    );
};

export default MyReviews;