import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Product from './Pages/Product';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProductDetail from './Pages/ProductDetail';


function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow px-4 py-4 flex items-center justify-around flex-wrap sm:px-8">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center space-x-1">
          <span className="text-black">Super</span>
          <span className="text-blue-500">Blue</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 sm:gap-10 md:gap-16">
          <Link
            className="hover:text-blue-600 font-medium border-b-2 border-transparent hover:border-black transition"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-blue-600 font-medium border-b-2 border-transparent hover:border-black transition"
            to="/product"
          >
            Products
          </Link>
          <Link
            className="hover:text-blue-600 font-medium border-b-2 border-transparent hover:border-black transition"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-blue-600 font-medium border-b-2 border-transparent hover:border-black transition"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-4 sm:p-6 md:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold">
              <span className="text-white">Super</span>
              <span className="text-blue-500">Blue</span>
            </h3>
            <p className="text-sm text-gray-400 mt-2">Trusted Electrical Solutions for Modern India.</p>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-semibold text-white mb-2">Available In</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Delhi</li>
              <li>Uttar Pradesh</li>
              <li>Uttarakhand</li>
              <li>Rajasthan</li>
              <li>Punjab</li>
              <li>Haryana</li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold text-white mb-2">Connect With Us</h4>
            <div className="flex gap-4 mb-3">
              <a href="https://www.facebook.com/profile.php?id=61578788624016" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/superblueindustries/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/super-blue-a4784b378/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="text-sm text-gray-400">Email: superblueindustries@gmail.com</p>

          </div>
        </div>

        <div className="text-center text-gray-500 text-xs mt-6 border-t border-gray-800 pt-4">
          © 2025 SuperBlue Pvt. Ltd. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;
