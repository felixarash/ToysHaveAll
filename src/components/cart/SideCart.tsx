'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function SideCart() {
  const { items, removeItem, updateQuantity, total, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-sm shadow-lg z-50
      transform transition-transform duration-300 ease-in-out">
      <div className="p-4 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-grow overflow-auto">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 bg-white/50 p-2 rounded-lg">
                  <div className="w-16 h-16 bg-white/50 rounded-md flex-shrink-0" />
                  <div className="flex-grow">
                    <h3 className="text-gray-900 font-medium">{item.name}</h3>
                    <p className="text-gray-600">{item.price}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="text-gray-500 hover:text-gray-700"
                      >-</button>
                      <span className="text-gray-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-500 hover:text-gray-700"
                      >+</button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex justify-between mb-4">
              <span className="text-gray-900 font-bold">Total:</span>
              <span className="text-gray-900 font-bold">${total}</span>
            </div>
            <Link
              href="/checkout"
              className="block w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 
                font-bold py-3 px-8 rounded-full transition-all duration-300
                text-center shadow-md hover:shadow-lg"
            >
              Checkout
            </Link>
            <Link
              href="/cart"
              className="block w-full mt-2 text-center text-gray-900 hover:text-gray-700"
            >
              View Cart
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}