import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import  Link  from 'next/link';

const Header = () => {
    const Menu=[{

        id:1,
        nmae:'Home',
        path:'/'
    },
    {

        id:2,
        nmae:'Explore',
        path:'/explore'
    },
    {

        id:3,
        nmae:'Contact Us',
        path:'/contact'
    },
    ]
  return (
    <div className='flex items-center justify-between p-5 shadow-md'>
        <div className='flex items-center gap-10'>

        <Image src="/logo.svg" alt="logo" width={170} height={80} />
        <ul className='gap-8 hidden md:flex'>
           {Menu.map((item,index)=>(
            <Link href={item.path} key={index}>
               <li 
               className='cursor-pointer hover:scale-105 hover:text-primary hover:font-bold transition-all ease-in-out'>{item.nmae}</li>
               </Link>
            ))}
        </ul>
            </div>
            <Button>Get Started</Button>
    </div>
  )
}

export default Header