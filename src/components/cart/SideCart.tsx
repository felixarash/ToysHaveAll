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
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-[100dvh] 
        w-full xs:w-[85vw] sm:w-[400px] lg:w-[450px] 
        bg-white/95 backdrop-blur-sm shadow-lg z-50
        transform transition-all duration-300 ease-in-out">
        
        <div className="flex flex-col h-full max-h-[100dvh]">
          {/* Header - Fixed */}
          <div className="flex-shrink-0 flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-full 
                hover:bg-gray-100 transition-colors"
              aria-label="Close cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto overscroll-contain py-2 px-4
            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {isLoading ? (
              <LoadingSpinner />
            ) : items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center p-4">
                <p className="text-gray-500 text-center mb-4">Your cart is empty</p>
                <Link href="/shop" onClick={() => setIsOpen(false)}
                  className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 
                    rounded-full transition-colors duration-300">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 56px, 64px"
                        priority
                      />
                    </div>
                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-gray-900 font-medium text-sm sm:text-base truncate">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.price}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 
                            hover:text-gray-700 hover:bg-gray-100 rounded-full"
                        >-</button>
                        <span className="text-gray-900 w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 
                            hover:text-gray-700 hover:bg-gray-100 rounded-full"
                        >+</button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full"
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

          {/* Footer - Fixed */}
          {items.length > 0 && (
            <div className="flex-shrink-0 border-t border-gray-200 p-4 bg-white/80 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-900 font-bold">Total:</span>
                <span className="text-gray-900 font-bold text-lg">${total}</span>
              </div>
              <div className="space-y-2">
                <Link
                  href="/checkout"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 
                    font-bold py-2.5 px-6 rounded-full transition-all duration-300
                    text-center text-sm sm:text-base"
                >
                  Checkout
                </Link>
                <Link
                  href="/cart"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-2 text-center text-gray-900 hover:text-gray-700 text-sm"
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