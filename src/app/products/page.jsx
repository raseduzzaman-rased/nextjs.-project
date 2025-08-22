"use client";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product._id} className="border rounded p-4 shadow">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-teal-600 font-semibold mt-2">${product.price}</p>
        </div>
      ))}
    </div>
  );
}
