import { ProductCard } from "../../components/CommonLayout/ProductCardDesign";

const phoneData = [
  {
    id: 1,
    name: "Ultra Pro Max 15",
    brand: "Fruit",
    price: 1099,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800",
  },
  {
    id: 2,
    name: "Galaxy S24 Ultra",
    brand: "Star",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800",
  },
  {
    id: 3,
    name: "Pixel 8 Pro",
    brand: "G-Tech",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800",
  },
  {
    id: 4,
    name: "Nothing Phone 2",
    brand: "Empty",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=800",
  },
  {
    id: 5,
    name: "Xperia 1 V",
    brand: "Sonic",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1521939094609-93aba1af40d7?q=80&w=800",
  },
  {
    id: 6,
    name: "OnePlus 12",
    brand: "NeverSettle",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1519923041107-e4dc8d9193da?q=80&w=800",
  },
];

export function SmartphonesPage() {
  return (
    <div className=" min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-10 border-l-8 border-red-600 pl-6">
          Smart<span className="text-red-600">Phones</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {phoneData.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
