import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, Shield, Zap, Award, Truck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="bg-white px-0 py-0">
      <SEO 
        title="SuperBlue | Authorized Polycab & Finolex Distributor in Saharanpur & Ghaziabad" 
        description="SuperBlue is the authorized distributor of Polycab and Finolex conduit pipes, electrical wires, and accessories in Saharanpur and Ghaziabad, Uttar Pradesh." 
        keywords="Polycab distributor Saharanpur, Finolex distributor Ghaziabad, electrical pipe dealer, Polycab wire dealer, Finolex conduit pipe, buy Polycab wire, electrical accessories Saharanpur"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-blue-200 font-semibold tracking-wider uppercase text-sm">Authorized Distributor</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <div className="inline-flex overflow-hidden">
                  {"SuperBlue".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 100, damping: 10, delay: index * 0.08 }}
                      className="text-white"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Your trusted distributor of <strong>Polycab</strong> & <strong>Finolex</strong> conduit pipes, electrical wires, and accessories in <strong>Saharanpur</strong> & <strong>Ghaziabad</strong>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/product"
                className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold flex items-center space-x-2 transition transform hover:scale-105 shadow-lg w-full sm:w-auto text-center justify-center"
              >
                <span>View Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition w-full sm:w-auto text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>
            </div>

            {/* Location badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-300" /> Saharanpur, UP
              </span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-300" /> Ghaziabad, UP
              </span>
            </div>
          </div>

          {/* Right Side - Stats Card */}
          <div className="mx-auto w-full max-w-md sm:max-w-lg lg:max-w-full">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-white mb-1">15+</div>
                  <p className="text-sm text-blue-200">Years Experience</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-white mb-1">500+</div>
                  <p className="text-sm text-blue-200">Happy Clients</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-white mb-1">100+</div>
                  <p className="text-sm text-blue-200">Products</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-white mb-1">2</div>
                  <p className="text-sm text-blue-200">Locations</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-3">Authorized Distributor</h2>
            <p className="text-lg text-gray-600">We are proud partners of India's leading electrical brands</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {/* Polycab Logo */}
            <div className="flex flex-col items-center gap-3 group">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow border border-gray-100 group-hover:border-blue-200">
                <img 
                  src="/polycab-logo.png" 
                  alt="Polycab Official Logo - Authorized Distributor" 
                  className="h-12 sm:h-16 w-auto object-contain"
                />
              </div>
              <span className="text-sm font-semibold text-blue-800 bg-blue-50 px-4 py-1 rounded-full">Authorized Distributor</span>
            </div>
            {/* Finolex Logo */}
            <div className="flex flex-col items-center gap-3 group">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow border border-gray-100 group-hover:border-blue-200">
                <img 
                  src="/finolex-logo.svg" 
                  alt="Finolex Cables Official Logo - Authorized Distributor" 
                  className="h-12 sm:h-16 w-auto object-contain"
                />
              </div>
              <span className="text-sm font-semibold text-blue-800 bg-blue-50 px-4 py-1 rounded-full">Authorized Distributor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete range of Polycab & Finolex electrical products for residential, commercial, and industrial projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/product" className="group">
              <div className="bg-blue-50 rounded-2xl p-8 text-center hover:bg-blue-100 transition-colors border border-blue-100 hover:border-blue-300">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Conduit Pipes</h3>
                <p className="text-gray-600">Polycab, Finolex & SuperBlue PVC conduit pipes in 20mm & 25mm sizes</p>
              </div>
            </Link>

            <Link to="/product" className="group">
              <div className="bg-blue-50 rounded-2xl p-8 text-center hover:bg-blue-100 transition-colors border border-blue-100 hover:border-blue-300">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Wires & Cables</h3>
                <p className="text-gray-600">Polycab & Finolex FRLS house wires from 1.0 to 4.0 sq mm</p>
              </div>
            </Link>

            <Link to="/product" className="group">
              <div className="bg-blue-50 rounded-2xl p-8 text-center hover:bg-blue-100 transition-colors border border-blue-100 hover:border-blue-300">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Electrical Accessories</h3>
                <p className="text-gray-600">Fan boxes, conceal boxes, batten holders, junction boxes & more</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose SuperBlue */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Why Choose SuperBlue?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your one-stop destination for genuine Polycab & Finolex electrical products in Uttar Pradesh.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">100% Genuine</h3>
              <p className="text-gray-600 text-sm">Only authentic Polycab & Finolex products. No duplicates.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Truck className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Same-day dispatch in Saharanpur & Ghaziabad areas.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Award className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Best Prices</h3>
              <p className="text-gray-600 text-sm">Competitive wholesale and retail pricing with bulk discounts.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">15+ Years Trust</h3>
              <p className="text-gray-600 text-sm">Decades of experience serving electricians &amp; contractors.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
