import { ProductCard } from "../CommonLayout/ProductCardDesign";

const saleData = [
  { id: 1, name: "2025 Smart Watch", brand: "TECH", price: 45, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800" },
  { id: 2, name: "Vintage Camera", brand: "RETRO", price: 89, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800" },
  { id: 3, name: "Slim Fit Chinos", brand: "MODE", price: 25, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=800" },
  { id: 4, name: "Basic White Tee", brand: "ESSNTL", price: 12, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800" },
  { id: 5, name: "Traveler Backpack", brand: "GEAR", price: 40, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800" },
  { id: 6, name: "Metal Water Bottle", brand: "HYDRO", price: 15, image: "https://images.unsplash.com/photo-1602143393494-144933902341?q=80&w=800" },
];

export function ClearanceSale() {
  return (
    <div className="bg-red-600 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-7xl font-black italic uppercase tracking-tighter text-white mb-4">
             LAST CHANCE <span className="text-black">SALE</span>
           </h2>
           <p className="text-red-100 font-bold tracking-widest uppercase">Up to 70% Off — Everything must go!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {saleData.map(p => (
            <div key={p.id} className="relative group bg-white rounded-[2rem] p-4 shadow-xl">
               <div className="absolute top-6 left-6 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black italic">
                 OUTLET PRICE
               </div>
               <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}