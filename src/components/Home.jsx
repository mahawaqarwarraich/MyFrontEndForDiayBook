import React from 'react';

const Home = () => {
    return (
        <div className='bg-gray-300 p-52 text-center'>
           <h1 className='font-bold text-3xl mb-6'>Welcome to Diary Book</h1>
           <p className='mb-10 text-lg'>you can create your own diary notes in our application. You can either create, delete, update diary items.</p>
           <button className='btn bg-black text-white px-4 py-3 rounded-xl cursor-pointer'>View Our More Services</button>
        </div>
    )
}

export default Home;