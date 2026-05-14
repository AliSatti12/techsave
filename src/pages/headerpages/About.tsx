
import {  FiUsers, FiAward, FiZap, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const stats = [
    { label: 'Happy Customers', value: '50K+' },
    { label: 'Products Sold', value: '120K+' },
    { label: 'Expert Support', value: '24/7' },
    { label: 'Global Reach', value: '15+' },
  ];

  const values = [
    {
      icon: <FiZap className="text-red-600" size={30} />,
      title: "Cutting-Edge Tech",
      desc: "We bring the latest and most advanced technology to the market, ensuring you stay ahead of the curve."
    },
    {
      icon: <FiUsers className="text-red-600" size={30} />,
      title: "Customer Centric",
      desc: "Your experience is our top priority. We don't just deliver products; we deliver absolute satisfaction."
    },
    {
      icon: <FiAward className="text-red-600" size={30} />,
      title: "Quality Assured",
      desc: "Every product undergoes rigorous quality checks to ensure you receive nothing but the best performance."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-red-600 font-black uppercase tracking-[0.4em] text-sm mb-4 block">
              Our Vision
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-none uppercase italic">
              REDEFINING THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">FUTURE OF TECH</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-medium">
              TECHSAVE was born from a single mission: to make premium technology accessible to everyone. We don’t just sell gadgets; we share innovation.
            </p>
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  alt="Our Tech Hub" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-red-700 p-10 rounded-[2rem] hidden md:block shadow-xl">
                <p className="text-white font-black text-4xl italic uppercase">EST. 2024</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight italic">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                The tech world is evolving at lightning speed. TECHSAVE was established to ensure that tech enthusiasts receive international standard products and premium services under one roof.
              </p>
              <div className="space-y-4">
                {['Direct Sourcing from Global Brands', 'Transparent & Ethical Pricing', 'Instant Expert Technical Support'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <FiCheckCircle className="text-red-600 transition-transform group-hover:scale-125" />
                    <span className="font-bold text-gray-800 uppercase text-sm tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-red-200 hover:shadow-2xl hover:shadow-red-100 transition-all duration-500 group">
                <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {v.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase italic tracking-tighter">{v.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-20 mb-20 rounded-[3rem] mx-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter">{s.value}</p>
                <p className="text-red-500 font-bold uppercase tracking-[0.3em] text-[10px]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 uppercase italic tracking-tighter leading-tight">
          Ready to Upgrade Your <span className="text-red-600">Digital Lifestyle?</span>
        </h2>
        <Link 
          to="/" 
          className="inline-flex items-center gap-4 bg-red-700 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-2xl shadow-red-200 active:scale-95 uppercase tracking-widest"
        >
          Explore Collection
          <FiZap />
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;