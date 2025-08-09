import React from 'react'
import Herbs from '@/components/Herbs'
import Product from '@/components/Product'
import Services from '@/components/Services'
import About from '@/components/About'
import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <div className='min-h-screen'>
      <Hero  /> 
      <Herbs />
      <Product />
      <Services />
      <About />
      <Contact />
      <ContactForm />
      <Footer />

    </div>
  )
}

export default page
