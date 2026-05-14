import { ProductCard } from "../../components/CommonLayout/ProductCardDesign";

const womenProducts = [
  {
    id: 1,
    name: "Silk Evening Gown",
    brand: "ELITE",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e81839217?q=80&w=800",
  },
  {
    id: 2,
    name: "Minimalist Blazer",
    brand: "BOSS",
    price: 210,
    image:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=800",
  },
  {
    id: 3,
    name: "Leather Crossbody",
    brand: "MODE",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800",
  },
  {
    id: 4,
    name: "Gold Aura Necklace",
    brand: "AURA",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800",
  },
  {
    id: 5,
    name: "Velvet Party Dress",
    brand: "CHIC",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
  },
  {
    id: 6,
    name: "Designer Heels",
    brand: "STEP",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800",
  },
];

export function WomensFashion() {
  return (
    <div className=" min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter leading-none border-r-8 border-red-600 pr-6 text-gray-900">
            Couture <span className="text-red-600">Women</span>
          </h2>
          <span className="hidden md:block text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">
            Designer Edit
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {womenProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
