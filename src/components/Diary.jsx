import React from 'react';

const Diary = () => {
    return (
        <div className='pt-16 pb-11 bg-white flex flex-col justify-center items-center'>
           <div className='text-center'>
                <h1 className='font-bold text-3xl mb-6'>Diary Items</h1>
                
           </div>
           <div className='bg-white border-2 border-gray-100 py-6 px-9 flex flex-col gap-6 w-[450px] rounded-lg mb-8'>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold' for='title'>Item Title</label>
                    <input id='title' type='email' placeholder='Assignment due' className='rounded-lg border border-gray-400 px-2 py-3 text-sm bg-gray-50'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold' for='description'>Description</label>
                    <input id='description' type='text' placeholder='Description about the diary item' className='rounded-lg border border-gray-400 px-2 py-3 text-sm bg-gray-50'/>
                </div>
              
               
                <button className='text-white font-semibold py-2 bg-blue-700 rounded-lg cursor-pointer'>Create Diary Item</button>
              
                
           </div>
           <div className='flex space-x-4'>
            <div className='bg-white border border-gray-200 p-6 rounded-lg flex flex-col gap-3'>
                <h1 className='font-bold text-xl'>Item 1</h1>
                <p>This is description.</p>
                <div className='flex space-x-2'>
                    <button className='bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold'>Edit</button>
                    <button className='bg-red-600 px-4 py-2 rounded-lg text-white font-semibold'>Delete</button>
                </div>
            </div>
            <div className='bg-white border border-gray-200 p-6 rounded-lg flex flex-col gap-3'>
                <h1 className='font-bold text-xl'>Item 1</h1>
                <p>This is description.</p>
                <div className='flex space-x-2'>
                    <button className='bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold'>Edit</button>
                    <button className='bg-red-600 px-4 py-2 rounded-lg text-white font-semibold'>Delete</button>
                </div>
            </div>
            <div className='bg-white border border-gray-200 p-6 rounded-lg flex flex-col gap-3'>
                <h1 className='font-bold text-xl'>Item 1</h1>
                <p>This is description.</p>
                <div className='flex space-x-2'>
                    <button className='bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold'>Edit</button>
                    <button className='bg-red-600 px-4 py-2 rounded-lg text-white font-semibold'>Delete</button>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Diary;