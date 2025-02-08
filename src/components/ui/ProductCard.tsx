'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 
      transform hover:-translate-y-2 transition-all duration-300 shadow-md">
      <div className="aspect-square relative mb-2 overflow-hidden rounded-lg">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-white/50 rounded-lg animate-pulse" />
        )}
      </div>
      <div className="space-y-2">
        <h3 className="text-gray-900 font-semibold">{name}</h3>
        <p className="text-gray-800 text-sm font-medium">{price}</p>
        <button 
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 
            font-semibold py-2 px-4 rounded-lg transition-colors duration-300
            flex items-center justify-center gap-2"
          onClick={() => {
            addItem({ id, name, price, image, quantity: 1 });
          }}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}