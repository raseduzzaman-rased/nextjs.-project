import { MongoClient, ObjectId } from "mongodb";

async function getProduct(id) {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db("nextjs_project");
  const product = await db.collection("products").findOne({ id: parseInt(id) });
  await client.close();
  return product;
}

export default async function ProductDetails({ params }) {
  const product = await getProduct(params.id);

  if (!product) return <p className="text-center text-red-500 font-semibold">Product not found!</p>;

  return (
    <div className="max-w-6xl mx-auto p-8 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className='text-justify'>
          <h1 className="text-3xl font-bold mb-4 text-teal-700">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="text-gray-800 leading-relaxed mb-6">{product.details}</div>
          <div className="text-2xl font-bold text-teal-600">
            <span className="text-black text-lg font-medium">Price:</span> ${product.price}
          </div>
        </div>
        <div>
          <img src={product.image} alt={product.name} className="w-full h-96 object-contain rounded-xl shadow-md border"/>
        </div>
      </div>
    </div>
  );
}
