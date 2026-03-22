import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Product from './Pages/Product';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProductDetail from './Pages/ProductDetail';
import Blog from './Pages/Blog';
import BlogPost from './Pages/BlogPost';


function App() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 px-4 py-3 flex items-center justify-between flex-wrap sm:px-8 lg:px-16">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold flex items-center space-x-1">
          <span className="text-blue-900">Super</span>
          <span className="text-blue-500">Blue</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-4 sm:gap-8 md:gap-12 items-center">
          <Link className="text-gray-700 hover:text-blue-600 font-medium transition text-sm sm:text-base" to="/">Home</Link>
          <Link className="text-gray-700 hover:text-blue-600 font-medium transition text-sm sm:text-base" to="/product">Products</Link>
          <Link className="text-gray-700 hover:text-blue-600 font-medium transition text-sm sm:text-base" to="/about">About</Link>
          <Link className="text-gray-700 hover:text-blue-600 font-medium transition text-sm sm:text-base" to="/contact">Contact</Link>
          <Link className="text-gray-700 hover:text-blue-600 font-medium transition text-sm sm:text-base" to="/blog">Blog</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-extrabold mb-3">
              <span className="text-white">Super</span>
              <span className="text-blue-400">Blue</span>
            </h3>
            <p className="text-sm text-blue-200 mb-4">Authorized Distributor of Polycab & Finolex electrical products in Uttar Pradesh.</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61578788624016" target="_blank" rel="noreferrer" className="w-9 h-9 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="https://www.instagram.com/superblueindustries/" target="_blank" rel="noreferrer" className="w-9 h-9 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="https://www.linkedin.com/in/super-blue-a4784b378/" target="_blank" rel="noreferrer" className="w-9 h-9 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-3">Our Products</h4>
            <ul className="text-sm text-blue-200 space-y-2">
              <li><Link to="/product" className="hover:text-white transition">Polycab Conduit Pipes</Link></li>
              <li><Link to="/product" className="hover:text-white transition">Finolex Conduit Pipes</Link></li>
              <li><Link to="/product" className="hover:text-white transition">Polycab House Wires</Link></li>
              <li><Link to="/product" className="hover:text-white transition">Finolex House Wires</Link></li>
              <li><Link to="/product" className="hover:text-white transition">Fan Box, Conceal Box & Accessories</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-white mb-3">Our Locations</h4>
            <ul className="text-sm text-blue-200 space-y-2">
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt mt-1 text-blue-400"></i>
                <span>Saharanpur, Uttar Pradesh</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt mt-1 text-blue-400"></i>
                <span>Ghaziabad, Uttar Pradesh</span>
              </li>
            </ul>
            <h4 className="font-bold text-white mt-4 mb-2">Serving Areas</h4>
            <p className="text-sm text-blue-200">Delhi, Haryana, Punjab, Rajasthan, Uttarakhand</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-3">Contact Us</h4>
            <ul className="text-sm text-blue-200 space-y-2">
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-blue-400"></i>
                <span>superblueindustries@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-blue-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-blue-300 text-xs">© 2025 SuperBlue Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-xs text-blue-300">
            <span>Authorized Distributor of Polycab & Finolex</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
