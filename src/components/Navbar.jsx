import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-black px-8 py-4'>
           <div className='flex space-x-7 text-white font-semibold'>
            <a className='hover:text-red-600 cursor-pointer'>Home</a>
            <a className='hover:text-red-600 cursor-pointer'>Diary</a>
            <a className='hover:text-red-600 cursor-pointer'>Register</a>
            <a className='hover:text-red-600 cursor-pointer'>Login</a>
            <a className='hover:text-red-600 cursor-pointer'>Logout</a>
           </div>
        </div>
    )
}

export default Navbar;