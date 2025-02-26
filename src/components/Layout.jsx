import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-around items-center">
          {/* Logo */}
          {/* <Link to="/" className="text-2xl font-bold text-blue-400">
            MyCompany
          </Link> */}

          {/* Navigation Links */}
          {/* <ul className="hidden md:flex space-x-6 text-lg"> */}
            <div>
              <Link to="/" className="hover:text-blue-400 transition md:text-xl">Home</Link>
            </div>
            
            
            <div>
              <Link to="/architects" className="hover:text-blue-400 transition md:text-xl">
              Architects</Link>
            </div>
            <div>
              <Link to="/real-estate" className="hover:text-blue-400 transition md:text-xl">Real Estate</Link>
            </div>
            <div>
              <Link to="/manufacturing" className="hover:text-blue-400 transition md:text-xl">Manufacturing</Link>
            </div>
            <div>
              <Link to="/contact" className="hover:text-blue-400 transition  md:text-xl">Contact</Link>
            </div>
          {/* </ul> */}
        </div>
      </nav>

      {/* Page Content */}
      <div className="container mx-auto p-6">{children}</div>
    </div>
  );
}
