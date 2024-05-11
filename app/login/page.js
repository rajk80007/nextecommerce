import  Link  from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';

const Login = () => {
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
                            <form className='w-full flex justify-center flex-col items-center gap-5'>
                                <input type='email' placeholder='Email' className='border-[1px] border-gray-300 p-2 rounded-lg max-w-full w-[100%] md:w-[60%] mx-5' />
                                <input type='password' placeholder='Password' className='border-[1px] border-gray-300 p-2 rounded-lg max-w-full w-[100%] md:w-[60%] mx-5' />
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