export default function HeroSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl sm:text-6xl font-bold text-gray-900">
        Discover Magical Toys
      </h2>
      <p className="text-gray-800 text-lg">
        Bring joy and imagination to your children with our collection of amazing toys!
      </p>
      <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full 
        transform hover:scale-105 transition-all duration-300 shadow-lg">
        Explore Now
      </button>
    </div>
  );
}