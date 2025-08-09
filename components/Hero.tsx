"use client"
import React from 'react'
import {  ChevronRight } from "lucide-react";

import { Button } from './ui/button';
const Hero = () => {
   
  return (
    <section className='bg-cover bg-center bg-no-repeat  py-20 ' style={{ backgroundImage: 'url(/image/basil.jpg)' }} id='home'>
    <div className='container mx-auto px-2 py-18 text-center'>
        <div className='flex flex-col space-y-12   '>
                <h1 className='text-3xl md:text-8xl lg:text-7xl  font-bold '>Natural Healing Through
                 <span className='text-green-600 font-bold animate-pulse'> Herbal  Wisdom</span>
                </h1>
            <p className='text-2xl text-green-600 '>
             Discover the ancient power of herbs for modern wellness. Premium botanical products, 
              expert consultations, and sustainable healing solutions for your journey to natural health.
            </p>
            <div className=' flex flex-col md:flex-row justify-center  gap-4   '>
                {/* <Link href='#herbs'  className='bg-green-600 hover:bg-green-500 text-lg px-8 py-4 rounded-md text-white font-semibold transition-all duration-300 transform hover:scale-105 flex cursor-pointer'> Explore Our Herbs <ChevronRight className="ml-2 h-5 w-5 mt-1  " /></Link>
                <Link href='#contact' className='bg-white border-1 border-green-600 hover:bg-green-50 text-lg px-8 py-4 rounded-md text-green-600 font-semibold cursor-pointer'>Book Consultation</Link> */}
               <Button   className='bg-green-600 hover:bg-green-500 text-lg px-8 py-4 h-12 rounded-md text-white font-semibold transition-all duration-300 transform hover:scale-105 flex cursor-pointer'> Explore Our Herbs <ChevronRight className="ml-2 h-5 w-5 mt-1  " /></Button>
                <Button  className='bg-white border-1 border-green-600 hover:bg-green-50 text-lg px-8 py-4 h-12 rounded-md text-green-600 font-semibold cursor-pointer'>Book Consultation</Button>

            </div>
        </div>

    </div>
    
    </section>
  )
}

export default Hero
