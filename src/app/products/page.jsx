import { MongoClient } from "mongodb";

async function getProducts() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db("nextjs_project");
  const products = await db.collection("products").find({}).toArray();
  await client.close();
  return products.map(p => ({ ...p, id: p.id }));
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto p-6 my-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-xl shadow-md p-4 hover:shadow-lg flex flex-col">
            <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded mb-3"/>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-2 flex-grow">{product.description}</p>
            <p className="text-teal-600 font-bold mb-3"><span className='text-black'>Price:</span> ${product.price}</p>
            <a href={`/products/${product.id}`} className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded mt-auto text-center">
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
