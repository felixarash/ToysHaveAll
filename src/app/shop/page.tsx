import Link from "next/link";
import Products from "@/components/home/Products"; // Fixed import path

export default function ShopPage() {
  return (
    <div className="bg-gradient-to-b from-purple-400 via-pink-300 to-blue-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-900 mb-8 hover:text-gray-700 transition-colors"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Toys</h1>
        <Products />
      </div>
    </div>
  );
}
