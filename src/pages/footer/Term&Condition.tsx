import { FiFileText, FiShield, FiLock, FiCheckCircle } from "react-icons/fi";

const sections = [
  {
    title: "1. Acceptance of Terms",
    icon: FiCheckCircle,
    content: "By accessing and using TechSave's services, you agree to be bound by these terms. If you do not agree, please refrain from using our platform.",
  },
  {
    title: "2. User Obligations",
    icon: FiShield,
    content: "Users must provide accurate information and are responsible for maintaining the confidentiality of their accounts. Any unauthorized activity must be reported immediately.",
  },
  {
    title: "3. Privacy Policy",
    icon: FiLock,
    content: "Your privacy is paramount. We collect only necessary data to improve your experience. Please review our full Privacy Policy for detailed data handling practices.",
  },
];

export default function TermsAndConditions() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-8">
          <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600">
            <FiFileText size={28} />
          </div>
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight uppercase italic">Terms & <span className="text-red-600">Conditions</span></h1>
            <p className="text-gray-500 text-sm font-medium">Last updated: May 2026</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <div key={index} className="group relative pl-16">
              <div className="absolute left-0 top-0 w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <section.icon size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
          <p className="text-xs text-gray-500 leading-relaxed text-center italic">
            Questions about our terms? Please contact our legal team at <span className="text-red-600 font-bold underline">legal@techsave.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}