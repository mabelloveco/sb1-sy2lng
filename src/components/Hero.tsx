{/* Previous Hero code with updated branding */}
export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Welcome to To-Coupon</span>
            <span className="block">Save at 3,500+ Stores</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join millions of members earning up to 40% cash back at your favorite stores.
          </p>
        </div>
      </div>
    </div>
  );
}