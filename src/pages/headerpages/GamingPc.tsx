
import { BiHeart } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  badgeColor?: string;
  category: string;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "ProBook X1 Ultra Laptop",
    brand: "HP",
    price: 899,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 342,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
    badge: "Best Seller",
    badgeColor: "bg-red-600",
    category: "Laptops",
    inStock: true,
  },
  {
    id: 2,
    name: "Apex Gaming PC RTX 4090",
    brand: "Custom Build",
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviews: 187,
    image:
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&q=80",
    badge: "New",
    badgeColor: "bg-indigo-600",
    category: "Gaming PCs",
    inStock: true,
  },
  {
    id: 3,
    name: "SoundMax Pro Headset",
    brand: "Sony",
    price: 249,
    originalPrice: 399,
    rating: 4.6,
    reviews: 521,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    badge: "Sale",
    badgeColor: "bg-orange-500",
    category: "Audio",
    inStock: true,
  },
  {
    id: 4,
    name: "PrinterPro All-in-One",
    brand: "Canon",
    price: 179,
    originalPrice: 249,
    rating: 4.4,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&q=80",
    category: "Printers",
    inStock: false,
  },
  {
    id: 5,
    name: 'UltraWide 34" Monitor',
    brand: "LG",
    price: 549,
    originalPrice: 749,
    rating: 4.7,
    reviews: 264,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80",
    badge: "Hot",
    badgeColor: "bg-red-600",
    category: "Video",
    inStock: true,
  },
  {
    id: 6,
    name: "Mechanical Gaming Keyboard",
    brand: "Corsair",
    price: 129,
    originalPrice: 179,
    rating: 4.5,
    reviews: 432,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&q=80",
    badge: "Popular",
    badgeColor: "bg-teal-600",
    category: "Hardware",
    inStock: true,
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="h-full flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
      {/* IMAGE */}
      <div className="relative h-[220px] bg-gray-50 overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* STOCK BADGE */}
        <span
          className={`absolute top-3 left-3 text-[10px] px-2 py-1 rounded-md font-bold
      ${
        product.inStock
          ? "bg-green-50 text-green-600"
          : "bg-red-50 text-red-600"
      }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>

        {/* WISHLIST */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <BiHeart size={15} className="text-gray-500" />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col flex-1">
        {/* BRAND + CATEGORY */}
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
          {product.brand} • {product.category}
        </p>

        {/* TITLE */}
        <h3 className="text-[14px] font-semibold text-gray-900 line-clamp-2 h-[40px] mt-1">
          {product.name}
        </h3>

        {/* RATING */}
        <div className="flex items-center gap-1 mt-2 text-sm">
          <span>⭐</span>
          <span className="font-medium text-gray-700">{product.rating}</span>
          <span className="text-gray-400 text-xs">({product.reviews})</span>
        </div>

        {/* SPACER */}
        <div className="flex-1" />

        {/* PRICE + BUTTON */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-[16px] font-bold text-gray-900">
              ${product.price}
            </span>

            <span className="text-xs text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          </div>

          <button className="flex items-center gap-1 bg-red-500 hover:bg-blue-600 text-white px-3 py-2 rounded-xl text-[11px] font-semibold transition">
            <CgShoppingCart size={13} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Gaming() {
  return (
    <>
      <div className="min-h-screen ">
        <main className="max-w-screen-xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
