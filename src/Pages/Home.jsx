import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Factory, Shield, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    document.title = 'SuperBlue - Home';
  }, []);

  return (
    <div className="bg-white bg-home px-4 py-12">
      {/* Hero Section */}
      <section className="py-16 md:py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight">
                Welcome to <br />
                <div className="inline-flex overflow-hidden">
                  {"SuperBlue".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: index * 0.1,
                      }}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-inherit"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
                High-Quality Electrical Conduits, Pipes & Fittings for Safe, Efficient Installations — Trusted by Customers.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/product"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition transform hover:scale-105 shadow-md w-full sm:w-auto"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/contact"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition w-full sm:w-auto text-center"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-center">
              <div className="bg-white/70 rounded-lg p-4 hover:scale-105 transition">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <p className="text-sm text-gray-600">Years of Experience</p>
              </div>
              <div className="bg-white/70 rounded-lg p-4 hover:scale-105 transition">
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <p className="text-sm text-gray-600">Products</p>
              </div>
              <div className="bg-white/70 rounded-lg p-4 hover:scale-105 transition">
                <div className="text-2xl font-bold text-blue-600">200+</div>
                <p className="text-sm text-gray-600">Happy Wholesalers</p>
              </div>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="mx-auto w-full max-w-md sm:max-w-lg lg:max-w-full">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-6 md:p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Factory className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Electrical Pipe Manufacturing</h3>
                    <p className="text-gray-600 text-sm">Advanced Conduit Production</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Fire Resistant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Corrosion Proof</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Quick Installation</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">99.9%</div>
                    <p className="text-xs text-gray-600">Quality Assurance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SuperBlue Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Why Choose SuperBlue?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium electrical conduits and unmatched service quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Premium Quality</h3>
              <p className="text-gray-600 text-center">
                All our products undergo rigorous quality testing and meet international safety standards for electrical installations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Fast Delivery</h3>
              <p className="text-gray-600 text-center">
                Quick turnaround times with efficient logistics to ensure your projects stay on schedule without delays.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Certified Products</h3>
              <p className="text-gray-600 text-center">
                ISO certified manufacturing processes ensuring consistent quality and reliability in every product we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
