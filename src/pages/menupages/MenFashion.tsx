import { ProductCard } from "../../components/CommonLayout/ProductCardDesign";

const menProducts = [
  {
    id: 1,
    name: "Urban Tech Hoodie",
    brand: "CORE",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800",
  },
  {
    id: 2,
    name: "Vanguard Sneakers",
    brand: "STEP",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
  },
  {
    id: 3,
    name: "Cyberpunk Jacket",
    brand: "NEON",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800",
  },
  {
    id: 4,
    name: "Slim Fit Cargo",
    brand: "DRIFT",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1479064560453-9597150ce488?q=80&w=800",
  },
  {
    id: 5,
    name: "Aviator Sunglasses",
    brand: "LUX",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800",
  },
  {
    id: 6,
    name: "Tactical Backpack",
    brand: "GEAR",
    price: 145,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800",
  },
];

export function MensFashion() {
  return (
    <div className="bg-white min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter leading-none border-r-8 border-red-600 pr-6">
            Men's <span className="text-red-600">Vanguard</span>
          </h2>
          <span className="hidden md:block text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">
            New Season '26
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
