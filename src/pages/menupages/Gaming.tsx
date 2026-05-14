import { ProductCard } from "../../components/CommonLayout/ProductCardDesign";

const gamingData = [
  {
    id: 1,
    name: "PlayStation 5",
    brand: "Sony",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800",
  },
  {
    id: 2,
    name: "Xbox Series X",
    brand: "Soft-M",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1621259182978-f09e5e2ca1ff?q=80&w=800",
  },
  {
    id: 3,
    name: "Nintendo Switch OLED",
    brand: "Red-Cap",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=800",
  },
  {
    id: 4,
    name: "Steam Deck 512GB",
    brand: "Valve",
    price: 649,
    image:
      "https://images.unsplash.com/photo-1647413444030-9b4f0b2f3d6c?q=80&w=800",
  },
  {
    id: 5,
    name: "RTX 4090 GPU",
    brand: "Neon",
    price: 1599,
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800",
  },
  {
    id: 6,
    name: "Logitech G Pro Mouse",
    brand: "Logi",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1527814050087-379371549a28?q=80&w=800",
  },
];

export function GamingPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-10 border-l-8 border-red-600 pl-6">
          Pro<span className="text-red-600">Gaming</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {gamingData.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
