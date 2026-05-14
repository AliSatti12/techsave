import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useMyStore } from "../Store/Store";

const SingleProductSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 animate-pulse">
      {/* Back Button Skeleton */}
      <div className="h-4 w-32 bg-gray-200 rounded-md mb-8"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Image Gallery Skeleton */}
        <div className="space-y-4">
          {/* Main Large Image */}
          <div className="aspect-square rounded-3xl bg-gray-200 w-full"></div>

          {/* Thumbnails */}
          <div className="flex gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-20 h-20 rounded-xl bg-gray-200"></div>
            ))}
          </div>
        </div>

        {/* Right Side: Info Skeleton */}
        <div className="flex flex-col space-y-6">
          <div>
            {/* Title */}
            <div className="h-10 bg-gray-200 rounded-lg w-3/4 mb-4"></div>
            {/* Category */}
            <div className="h-4 bg-gray-200 rounded-md w-1/4"></div>
          </div>

          {/* Price */}
          <div className="h-8 bg-gray-200 rounded-lg w-24"></div>

          {/* Description Lines */}
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded-md w-full"></div>
            <div className="h-4 bg-gray-200 rounded-md w-full"></div>
            <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
          </div>

          {/* Button */}
          <div className="h-14 bg-gray-200 rounded-2xl w-full md:w-64 mt-4"></div>
        </div>
      </div>
    </div>
  );
};

// Interfaces
interface Category {
  id: number;
  name: string;
  image: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const addtocart = useMyStore((state) => state.addToCart);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Product>(
          `https://api.escuelajs.co/api/v1/products/${id}`,
        );
        setProduct(response.data);
        setSelectedImage(response.data.images[0]);
      } catch (error) {
        console.error("Product fetch karne mein masla hua:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchSingleProduct();
  }, [id]);

  if (loading) return <SingleProductSkeleton />;

  if (!product)
    return <div className="text-center py-20">Some thing went wrong</div>;

  const handlAddToCart = (product: Product) => {
    addtocart(product);
    toast.success("Add to cart successfully");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center font-semibold mb-8 hover:underline"
      >
        ← Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-inner">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 ${selectedImage === img ? "border-indigo-600" : "border-transparent"}`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-4xl font-black text-gray-900 mb-2">
            {product.title}
          </h1>
          <p className="text-red-500 font-bold mb-6">{product.category.name}</p>

          <div className="text-3xl font-black text-gray-900 mb-6">
            ${product.price}
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <button
            onClick={() => handlAddToCart(product)}
            className="w-full md:w-max bg-red-500 text-white px-12 py-4 rounded-2xl font-bold hover:bg-black cursor-pointer transition-all shadow-lg active:scale-95"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
