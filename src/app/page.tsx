import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-purple-400 via-pink-300 to-blue-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <HeroSection />
        </div>
        {/* Featured Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Toys</h2>
          <FeaturedProducts />
        </div>
      </div>
    </div>
  );
}