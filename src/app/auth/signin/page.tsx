export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 via-pink-300 to-blue-300">
      <main className="max-w-md mx-auto px-4 sm:px-8 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Sign In</h1>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="text-gray-900 font-medium">Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-900 font-medium">Password</label>
              <input 
                type="password" 
                id="password"
                className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900"
                placeholder="Enter your password"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 
                font-bold py-3 px-8 rounded-full transition-all duration-300
                shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}