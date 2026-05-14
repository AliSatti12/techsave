import { FiTarget, FiDollarSign, FiPieChart, FiArrowRight, FiStar } from "react-icons/fi";

const benefits = [
  { title: "High Commission", desc: "Earn up to 15% on every successful referral.", icon: FiDollarSign },
  { title: "Real-time Tracking", desc: "Monitor your clicks and earnings live.", icon: FiPieChart },
  { title: "Marketing Kits", desc: "Get professional banners and promo materials.", icon: FiTarget },
];

export default function AffiliateProgram() {
  return (
    <section className=" py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Info Side */}
        <div className="space-y-8 ">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full text-xs font-black uppercase tracking-widest">
            <FiStar /> Affiliate Program
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[0.9] uppercase italic tracking-tighter">
            Earn Money <br /> <span className="text-red-600">With Us.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-md font-medium leading-relaxed">
            Join our network of partners and start earning high commissions by promoting the best tech products in the industry.
          </p>

          <div className="grid gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-5 items-start p-4 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0">
                  <b.icon size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg leading-tight">{b.title}</h4>
                  <p className="text-gray-500 text-sm mt-1">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Action Side */}
        <div className="bg-gray-900 rounded-[3rem] p-10 lg:p-14 relative overflow-hidden text-center lg:text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white mb-4 uppercase italic">Ready to Partner?</h3>
            <p className="text-gray-400 mb-10 leading-relaxed font-medium">
              Registration takes less than 2 minutes. Our team will review your application and get you started immediately.
            </p>
            
            <div className="space-y-4">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-2xl font-black uppercase tracking-[0.15em] flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl shadow-red-600/20">
                Apply Now <FiArrowRight size={20} />
              </button>
              <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest font-bold">
                By joining, you agree to our Affiliate Terms.
              </p>
            </div>

            {/* Micro Stats */}
            <div className="mt-12 flex justify-between border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-black text-white">5k+</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Active Partners</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">$2M+</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Paid Out</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">15%</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Max Commission</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}