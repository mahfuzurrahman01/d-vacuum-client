import React, { useState } from 'react';
import sweetAlert from '../../utilities/Alert';
import Example from '../../utilities/title';

const AddService = () => {
    const [toggle, setToggle] = useState(false);
    Example('Add-service')
    const addServiceHandler = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const picture = form.picture.value;
        const about = form.about.value;
        const rating = form.rating.value;
        console.log(name, price, picture, about, rating)
        const service = {
            name,
            price,
            picture,
            about,
            rating
        }
        fetch('http://localhost:5000/add_service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                sweetAlert('success','Service added successfully')
                form.reset()
            })

    }
    return (
        <div className='flex lg:flex-row flex-col gap-x-5 lg:w-4/5 w-11/12 mx-auto'>
            <section className="md:w-1/2 w-full mx-auto  bg-slate-100  text-gray-900 lg:my-10 my-4">
                <div className="container mx-auto flex flex-col items-center justify-center p-5 space-y-3">
                    <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold leading-none text-center" style={{ color: '#83BD75' }}>Add New service!</h1>
                    <p className="md:pt-2 md:pb-8  lg:text-lg md:text-lg text-xs text-gray-500 text-center">Cleanliness is a step which leads us towards godliness. It is a good habit as it keeps our body, mind and everything clean around us. We should practice it regularly from the early life. The real meaning of cleanliness is to keep our body, mind, soul, home, surrounding areas, clothes, environment, etc clean.</p>
                    <button onClick={() => setToggle(!toggle)} className="md:px-8 px-4 md:py-3 py-1 text-lg font-semibold rounded  text-gray-50" style={{ backgroundColor: '#83BD75' }}>Add new one</button>
                </div>
            </section>
            <div className='md:w-1/2 w-full'>
                {
                    toggle === true && <div data-aos='fade-up'><section className="p-6  text-gray-100">
                        <form onSubmit={addServiceHandler} noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow  bg-slate-100 text-gray-700 ng-untouched ng-pristine ng-valid">
                            {/* <h2 className="w-full md:text-3xl text-xl font-semibold leading-tight uppercase text-gray-500">Servies Details:</h2> */}
                            <div>

                                <input id="name" type="text" name='name' placeholder="Service Name:" required className="block w-full p-2 focus:outline-none bg-white" />
                            </div>
                            <div>
                                <input id="price" type="text" name='price' placeholder="Service Price" required className="block w-full p-2 focus:outline-none bg-white" />
                            </div>
                            <div>
                                <input id="picture" type="text" name='picture' placeholder="Service Image" required className="block w-full p-2 focus:outline-none bg-white" />
                            </div>
                            <div>
                                <input id="rating" type="text" name='rating' placeholder="Service Rating" required className="block w-full p-2 focus:outline-none bg-white" />
                            </div>
                            <div>
                                <textarea id="about" name='about' type="text" placeholder="Description" required className="block w-full p-2 focus:outline-none bg-white"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full px-4 py-2 font-semibold shadow text-white" style={{ backgroundColor: '#83BD75' }}>Add</button>
                            </div>
                        </form>
                    </section></div>
                }
            </div>
        </div>
    );
};

export default AddService;