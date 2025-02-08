'use client';

import { productData } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function FeaturedProducts() {
  // Show only first 4 products on home page
  const featuredProducts = productData.slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {featuredProducts.map((product) => (
        <ProductCard 
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}