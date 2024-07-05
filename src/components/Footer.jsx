import React from 'react';

const Footer = () => {
    return (
        <div className='px-24 py-8 bg-black'>
            <div className='px-24 bg-black flex'>
                <p className='text-white'><span className='text-gray-500'>© 2024 </span>courseCS.wordpress.com™<span className='text-gray-500'>. All Rights Reserved.</span></p>
                <div className='flex space-x-5 ml-auto'>
                    <a className='text-white font-semibold cursor-pointer hover:text-red-500'>About</a>
                    <a className='text-white font-semibold cursor-pointer hover:text-red-500'>Privacy Policy</a>
                    <a className='text-white font-semibold cursor-pointer hover:text-red-500'>Licensing</a>
                    <a className='text-white font-semibold cursor-pointer hover:text-red-500'>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;