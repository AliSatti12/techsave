import axios from "axios";
import { useEffect, useState } from "react";

// Aapka grid layout wala skeleton
export const CategoryGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-pulse">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="relative rounded-2xl overflow-hidden h-32 bg-gray-200">
          {/* Bottom text bar inside skeleton */}
          <div className="absolute bottom-3 left-3 h-4 bg-gray-300 rounded w-20"></div>
        </div>
      ))}
    </div>
  );
};

export default function Category() {
  interface Category {
    name: string;
    image: string;
  }

  const [category, setCategory] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      
        setCategory(res.data.slice(0, 8)); 
      } catch (error) {
        console.error("Categories", error);
      } finally {
        setLoading(false); 
      }
    })();
  }, []);

  return (
    <div className="w-11/12 mx-auto py-8 mt-10 mb-10">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12 border-b pb-4 border-gray-100">
        <h2 className="text-xs md:text-xl font-black tracking-[0.2em] uppercase text-gray-900">
          Shop By Category
        </h2>
        <div className="w-12 md:w-24 h-1 bg-red-600 mx-auto mt-2 md:mt-3" />
      </div>

     
      {loading ? (
        <CategoryGridSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {category?.map((cat, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 h-32"
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                onError={(e) => {
                  // Agar image link kharab ho toh fallback
                  (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=Category";
                }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

              {/* Text */}
              <div className="absolute inset-0 flex items-end p-3">
                <p className="text-white font-semibold text-sm uppercase tracking-wider">{cat.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}