import { ProductCard } from "../../components/CommonLayout/ProductCardDesign";

const laptopData = [
  {
    id: 1,
    name: "MacBook Air M3",
    brand: "Fruit",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800",
  },
  {
    id: 2,
    name: "ROG Zephyrus G14",
    brand: "Asgard",
    price: 1599,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800",
  },
  {
    id: 3,
    name: "Dell XPS 13",
    brand: "Horizon",
    price: 1399,
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=800",
  },
  {
    id: 4,
    name: "Razer Blade 16",
    brand: "Snake",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800",
  },
  {
    id: 5,
    name: "Surface Laptop 5",
    brand: "Soft-M",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800",
  },
  {
    id: 6,
    name: "ThinkPad X1 Carbon",
    brand: "Business",
    price: 1699,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800",
  },
];

export function LaptopsPage() {
  return (
    <div className=" min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-10 border-l-8 border-red-600 pl-6">
          Work<span className="text-red-600">Stations</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {laptopData.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
