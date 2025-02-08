// src/app/checkout/page.tsx
'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';

export default function CheckoutPage() {
  const { items, total } = useCart();

  return (
    <div className="bg-gradient-to-b from-purple-400 via-pink-300 to-blue-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <Link 
          href="/cart"
          className="inline-flex items-center text-gray-900 mb-8 hover:text-gray-700"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Cart
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Checkout Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/90 border border-gray-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-900 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/90 border border-gray-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-gray-900 font-medium mb-2">Address</label>
                <textarea
                  id="address"
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-white/90 border border-gray-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="card" className="block text-gray-900 font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  id="card"
                  className="w-full px-4 py-2 rounded-lg bg-white/90 border border-gray-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 
                  font-bold py-3 px-8 rounded-full transition-all duration-300
                  shadow-md hover:shadow-lg active:scale-95"
              >
                Place Order (${total})
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-gray-900 font-medium">{item.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between text-gray-900">
                  <span>Subtotal</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between text-gray-900 mt-2">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-900 font-bold mt-2 text-lg">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}