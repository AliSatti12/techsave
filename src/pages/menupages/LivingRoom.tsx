import { ProductCard } from "../../components/CommonLayout/ProductCardDesign";

const livingProducts = [
  {
    id: 1,
    name: "Cloud Modular Sofa",
    brand: "NEST",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800",
  },
  {
    id: 2,
    name: "Marble Coffee Table",
    brand: "LUXE",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800",
  },
  {
    id: 3,
    name: "Walnut Entertainment Center",
    brand: "CORE",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800",
  },
  {
    id: 4,
    name: "Velvet Accent Chair",
    brand: "MODA",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800",
  },
  {
    id: 5,
    name: "Abstract Floor Lamp",
    brand: "GLOW",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800",
  },
  {
    id: 6,
    name: "Geometric Wool Rug",
    brand: "SOFT",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1531835276634-77ce91656773?q=80&w=800",
  },
];

export function LivingRoom() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-10 border-l-8 border-red-600 pl-6 text-gray-900">
          Modern <span className="text-red-600">Living</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {livingProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
