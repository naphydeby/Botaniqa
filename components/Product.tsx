"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { Product } from '@/types';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='bg-green-50'>
      <section className='w-full  h-[40vh] flex flex-col py-6 items-center'>
        <div className='container mx-auto px-4 flex flex-col items-center space-y-6'>
          <h2 className='text-5xl font-bold text-green-800 text-center'>Our Products</h2>
          <p className='text-2xl'>Explore our range of natural products designed to enhance your well-being.</p>
        </div>
      </section>

      <section className='container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4'>
        {loading ? (
          <p className='text-center col-span-full'>Loading...</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </section>
    </div>
  );
};

export default ProductList;
