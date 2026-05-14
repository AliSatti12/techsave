import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ProductCardSkeleton from "./ProductSkeleton";
import { useMyStore } from "../Store/Store";
import toast from "react-hot-toast";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
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
  const { title, price, description, category, images } = product;

  const addtocart = useMyStore((state) => state.addToCart);
  const wishlist = useWishlist((state) => state.addToWishlist)
  const list = useWishlist((state) => state.wishlist)
  console.log(list)

  const handleAddToCart = (product: Product) => {
    toast.success("Add to cart successfully");
    console.log(product)
    addtocart(product);
  };

  const handleWishList = (product: Product) => {
    console.log(product, "whislist");
    toast.success("Add to wishlist successfully");
    wishlist(product)
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group m-auto relative">
      {/* Image aur Content Area ko Link banayein */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {category.name}
          </span>
        </div>

        <div className="p-5 flex flex-col h-56">
          <div className="flex justify-between items-start mb-2 gap-2">
            <h3 className="text-lg font-bold text-gray-800 line-clamp-1 flex-1">
              {title}
            </h3>
            <span className="text-xl font-black text-green-600 shadow-sm">
              ${price}
            </span>
          </div>

          <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">
            {description}
          </p>
        </div>
      </Link>

      <div className="px-5 pb-5">
        <div className="flex gap-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart(product);
            }}
            className="flex-1 bg-red-500 hover:bg-black cursor-pointer text-white font-semibold py-2.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
          >
           <FiShoppingCart size={22} />
            Add to Cart
          </button>

          <button>
            <FiHeart
              size={22}
              className="cursor-pointer hover:text-red-600 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleWishList(product);
              }}
            />
          </button>
           
        
        </div>
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
          "https://api.escuelajs.co/api/v1/products?offset=0&limit=20",
        );
        setProducts(response.data);
      } catch (err) {
        setError("Some thing went wrong ");
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
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 uppercase tracking-tighter">
            Our Collection
          </h1>
          <div className="h-1 w-20 bg-red-500 mx-auto rounded-full"></div>
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
