import React from 'react';

const ReviewsCard = ({ review }) => {
    const { userName, userEmail, userPhoto, comment, time } = review;
    return (
        <div>
            <li className="flex flex-col p-4 sm:flex-row sm:justify-between bg-gray-100">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-28 sm:h-28 bg-gray-500" src={userPhoto} alt='user profile pic' />
                    <div className="flex flex-col justify-between w-full">
                        <div className="flex justify-between w-full space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold  sm:pr-8">{userName}</h3>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <p className='text-xs text-gray-500'>12 min ago</p>
                            </div>
                        </div>
                        <div className="">
                            <p className='text-xs'>{comment}</p>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default ReviewsCard;