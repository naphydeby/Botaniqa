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
   <div>
    <section className='w-full  h-[40vh] flex flex-col py-6 items-center' >
    <div className='container mx-auto px-4 flex flex-col items-center space-y-6'>
      <h2 className='text-5xl font-bold text-green-800 text-center'>Featured Healing Herbs</h2>
      <p className='text-2xl'>Discover our carefully selected herbs, each with unique healing properties
         backed by centuries of traditional use and modern research.
     </p>
    </div>
   </section>
   <section className='container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ' >
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
