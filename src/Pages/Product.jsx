import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productData from '../data/products.json';

const categories = ['Pipes', 'Fittings', 'Wires & Cables'];

export default function Product() {
  const [activeCategory, setActiveCategory] = useState('Pipes');

  const filteredProducts = productData.filter(
    product => product.category === activeCategory
  );
   useEffect(() => {
    document.title = 'SuperBlue - Product';
  }, []);

  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Our Products</h1>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold ${
              activeCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
          >
            <img
              src={`/assets/images/products/${product.image}`}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
