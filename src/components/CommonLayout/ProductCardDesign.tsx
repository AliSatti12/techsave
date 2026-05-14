import toast from "react-hot-toast";
import { FiShoppingCart, FiEye, FiHeart } from "react-icons/fi";
import { useMyStore } from "../../Store/Store";

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

export const ProductCard = ({ product }: { product: any }) => {
  const addtocart = useMyStore((state) => state.addToCart);

  const handleAddToCart = (product: Product) => {
    toast.success("Add to cart successfully");
    console.log(product)
    addtocart(product);
  };

  return (
    <div className="group bg-white rounded-[2rem] border border-gray-100 p-4 hover:shadow-2xl transition-all duration-500">
      <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 space-y-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-600 hover:text-white">
            <FiHeart />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-600 hover:text-white">
            <FiEye />
          </button>
        </div>
      </div>
      <div className="px-2">
        <span className="text-[10px] font-black uppercase text-red-500 tracking-widest">
          {product.brand}
        </span>
        <h3 className="font-bold text-gray-900 truncate mt-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-black text-gray-900">
            ${product.price}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart(product);
            }}
            className="bg-black text-white px-4 py-2 rounded-xl text-xs font-black uppercase flex items-center gap-2 hover:bg-red-600 transition-colors"
          >
            <FiShoppingCart size={14} /> Add
          </button>
        </div>
      </div>
    </div>
  );
};
