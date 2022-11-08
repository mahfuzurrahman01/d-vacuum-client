import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { FaStar } from 'react-icons/fa';
const CommentForm = () => {
    const [ratings, setRatings] = useState(0)

    //form data
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setRatings(0)
        console.log(data)
    };
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <input className='py-1 px-4 bg-slate-200 ' {...register("name")} />
                        <input className='py-1 px-4 bg-slate-200 ' {...register("photo")} />
                        <input className='py-1 px-4 bg-slate-200 ' {...register("Comment")} />
                    </div>
                    <div className='flex gap-1'>
                        <FaStar onClick={() => setRatings(1)} className={ratings === 1 ? 'w-6 h-6 fill-yellow-500' : 'w-6 h-6 fill-gray-400'}></FaStar>
                        <FaStar onClick={() => setRatings(2)} className={ratings === 2 ? 'w-6 h-6 fill-yellow-500' : 'w-6 h-6 fill-gray-400'}></FaStar>
                        <FaStar onClick={() => setRatings(3)} className={ratings === 3 ? 'w-6 h-6 fill-yellow-500' : 'w-6 h-6 fill-gray-400'}></FaStar>
                        <FaStar onClick={() => setRatings(4)} className={ratings === 4 ? 'w-6 h-6 fill-yellow-500' : 'w-6 h-6 fill-gray-400'}></FaStar>
                        <FaStar onClick={() => setRatings(5)} className={ratings === 5 ? 'w-6 h-6 fill-yellow-500' : 'w-6 h-6 fill-gray-400'}></FaStar>
                    </div>


                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default CommentForm;