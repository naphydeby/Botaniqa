import React from 'react'
import Herbs from '@/components/Herbs'
import Product from '@/components/Product'
import Services from '@/components/Services'
import About from '@/components/About'
import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
const page = () => {
  return (
    <div className='min-h-screen'>
      <Hero  /> 
      <Herbs />
      <Product />
      <Services />
      <About />
      <Contact />
      
    </div>
  )
}

export default page
