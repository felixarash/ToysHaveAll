'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useLoading } from '@/hooks/useLoading';

export default function SideCart() {
  const { items, removeItem, updateQuantity, total, isOpen, setIsOpen } = useCart();
  const isLoading = useLoading();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with blur effect */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Cart Panel - Responsive for all screens */}
      <div className="fixed right-0 top-0 h-full 
        w-full xs:w-[85vw] sm:w-[400px] lg:w-[450px] 
        bg-white/95 backdrop-blur-sm shadow-lg z-50
        transform transition-all duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-full 
                hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 
                focus:ring-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items - Scrollable area */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-2
            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {isLoading ? (
              <LoadingSpinner />
            ) : items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center p-4">
                <p className="text-gray-500 text-center mb-4">Your cart is empty</p>
                <Link
                  href="/shop"
                  className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 
                    rounded-full transition-colors duration-300 focus:outline-none 
                    focus:ring-2 focus:ring-yellow-400"
                  onClick={() => setIsOpen(false)}
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} 
                    className="flex items-center gap-4 bg-white/50 p-3 rounded-lg 
                      hover:bg-white/70 transition-colors"
                  >
                    <div className="relative rounded-md overflow-hidden
                      w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 64px, 80px"
                        priority
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-gray-900 font-medium truncate">{item.name}</h3>
                      <p className="text-gray-600">{item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 
                            hover:text-gray-700 hover:bg-gray-100 rounded-full 
                            transition-colors focus:outline-none focus:ring-2 
                            focus:ring-gray-300"
                          aria-label="Decrease quantity"
                        >-</button>
                        <span className="text-gray-900 w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 
                            hover:text-gray-700 hover:bg-gray-100 rounded-full 
                            transition-colors focus:outline-none focus:ring-2 
                            focus:ring-gray-300"
                          aria-label="Increase quantity"
                        >+</button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 
                        rounded-full transition-colors focus:outline-none focus:ring-2 
                        focus:ring-red-300"
                      aria-label="Remove item"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Fixed at bottom */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-4 bg-white/80 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-900 font-bold">Total:</span>
                <span className="text-gray-900 font-bold text-xl">${total}</span>
              </div>
              <div className="space-y-2">
                <Link
                  href="/checkout"
                  className="block w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 
                    font-bold py-3 px-8 rounded-full transition-all duration-300
                    text-center shadow-md hover:shadow-lg active:scale-98
                    focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  onClick={() => setIsOpen(false)}
                >
                  Checkout
                </Link>
                <Link
                  href="/cart"
                  className="block w-full py-2 text-center text-gray-900 hover:text-gray-700
                    focus:outline-none focus:underline"
                  onClick={() => setIsOpen(false)}
                >
                  View Cart
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}