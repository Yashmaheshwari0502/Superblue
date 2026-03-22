import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productData from '../data/products.json';
import SEO from '../components/SEO';

const categories = ['Conduit Pipes', 'Wires & Cables', 'Electrical Accessories'];

export default function Product() {
  const [activeCategory, setActiveCategory] = useState('Conduit Pipes');
  const [activeBrand, setActiveBrand] = useState('All');

  const filteredProducts = productData
    .filter(product => product.category === activeCategory)
    .filter(product => activeBrand === 'All' || product.brand === activeBrand);

  const brands = ['All', ...new Set(productData.filter(p => p.category === activeCategory).map(p => p.brand))];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <SEO 
        title="Polycab & Finolex Products | SuperBlue Distributor Saharanpur & Ghaziabad" 
        description="Buy genuine Polycab & Finolex conduit pipes, electrical wires, fan boxes, conceal boxes & more. Authorized distributor in Saharanpur & Ghaziabad." 
        keywords="Polycab conduit pipe price, Finolex wire dealer Saharanpur, buy Polycab wire Ghaziabad, electrical pipe dealer, fan box, conceal box, batten holder"
      />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-3">Our Products</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Genuine Polycab, Finolex & SuperBlue electrical products. All ISI certified and available for wholesale and retail.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setActiveBrand('All'); }}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Brand Filter */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {brands.map(brand => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium ${
                activeBrand === brand
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block bg-white shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition border border-gray-100 group"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{product.brand}</span>
                </div>
                <h3 className="text-lg font-bold text-blue-900">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
