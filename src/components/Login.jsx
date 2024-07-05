import React from 'react';

const Login = () => {
    return (
        <div className='pt-16 pb-11 bg-gray-300 flex flex-col justify-center items-center'>
           <div className='text-center'>
                <h1 className='font-bold text-3xl mb-6'>Login</h1>
                <p className='text-sm mb-3'>Sign In yourself, if you have an account in our application.</p>
           </div>
           <div className='bg-white border-2 border-gray-100 py-6 px-9 flex flex-col gap-6 w-[450px] rounded-lg'>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold' for='email'>Your email</label>
                    <input id='email' type='email' placeholder='name@company.com' className='rounded-lg border border-gray-400 px-2 py-3 text-sm bg-gray-50'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold' for='password2'>Password</label>
                    <input id='password2' type='text' placeholder='••••••••' className='rounded-lg border border-gray-400 px-2 py-3 text-sm bg-gray-50'/>
                </div>
              
               
                <button className='text-white font-semibold py-2 bg-blue-700 rounded-lg cursor-pointer'>Login</button>
              
                
           </div>
        </div>
    )
}

export default Login;