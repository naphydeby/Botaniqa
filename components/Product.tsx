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
    <div className='bg-green-50 py-20' id='products'>
      <section className='w-full  flex flex-col  items-center py-12'>
        <div className='container mx-auto px-4 flex flex-col  space-y-6 text-center'>
          <h2 className=' text-4xl lg:text-5xl font-bold text-green-800 text-center'>Our Products</h2>
          <p className='text-xl max-w-2xl mx-auto text-green-600'>Explore our range of natural products designed to enhance your well-being.</p>
        </div>
      </section>

      <section className=' grid md:grid-cols-2 lg:grid-cols-3  gap-6'>
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
