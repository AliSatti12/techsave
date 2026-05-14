import { ProductCard } from "../CommonLayout/ProductCardDesign";

const cameraData = [
  {
    id: 1,
    name: "Sony A7 IV",
    brand: "Sonic",
    price: 2499,
    image:
     [ "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800"],
  },
  {
    id: 2,
    name: "Canon EOS R5",
    brand: "Optic",
    price: 3899,
    image:
      ["https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=800"],
  },
  {
    id: 3,
    name: "Fujifilm X-T5",
    brand: "Retro",
    price: 1699,
    image:
      ["https://images.unsplash.com/photo-1520390159345-14645c8f58ba?q=80&w=800"],
  },
  {
    id: 4,
    name: "DJI Mavic 3 Pro",
    brand: "Sky-Tech",
    price: 2199,
    image:
     [ "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800"],
  },
  {
    id: 5,
    name: "GoPro Hero 12",
    brand: "Action",
    price: 399,
    image:
     [ "https://images.unsplash.com/photo-1524338198850-8a2ff63a4783?q=80&w=800"],
  },
  {
    id: 6,
    name: "Nikon Z9",
    brand: "Nikkor",
    price: 5499,
    image:
     [ "https://images.unsplash.com/photo-1616423641454-ec0609339e80?q=80&w=800"],
  },
];

export function CameraPage() {
  return (
    <div className=" min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-10 border-l-8 border-red-600 pl-6">
          Work<span className="text-red-600">Stations</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cameraData.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
