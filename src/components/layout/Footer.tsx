export default function Footer() {
  return (
    <footer className="bg-white/30 backdrop-blur-md py-8 w-full mt-auto border-t border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us Section */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-2xl mb-4 text-gray-900">
              About Us
            </h3>
            <p className="text-base text-gray-800 leading-relaxed font-medium">
              ToyLand brings joy and imagination to children worldwide with our amazing collection of toys.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-2xl mb-4 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="/shop" 
                  className="text-base text-gray-800 font-medium hover:text-gray-900 transition-colors
                    hover:underline decoration-2 underline-offset-4"
                >
                  Shop
                </a>
              </li>
              <li>
                <a 
                  href="/cart" 
                  className="text-base text-gray-800 font-medium hover:text-gray-900 transition-colors
                    hover:underline decoration-2 underline-offset-4"
                >
                  Cart
                </a>
              </li>
              <li>
                <a 
                  href="/auth/signin" 
                  className="text-base text-gray-800 font-medium hover:text-gray-900 transition-colors
                    hover:underline decoration-2 underline-offset-4"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-2xl mb-4 text-gray-900">
              Contact
            </h3>
            <ul className="space-y-4 text-base font-medium text-gray-800">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="drop-shadow-md">info@toyshaveall.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="drop-shadow-md">(+923) 2720-64991</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="drop-shadow-md">Hill Park St 2, KMCHS</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-gray-300 text-center">
          <p className="text-base text-gray-800 font-medium">
            © 2024 ToysHaveAll. Developed by Fozan Ahmed All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}