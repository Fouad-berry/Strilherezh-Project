import React from 'react';
import Image from 'next/image';
import sampleImage from '@/assets/images/alcool.jpg';
import { Heart } from 'lucide-react';


const products = Array.from({ length: 8 }).map((_, index) => ({
  id: index,
  image: sampleImage,
  description: `Produit ${index + 1}`,
  price: `${(Math.random() * 40 + 10).toFixed(2)} €`,
}));

export default function ProductGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
            <div key={product.id} className="relative bg-white overflow-hidden group">
            <div className="absolute top-2 right-2 z-10  p-1 rounded-full">
                <Heart className="w-5 h-5 text-black hover:text-red-500 transition-colors cursor-pointer" />
            </div>

            <div className="flex justify-center items-center h-56 bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.description}
                    width={160}
                    height={160}
                    className="object-contain rounded-lg"
                />
            </div>

            <div className="p-4 text-left">
                <p className="text-sm font-semibold text-gray-700 mb-1">{product.description}</p>
                <p className="text-md font-extralight text-gray-900">{product.price}</p>
            </div>
            </div>
        ))}
        </div>
    );
}
