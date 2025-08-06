import { useParams } from 'react-router-dom';
import productData from '../data/products.json';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = productData.find((p) => p.id === slug);

  if (!product) {
    return <div className="text-center text-red-600 text-xl mt-20">Product not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <img
        src={`/assets/images/products/${product.image}`}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />
      <h1 className="text-4xl font-bold text-blue-800 mb-4">{product.name}</h1>
      <p className="text-lg text-gray-700">{product.desc}</p>
    </div>
  );
}
