import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCardSkeleton from "./ProductSkeleton";
import { useMyStore } from "../Store/Store";
import toast from "react-hot-toast";
import { FiHeart, FiShoppingCart, FiEye } from "react-icons/fi";
import { useWishlist } from "../Store/Whislist";

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

const ProductCardd: React.FC<{ product: Product }> = ({ product }) => {
  const { title, price, description, category, images, id } = product;
  const [wishlisted, setWishlisted] = useState(false);

  const addtocart = useMyStore((state) => state.addToCart);
  const wishlist = useWishlist((state) => state.addToWishlist);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success("Added to cart successfully");
    addtocart(product);
  };

  const handleWishList = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlisted((prev) => !prev);
    toast.success(wishlisted ? "Removed from wishlist" : "Added to wishlist successfully");
    wishlist(product);
  };

  const rating = Math.round(3 + (id % 3));

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden w-full max-w-sm mx-auto flex flex-col">

      {/* ── Image Zone ── */}
      <Link to={`/product/${id}`} className="block relative h-60 overflow-hidden bg-gray-50 flex-shrink-0">
        <img
          src={images?.[0]}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/320x240/f3f4f6/aaa?text=No+Image";
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />


        {/* Floating price */}
        <span className="absolute bottom-3 right-3 bg-white text-green-600 font-extrabold text-base px-4 py-1 rounded-full shadow-lg leading-tight">
          ${price}
        </span>

        {/* Wishlist button */}
        <button
          onClick={handleWishList}
          aria-label="Add to wishlist"
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 z-10 hover:scale-110 cursor-pointer
            ${wishlisted
              ? "bg-red-50 border-red-300 text-red-500"
              : "bg-white/80 backdrop-blur border-gray-200 text-gray-400 hover:bg-red-50 hover:border-red-300 hover:text-red-500"
            }`}
        >
          <FiHeart
            size={16}
            className={wishlisted ? "fill-red-500 stroke-red-500" : ""}
          />
        </button>
      </Link>

      {/* ── Body ── */}
      <Link to={`/product/${id}`} className="flex flex-col flex-1 px-5 pt-4 pb-2 no-underline">

        {/* Rating dots */}
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i < rating ? "bg-red-500" : "bg-gray-200"}`}
            />
          ))}
          <span className="text-xs text-gray-400 ml-1 font-medium">{rating}.0</span>
        </div>

        {/* Title */}
        <h3 className="text-gray-900 font-bold text-[15px] leading-snug line-clamp-2 mb-2">
          {title}
        </h3>

        {/* Stock indicator */}
        <div className="flex items-center gap-1.5 mb-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(22,163,74,0.5)]" />
          <span className="text-[10px] font-semibold text-green-600 tracking-widest uppercase">
            In Stock
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>
      </Link>

      {/* ── Footer ── */}
      <div className="px-5 pb-5 pt-3 flex gap-2.5 items-center border-t border-gray-50 mt-2">
        <button
          onClick={handleAddToCart}
          className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-gray-900 text-white text-xs font-bold tracking-wider uppercase py-2.5 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer"
        >
          <FiShoppingCart size={15} />
          Add to Cart
        </button>

        <Link
          to={`/product/${id}`}
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300 text-gray-500 hover:text-gray-800 transition-all duration-200 hover:scale-105"
          aria-label="Quick view"
        >
          <FiEye size={16} />
        </Link>
      </div>
    </div>
  );
};

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "https://api.escuelajs.co/api/v1/products?offset=0&limit=20"
        );
        setProducts(response.data);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="bg-gray-50 min-h-screen p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-50 text-red-600 px-6 py-4 rounded-lg border border-red-200 font-medium">
          {error}
        </div>
      </div>
    );

  return (
    <div className=" min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        <header className="mb-12 text-center">
          <p className="text-xs tracking-[0.18em] uppercase text-gray-400 mb-2">
            Handpicked for you
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 uppercase tracking-tighter">
            Our Collection
          </h1>
          <div className="h-[3px] w-14 bg-red-500 mx-auto rounded-full mt-3" />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCardd key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProductList;