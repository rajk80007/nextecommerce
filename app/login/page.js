    "use client"

import  Link  from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import GlobalApi from '../_utils/GlobalApi';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [failMessage, setFailMessage] = useState('');

    const LoggedIn = localStorage.getItem('loggedIn');

    if(LoggedIn === 'true'){
        window.location.replace('/');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        GlobalApi.sendLogin({ email: email, password: password }).then((res) => {
            console.log(res);
            if(res.data.token){
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('loggedIn', true);
                setEmail('');
                setPassword('');
                // window.location.replace('/');

                
            }    
            setFailMessage(res.data.message);
            setTimeout(() => {
                setFailMessage('');
            }, 3000);
            
        }).catch((err) => {
            console.log(err);
            setFailMessage("Server Error!");
        })
        
    }

    return (
        <div className='flex justify-center items-center min-h-screen md:mt-2 mb-5 pb-10 shadow-xl'>
            <div className='border-[1px] border-gray-300 shadow-sm content-center rounded-lg p-5 grid justify grid-cols-1 lg:grid-cols-2 gap-5'>
                <div><Image src="/heroimg.jpg" alt="img" height={500} width={600}
                    className='rounded-lg object-cover lg:h-screen' />
                </div>
                <div className='my-5 py-5 flex items-center justify-center flex-col'>
                    <div className='flex justify-center flex-col items-center gap-2 w-full'> <h1 className='text-2xl text-gray-500 font-bold'>Login with</h1>
                        <div className='flex gap-2'>
                            <Image src="/google.svg" alt="img" height={30} width={30} className='cursor-pointer rounded-full ' />
                            <Image src="/facebook.svg" alt="img" height={30} width={30} className='cursor-pointer rounded-full ' />
                        </div>
                        <div className='my-6'>

                            <h1 className='text-2xl text-gray-400 font-bold'>Or</h1>
                        </div>
                        <div className='w-[100%] flex justify-center'>
                            <form onSubmit={handleSubmit} className='w-full flex justify-center flex-col items-center gap-5'>
                                {failMessage&&<div><p className='text-red-600 bg-red-100 font-bold'>{failMessage}</p></div>}
                                <input 
                                value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' className='border-[1px] border-gray-300 p-2 rounded-lg max-w-full w-[100%] md:w-[60%] mx-5' />
                                <input 
                                value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='border-[1px] border-gray-300 p-2 rounded-lg max-w-full w-[100%] md:w-[60%] mx-5' />
                                <label className='flex items-center justify-start w-[100%] md:max-w-[60%] ml-2'><input type='checkbox' className='mr-2' /> Remember me </label>
                                 <Link href='#' className='text-blue-500 text-right'>Forgot Password?</Link>
                                 <Button className='w-[100%] md:w-[60%]'><button type='submit'>Login</button></Button>
                                 <div>Don't have an account? <Link href='/register' className='text-blue-500'>Register</Link></div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login