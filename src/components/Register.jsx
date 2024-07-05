import React from 'react';

const Register = () => {
    return (
        <div className='pt-16 pb-3 bg-white flex flex-col justify-center items-center'>
           <div className='text-center'>
                <h1 className='font-bold text-3xl mb-6'>Registration</h1>
                <p className='text-lg mb-3'>Register yourself to use our services.</p>
           </div>
           <div className='bg-white-500 border-2 border-gray-100 py-6 px-9 flex flex-col gap-6 w-[450px] rounded-lg'>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold' for='name'>Full Name</label>
                    <input id='name' type='text' placeholder='Maha Waqar' className='rounded-lg border border-gray-400 px-2 py-3 text-sm bg-gray-50'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold'>Father Name</label>
                    <input type='text' placeholder='Waqar Hussain Tahir' className='rounded-lg border border-gray-400 px-2 py-3 text-sm bg-gray-50'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold'>Your email</label>
                    <input type='email' placeholder='name@companny.com' className='rounded-lg border border-gray-400 px-2 py-3 text-sm bg-gray-50'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold' for='password'>Password</label>
                    <input id='password' type='text' placeholder='••••••••' className='rounded-lg border border-gray-400 px-2 py-3 text-sm bg-gray-50'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold' for='password'>Confirm password</label>
                    <input id='password' type='text' placeholder='••••••••' className='rounded-lg border border-gray-400 px-2 py-3 text-sm bg-gray-50'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold' for='status'>Status</label>
                    <input id='status' type='text' placeholder='Teacher/Student' className='rounded-lg border border-gray-400 px-2 py-3 text-sm bg-gray-50'/>
                </div>
                <button className='text-white font-semibold py-2 bg-blue-700 rounded-lg cursor-pointer'>Register</button>
                <p className='text-gray-400'>Aleady have an account? <span className='text-blue-700 hover:underline cursor-pointer'>Sign up</span></p>
                
           </div>
        </div>
    )
}

export default Register;