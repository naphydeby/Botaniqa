import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href="#contact">
     <Card className="hover:shadow-lg transition-shadow duration-300 border-green-100 bg-white overflow-hidden cursor-pointer">
      <CardHeader >
         <div className="relative h-48 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      
      </CardHeader>
      <CardTitle className="px-6 ">{product.name}</CardTitle>
      <CardContent>
        <p>{product.description}</p>
        <p className="text-green-600 font-bold mt-2">₦{product.price}</p>
      </CardContent>
    </Card>

    </Link>
     );
}
