
const ProductCardSkeleton = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
   
      <div className="relative h-64 bg-gray-200 animate-pulse">
    
        <div className="absolute top-3 left-3 bg-gray-300 h-6 w-20 rounded-full" />
      </div>

      <div className="p-5 flex flex-col h-56">
        <div className="flex justify-between items-start mb-4 gap-2">
       
          <div className="h-6 bg-gray-200 rounded-lg w-3/4 animate-pulse" />
         
          <div className="h-7 bg-gray-200 rounded-lg w-1/4 animate-pulse" />
        </div>

    
        <div className="space-y-2 flex-grow">
          <div className="h-3 bg-gray-200 rounded animate-pulse w-full" />
          <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6" />
          <div className="h-3 bg-gray-200 rounded animate-pulse w-4/6" />
        </div>

     
        <div className="flex gap-3 mt-4">
          <div className="flex-1 h-10 bg-gray-200 rounded-xl animate-pulse" />
          <div className="w-10 h-10 bg-gray-200 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;