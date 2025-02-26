import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Company Name */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">3D Visionary</h2>
            <p className="text-gray-400 mt-2">Innovating the future, one step at a time.</p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
            <Link to="/manufacturing" className="text-gray-300 hover:text-white">Manufacturing</Link>
            <Link to="/real-estate" className="text-gray-300 hover:text-white">Real Estate</Link>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} 3D Visionary. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
