import React from 'react';
import Example from '../../utilities/title';

const Blogs = () => {
    Example('Blogs')
    return (
        <div className='md:w-4/5 mx-auto w-11/12 bg-slate-100 md:p-5 p-1 flex flex-col md:gap-y-4 gap-y-2'>
            <div className='p-2 bg-gray-200'>
                <p className='text-green-600 font-bold'>Q: What is the deference between SQL and noSQL?</p>
                <p className='text-sm'>A: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className='p-2 bg-gray-200'>
                <p className='text-green-600 font-bold'>Q: What is JWT, and how does it work?</p>
                <p className='text-sm'>A: JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
            </div>
            <div className='p-2 bg-gray-200'>
                <p className='text-green-600 font-bold'>Q: What is the difference between javascript and NodeJS?</p>
                <p className='text-sm'>A: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.Both React JS and Node JS play a vital role in the Business world but in different ways. ReactJS is highly popular for its rich UI frameworks whereas NodeJS is highly preferred for its NPM support.
                    ReactJS and NodeJS together are a great combination for high quality solutions.
                    ReactJS and NodeJS are completely distinct as one enhances the frontend while the other one enrich the backend. But one thing that both of them have in common is their ability of bringing ease and quickness in the development process. </p>
            </div>
            <div className='p-2 bg-gray-200'>
                <p className='text-green-600 font-bold'>Q: How does NodeJS handle multiple requests at the same time?</p>
                <p className='text-sm'>A:  NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default Blogs;