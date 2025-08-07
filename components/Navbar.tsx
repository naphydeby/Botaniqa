'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Menu, X, Home,Flower, Package, Users, Info, Mail } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu =()=> setIsOpen(!isOpen)

  return (
    
    <div className='sticky top-0  w-full z-50'>
     <nav className='bg-white/90 backdrop-blur-sm shadow-md  '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
           <div className='flex justify-between items-center py-4 font-semibold'>
             <div className='flex animate-pulse ' >
             <Image src="/image/leaf.jpeg" alt="logo" width={50} height={50} />
            <h1 className='mt-2 text-green-800'>Botaniqa</h1>
        </div>
        {/* desktop Navigation */}
            <div className=' text-green-800 hidden md:flex space-x-4'>
           <Link href="#home" className='hover:text-green-500 cursor-pointer'>Home</Link>
            <Link href="#herbs" className='hover:text-green-500 cursor-pointer'>Herbs</Link>
            <Link href="#products" className='hover:text-green-500 cursor-pointer'>Products</Link>
            <Link href="#services" className='hover:text-green-500 cursor-pointer'>Services</Link>
            <Link href="#about" className='hover:text-green-500 cursor-pointer'>About</Link>
            <Link href="#contact" className='hover:text-green-500 cursor-pointer'>Contact</Link>
        </div>
         {/* menu */}
           <div className='md:hidden'>
            <button onClick={toggleMenu}>
                {isOpen ? <X className='h-6 w-6 text-green-800' /> : <Menu className='h-6 w-6 text-green-800' />}
            </button>
           </div>
          </div> 
        </div>
     </nav>
       {/* mobile Navigation */}
        
            <div className={`md:hidden w-1/2 h-screen space-y-4 text-green-800 font-semibold bg-white/90 backdrop-blur-md shadow-md p-6 fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
             <div className='flex animate-pulse '>
             <Image src="/image/leaf.jpeg" alt="logo" width={50} height={50} className='mt-1' />
            <h1 className='mt-2 text-green-800 text-2xl '>Botaniqa</h1>
          </div>
             <nav>
             <Link href="/" className='  flex py-2  hover:text-green-500 cursor-pointer'><Home className='w-4 h-4 mt-1' /> <p className='mx-2'>Home</p> </Link>
            <Link href="#herbs" className='  flex py-2  hover:text-green-500 cursor-pointer'><Flower className='w-4 h-4 mt-1' /> <p className='mx-2'>Herbs</p> </Link>
            <Link href="#products" className='  flex py-2  hover:text-green-500 cursor-pointer'><Package className='w-4 h-4 mt-1' /> <p className='mx-2'>Products</p> </Link>
            <Link href="#services" className='  flex py-2  hover:text-green-500 cursor-pointer'><Users className='w-4 h-4 mt-1' /> <p className='mx-2'>Services</p> </Link>
            <Link href="#about" className='  flex py-2  hover:text-green-500 cursor-pointer'><Info className='w-4 h-4 mt-1' /> <p className='mx-2'>About</p> </Link>
            <Link href="#contact" className='  flex py-2  hover:text-green-500 cursor-pointer'><Mail className='w-4 h-4 mt-1' /> <p className='mx-2'>Contact</p> </Link>
             </nav>

            </div>
        
    </div>
  )
}

export default Navbar



