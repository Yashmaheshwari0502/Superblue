import { useParams, Link } from 'react-router-dom';
import productData from '../data/products.json';
import SEO from '../components/SEO';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = productData.find((p) => p.id === slug);

  if (!product) {
    return <div className="text-center text-red-600 text-xl mt-20">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <SEO 
        title={`${product.name} | ${product.brand} - SuperBlue Distributor`} 
        description={`Buy ${product.name} from SuperBlue. ${product.desc} Authorized ${product.brand} distributor in Saharanpur & Ghaziabad.`} 
        keywords={`${product.name}, ${product.brand} distributor, buy ${product.brand}, electrical products Saharanpur`}
      />
      <div className="max-w-4xl mx-auto">
        <Link to="/product" className="text-blue-600 hover:underline mb-6 inline-block font-semibold text-sm">← Back to Products</Link>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 sm:h-96 object-cover"
          />
          <div className="p-8">
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">{product.brand}</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-4 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 leading-relaxed">{product.desc}</p>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Interested in this product?</h3>
              <p className="text-gray-600 text-sm mb-4">Contact us for wholesale pricing and availability in Saharanpur & Ghaziabad.</p>
              <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
