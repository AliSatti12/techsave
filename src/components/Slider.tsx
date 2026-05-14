import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    title: "Premium Clothing",
    subtitle: "Up to 50% Off",
    description: "Discover the latest trends in summer fashion with our exclusive collection.",
    buttonText: "Shop Clothes",
    color: "from-blue-900/80"
  },
  {
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    title: "Modern Furniture",
    subtitle: "New Arrivals",
    description: "Elevate your living space with our handcrafted minimalist furniture pieces.",
    buttonText: "View Furniture",
    color: "from-amber-900/80"
  },
  {
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1200&auto=format&fit=crop",
    title: "Next-Gen Electronics",
    subtitle: "Tech Gadgets",
    description: "Stay ahead of the curve with our latest smartphones and high-tech accessories.",
    buttonText: "Explore Tech",
    color: "from-gray-900/80"
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    title: "Exclusive Footwear",
    subtitle: "Limited Edition",
    description: "Step out in style with our premium range of sneakers and formal shoes.",
    buttonText: "Buy Shoes",
    color: "from-red-900/80"
  },
];

const Slider = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6 px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade" // Smooth transition ke liye
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="rounded-3xl overflow-hidden shadow-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[450px] md:h-[550px] w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay for better text readability */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} to-transparent flex flex-col justify-center p-8 md:p-16`}>
                <span className="text-indigo-400 font-bold tracking-widest uppercase mb-2 text-sm md:text-base">
                  {slide.subtitle}
                </span>
                
                <h2 className="text-white text-4xl md:text-6xl font-black mb-4 leading-tight">
                  {slide.title}
                </h2>

                <p className="text-gray-200 text-base md:text-lg max-w-md mb-8 line-clamp-2 md:line-clamp-none">
                  {slide.description}
                </p>

                <button className="w-fit bg-white text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;