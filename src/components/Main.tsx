import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center flex-1 container mx-auto px-6 py-12 gap-10">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-snug mb-4">
          Your Journey to{" "}
          <span className="text-pink-600 font-bold">Parenthood</span> Starts
          Here
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Expert IVF care with Dr. Payal Bajaj — Over 20 years of experience in
          helping couples achieve their dreams of parenthood with compassionate,
          personalized treatment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
          <Link
            to="/consult"
            className="bg-pink-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-pink-700 transition text-center"
          >
            Book Free Consultation
          </Link>
          <a
            href="tel:+919999999999"
            className="border border-pink-600 text-pink-600 px-5 py-3 rounded-lg font-medium hover:bg-pink-100 transition text-center"
          >
            Call +91-9999999999
          </a>
        </div>

        <p className="text-yellow-500 font-medium text-center lg:text-left">
          ⭐ 4.9/5 <span className="text-gray-600">(200+ Reviews)</span>
        </p>
      </div>

      {/* Right Form */}
      <div className="lg:w-1/2 w-full">
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            Get Your Free Consultation
          </h3>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name *"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400">
              <option>Select Treatment of Interest</option>
              <option>IVF</option>
              <option>IUI</option>
              <option>Fertility Counseling</option>
              <option>Other</option>
            </select>

            <button
              type="submit"
              className="bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition"
            >
              Book Free Consultation
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              Your information is safe and secure with us.
            </p>
          </form>
        </div>
        
        
    
      </div>
    </section>
  );
}
