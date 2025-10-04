import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-xl sm:text-2xl font-bold text-pink-600">
        Dr. Payal Bajaj
      </Link>
      <a
        href="tel:+919999999999"
        className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-pink-700 transition"
      >
        📞 Call Now
      </a>
    </nav>
  );
}
