"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    details: "",
    price: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  if (status === "loading") return <LoadingSpinner />;
  if (!session) return null;

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Product added successfully!");
        setProduct({ name: "", description: "", details: "", price: "", image: "" });
      } else {
        toast.error(data.message || "Failed to add product.");
      }
    } catch (error) {
      toast.error("Server error! Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Toaster position="top-right" />
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <textarea name="description" placeholder="Short Description" value={product.description} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <textarea name="details" placeholder="Full Details" value={product.details} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        <input type="text" name="image" placeholder="Image URL or path" value={product.image} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />

        <button type="submit" disabled={loading} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded">
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
