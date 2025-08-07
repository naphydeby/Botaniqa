import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MyHerbs } from "@/types";
import Image from 'next/image';
import Link from 'next/link';
export  default function HerbsCard({ herbs }: { herbs: MyHerbs }){
    return(
      <Link href="#herbs">
        <Card className="hover:shadow-lg transition-shadow duration-300 border-green-100 bg-white overflow-hidden cursor-pointer">
            <CardHeader>
                <div className="relative h-48 overflow-hidden">
              <Image
             src={herbs.image}
            alt={herbs.name}
            fill
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            </CardHeader>
            <CardTitle className='px-6 '>{herbs.name}</CardTitle>
            <CardContent>{herbs.description}</CardContent>
        </Card>
      
      </Link>
    )
}