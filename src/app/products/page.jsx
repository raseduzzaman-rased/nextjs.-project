"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-6xl mx-auto p-6 my-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded p-4 shadow hover:shadow-lg transition flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600 flex-1">{product.description}</p>
            <p className="text-teal-600 font-semibold mt-2">${product.price}</p>

            {/* Details Button */}
            <button
              onClick={() => router.push(`/products/${product.id}`)}
              className="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
