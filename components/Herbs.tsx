"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MyHerbs } from '@/types';
import HerbsCard from './HerbsCard';


const HerbsList = () => {
  const [featureHerbs, setFeatureHerbs] = useState<MyHerbs[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
     useEffect(()=>{
      const fetchFeatureProduct = async ()=>{
        try{
          const res = await axios.get('/api/featureProduct');
          setFeatureHerbs(res.data)
        }
        catch(error){
          console.error("failed to fetch Featured Product", error)
        } finally{
          setLoading(false)
        }
      };
      fetchFeatureProduct();
     },[]);
  return (
   <div id='herbs'className='py-20'>
    <section className='w-full   flex flex-col  items-center py-12' >
    <div className='container mx-auto px-4 flex flex-col text-center space-y-4'>
      <h2 className='text-4xl lg:text-5xl font-bold text-green-800 text-center'>Featured Healing Herbs</h2>
      <p className='text-xl max-w-2xl mx-auto'>Discover our carefully selected herbs, each with unique healing properties
         backed by centuries of traditional use and modern research.
     </p>
    </div>
   </section>
   <section className='grid md:grid-cols-2 lg:grid-cols-3  gap-6 ' >
     {loading?(
       <p className='text-center col-span-full'>Loading...</p>
      ):(
         featureHerbs.map((featureProduct) => (
            <HerbsCard key={featureProduct.id} herbs={featureProduct} />
           ))
      )}
   </section>
   </div>
   
  )
}

export default HerbsList
