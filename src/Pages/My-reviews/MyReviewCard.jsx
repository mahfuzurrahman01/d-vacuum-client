import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import sweetAlert from '../../utilities/Alert';

const MyReviewCard = ({ review }) => {
    const { name, userName, picture, time, comment, _id } = review

    const deleteHandler = () => {
        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                sweetAlert('success', ('successfully deleted'))
                window.location.reload()
            })
    }

    //update 
    const updateHandler = (event) => {
        event.preventDefault()

        const newReview = event.target.textarea.value;
        console.log(newReview)
        fetch(`http://localhost:5000/update/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newReview: newReview })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                sweetAlert('success', 'updated review')
                window.location.reload()
            })

    }
    return (

        <li className="flex flex-col p-3 sm:flex-row sm:justify-between bg-white">
            <div className="flex w-full space-x-2 sm:space-x-4">
                <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={picture} alt="Polaroid camera" />
                <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between w-full space-x-2">
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{name}</h3>
                            <p className="text-sm text-gray-400">{userName}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-400">{time}</p>

                        </div>
                    </div>
                    <div>
                        <p className='text-xs'>{comment}</p>
                    </div>
                    <div className="flex text-sm gap-x-1 md:mt-2 mt-1">
                        <button onClick={deleteHandler} type="button" className="hover:text-green-600 bg-gray-200 flex items-center md:px-2 px-1 py-1 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 md:block hidden fill-current">
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect width="32" height="200" x="168" y="216"></rect>
                                <rect width="32" height="200" x="240" y="216"></rect>
                                <rect width="32" height="200" x="312" y="216"></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remove Review</span>
                        </button>
                        <div>
                            {/* <label type="button" htmlFor="my-modal" className="bg-gray-200 flex items-center px-2 py-1 space-x-1 hover:text-green-600"><AiOutlineEdit></AiOutlineEdit> open modal</label>

                            <input type="checkbox" id="my-modal" className="modal-toggle" />
                            <div className="modal">
                                <form className="modal-box bg-slate-100 rounded-none text-gray-700 flex flex-col gap-2">
                                    <h3 className="font-bold text-lg text-gray-500">Edit here:</h3>
                                    <textarea name='textarea' className='focus:outline-none focus:ring-2  text-gray-900 border-green-600 bg-gray-200 focus:ring-green-600 h-32'></textarea>
                                    <div className="modal-action">
                                        <label onClick={updateHandler} htmlFor="my-modal" className="text-white font-semibold px-3 py-1" style={{ backgroundColor: '#83BD75' }}>Update</label>
                                    </div>
                                </form>
                            </div> */}
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-4" className="bg-gray-200 flex items-center px-2 py-1 space-x-1 hover:text-green-600"> <AiOutlineEdit></AiOutlineEdit> Edit review</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                            <label htmlFor="my-modal-4" className="modal cursor-pointer">

                                <form onSubmit={updateHandler} className="modal-box rounded-none text-gray-700 flex flex-col gap-2">
                                    <h3 className="font-bold text-lg text-gray-500">Edit here:</h3>
                                    <textarea placeholder='Please edit your review...' name='textarea' className='focus:outline-none focus:ring-2  text-gray-900 border-green-600 bg-gray-200 focus:ring-green-600 h-32'></textarea>
                                    <div className="modal-action">
                                        <button type='submit' htmlFor="my-modal" className="text-white font-semibold px-3 py-1" style={{ backgroundColor: '#83BD75' }}>Update</button>
                                    </div>
                                </form>

                            </label>

                        </div>
                    </div>
                </div>
            </div>
        </li>

    );
};

export default MyReviewCard;