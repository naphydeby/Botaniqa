import React from 'react'
import Image from 'next/image';

const AboutPage = () => {
  return (
   <section className='bg-white py-20' id='about'>
    <div className='container mx-auto px-4 py-12'>
      <div className='flex flex-col'>
        <div>
           <h2 className="text-4xl lg:text-5xl  font-bold text-green-800 mb-6">
              Rooted in Tradition, Growing with Science
            </h2>
            <p className="text-lg text-green-700 mb-6 leading-relaxed">
              At Botaniqa, we bridge ancient herbal wisdom with modern scientific understanding. 
              Our passion for botanical healing drives us to source the highest quality herbs and provide 
              personalized wellness solutions for every individual.
            </p>
            <p className="text-lg text-green-700 mb-8 leading-relaxed">
              With over 15 years of experience in herbal medicine, our certified herbalists are dedicated 
              to helping you discover the natural path to optimal health and vitality.
            </p>
        </div>
        <div>
            <Image
              src="/image/naturebanner.jpg" 
              alt="Herbal preparation"
              width={300} height={200}
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
        </div>


      </div>

    </div>

   </section>
  )
}

export default AboutPage
