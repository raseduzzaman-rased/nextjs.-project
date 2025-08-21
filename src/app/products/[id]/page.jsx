import products from '../..//..//..//data/products.json';

export default function ProductDetails({ params }) {
  const { id } = params; 
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-500 font-semibold">Product not found!</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Content */}
        <div className='text-justify'>
          <h1 className="text-3xl font-bold mb-4 text-teal-700">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="text-gray-800 leading-relaxed mb-6">{product.details}</div>
          <div className="text-2xl font-bold text-teal-600">
            <span className="text-black text-lg font-medium">Price:</span> ${product.price}
          </div>

        
        </div>

        {/* Right Side - Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain rounded-xl shadow-md border"
          />
        </div>
      </div>
    </div>
  );
}
