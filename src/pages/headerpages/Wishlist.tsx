import { Link } from "react-router-dom";
import {
  FiTrash2,
  FiShoppingCart,
  FiHeart,
  FiArrowRight,
} from "react-icons/fi";
import toast from "react-hot-toast";
import { useWishlist } from "../../Store/Whislist";
import { useMyStore } from "../../Store/Store";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  console.log(wishlist);
  const addtocart = useMyStore((state) => state.addToCart);

  const handleAddToCart = (product: any) => {
    addtocart(product);
    toast.success("Add to cart successfully");
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-white">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-red-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative bg-gray-50 p-10 rounded-full shadow-inner">
            <FiHeart size={60} className="text-gray-300" />
          </div>
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">
          Your wishlist is empty
        </h2>
        <p className="text-gray-500 mb-10 text-center max-w-sm leading-relaxed">
          Looks like you haven't discovered anything you love yet. Start
          exploring our latest tech collection!
        </p>
        <Link
          to="/"
          className="group flex items-center gap-3 bg-red-700 text-white px-10 py-4 rounded-2xl font-bold hover:bg-black transition-all duration-300 shadow-xl shadow-red-200"
        >
          Explore Collection
          <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    );
  }

  return (
    <div className=" min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs">
              Personal Collection
            </span>
            <h1 className="text-5xl font-black text-gray-900 tracking-tighter mt-1">
              MY WISHLIST
            </h1>
            <div className="h-1.5 w-20 bg-red-600 mt-4 rounded-full hidden md:block"></div>
          </div>

          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100">
            <span className="text-gray-400 font-medium">Total Items: </span>
            <span className="text-gray-900 font-black">{wishlist.length}</span>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden group hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 flex flex-col"
            >
              {/* Image Area */}
              <div className="relative h-72 overflow-hidden p-4">
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                  <img
                    src={"image" in product ? product.image : product.images[0]}
                    alt={"title" in product ? product.title : product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Glassmorphism Overlay on hover */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <button
                  onClick={() => {
                    removeFromWishlist(product.id);
                    toast.error("Removed from wishlist");
                  }}
                  className="absolute top-8 right-8 bg-white/80 backdrop-blur-md p-3 rounded-2xl text-gray-400 hover:text-red-600 hover:bg-white transition-all shadow-lg border border-white/50 cursor-pointer"
                  title="Remove from wishlist"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 pt-0 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="font-bold text-gray-800 text-lg line-clamp-1 mb-1 group-hover:text-red-600 transition-colors">
                    {"title" in product ? product.title : product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-xs text-gray-400 line-through font-medium">
                      ${(product.price + 50).toFixed(0)}
                    </span>
                  </div>
                </div>

                <div className="mt-auto flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 flex items-center justify-center gap-3 bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-red-700 transition-all duration-300 active:scale-95 shadow-lg shadow-gray-200 cursor-pointer"
                  >
                    <FiShoppingCart size={19} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
