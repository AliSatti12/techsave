import { ProductCard } from "../../components/CommonLayout/ProductCardDesign";

const kidsProducts = [
  {
    id: 1,
    name: "Dino Cotton Onesie",
    brand: "TINY",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1519704943960-da9750f07443?q=80&w=800",
  },
  {
    id: 2,
    name: "Mini Puffer Jacket",
    brand: "WARM",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800",
  },
  {
    id: 3,
    name: "Canvas Play Shoes",
    brand: "JUMP",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800",
  },
  {
    id: 4,
    name: "Cartoon Hoodie Set",
    brand: "PLAY",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800",
  },
  {
    id: 5,
    name: "Knitted Beanie",
    brand: "SOFT",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1520111162335-949436152a55?q=80&w=800",
  },
  {
    id: 6,
    name: "Denim Kids Overalls",
    brand: "STURDY",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=800",
  },
];

export function KidsFashion() {
  return (
    <div className=" min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter leading-none border-r-8 border-red-600 pr-6">
            Mini <span className="text-red-600">Legends</span>
          </h2>
          <span className="hidden md:block text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">
            Comfort First
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {kidsProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
