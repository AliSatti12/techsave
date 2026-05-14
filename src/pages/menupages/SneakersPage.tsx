import { ProductCard } from "../../components/CommonLayout/ProductCardDesign";

const sneakerProducts = [
  {
    id: 1,
    name: "Air Max Pulse",
    brand: "DRIFT",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
  },
  {
    id: 2,
    name: "Street Runner V2",
    brand: "PACE",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800",
  },
  {
    id: 3,
    name: "Cyber-Tech HighTops",
    brand: "NEON",
    price: 210,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800",
  },
  {
    id: 4,
    name: "Cloudfoam Walker",
    brand: "SOFT",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800",
  },
  {
    id: 5,
    name: "Retro Court Low",
    brand: "VIBE",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800",
  },
  {
    id: 6,
    name: "Pro-Bball Elite",
    brand: "SLAM",
    price: 185,
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800",
  },
];

export function SneakersPage() {
  return (
    <div className=" min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-10 border-l-8 border-red-600 pl-6">
          Velocity <span className="text-red-600">Sneakers</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sneakerProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
