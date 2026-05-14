import { ProductCard } from "../CommonLayout/ProductCardDesign";

const newArrivalsData = [
  { id: 1, name: "Drone X Pro", brand: "SKY", price: 899, image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800" },
  { id: 2, name: "E-Sport Gaming Desk", brand: "RAID", price: 550, image: "https://images.unsplash.com/photo-1598550476439-6847785fce6e?q=80&w=800" },
  { id: 3, name: "Urban Tech Parka", brand: "CORE", price: 299, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800" },
  { id: 4, name: "Smart Ring V1", brand: "BIO", price: 199, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800" },
  { id: 5, name: "Foldable OLED Tablet", brand: "SOFT", price: 1299, image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?q=80&w=800" },
  { id: 6, name: "Acoustic Noise Buds", brand: "SOUND", price: 150, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800" },
];

export function NewArrivals() {
  return (
    <div className=" min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
           <h2 className="text-6xl font-black italic uppercase tracking-tighter text-gray-900">
             The <span className="text-red-600 italic underline">Latest</span> Drop
           </h2>
           <div className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold animate-pulse">
             NEW IN STOCK
           </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newArrivalsData.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}