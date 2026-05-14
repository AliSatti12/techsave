import { useState } from "react";
import { useForm } from "react-hook-form";
import { 
  FiPhone, FiMail, FiMapPin, FiSend, FiUser, 
  FiMessageSquare, FiChevronDown, FiCheck, 
  FiAlertCircle, FiShield, FiRefreshCw 
} from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const subjects = ["Order Inquiry", "Product Support", "Returns & Refunds", "Technical Issue", "Other"];
const stats = [
  { icon: FiPhone, value: "24/7", label: "Support Available" },
  { icon: FiRefreshCw, value: "< 2hr", label: "Avg Response Time" },
  { icon: FiShield, value: "100%", label: "Satisfaction Rate" },
];

export default function ContactPage() {
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success">("idle");
  const [subjectOpen, setSubjectOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { subject: "" }
  });

  const selectedSubject = watch("subject");

  const onSubmit = async (data: FormData) => {
    setSubmitState("loading");
    console.log("Form Data:", data);
    await new Promise((r) => setTimeout(r, 1800)); // API Simulation
    setSubmitState("success");
  };

  const handleReset = () => {
    reset();
    setSubmitState("idle");
  };

  // Helper for cleaner classes
  const inputClass = (fieldName: keyof FormData) => `
    w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all duration-200 bg-gray-50
    ${errors[fieldName] ? "border-red-300 focus:border-red-500 bg-red-50/30" : "border-gray-200 focus:border-red-500 focus:bg-white"}
  `;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gray-900 relative overflow-hidden py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-transparent to-gray-900/80" />
        <div className="relative z-10">
          <h1 className="text-6xl font-black text-white mb-4 uppercase tracking-tighter">
            Get In <span className="text-red-500">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">Questions or support? We are ready to respond within 24 hours.</p>
          
          <div className="flex justify-center gap-10 mt-10">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center gap-2 justify-center">
                   <s.icon className="text-red-500" />
                   <span className="text-2xl font-black text-white tracking-tighter">{s.value}</span>
                </div>
                <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Panel: Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-900 p-8 rounded-[2.5rem] relative overflow-hidden">
            <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
              Let's Start a <br /><span className="text-red-500">Conversation</span>
            </h2>
            <div className="space-y-5 relative z-10">
              {[
                { icon: FiPhone, val: "030715667625" },
                { icon: FiMail, val: "rajaalisatti999@gmail.com" },
                { icon: FiMapPin, val: "123 Tech Avenue, CA" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <item.icon className="text-white" size={18} />
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden h-full">
            <div className="bg-red-600 px-8 py-6">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Send Message</h3>
            </div>

            <div className="p-8">
              {submitState === "success" ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiCheck size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Success!</h3>
                  <p className="text-gray-500 mb-8">We'll get back to you within 24 hours.</p>
                  <button onClick={handleReset} className="text-red-600 font-bold flex items-center gap-2 mx-auto border-b-2 border-red-100 hover:border-red-600 transition-all">
                    <FiRefreshCw /> Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 px-1">Full Name</label>
                      <input 
                        {...register("name", { required: "Name is required", minLength: { value: 3, message: "Too short" } })}
                        placeholder="John Doe" className={inputClass("name")} 
                      />
                      {errors.name && <p className="text-red-500 text-[10px] font-bold px-1 uppercase italic">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 px-1">Email</label>
                      <input 
                        {...register("email", { 
                          required: "Email is required", 
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } 
                        })}
                        placeholder="john@example.com" className={inputClass("email")} 
                      />
                      {errors.email && <p className="text-red-500 text-[10px] font-bold px-1 uppercase italic">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Subject Custom Dropdown logic with RHF */}
                  <div className="relative space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 px-1">Subject</label>
                    <button
                      type="button"
                      onClick={() => setSubjectOpen(!subjectOpen)}
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium flex justify-between items-center bg-gray-50 ${errors.subject ? 'border-red-500' : 'border-gray-200'}`}
                    >
                      <span className={selectedSubject ? "text-gray-900" : "text-gray-400"}>
                        {selectedSubject || "Select an option"}
                      </span>
                      <FiChevronDown className={`transition-transform ${subjectOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {subjectOpen && (
                      <div className="absolute z-50 top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                        {subjects.map(s => (
                          <div 
                            key={s} 
                            onClick={() => { setValue("subject", s, { shouldValidate: true }); setSubjectOpen(false); }}
                            className="px-5 py-3 text-sm hover:bg-red-50 cursor-pointer transition-colors font-medium border-b border-gray-50 last:border-0"
                          >
                            {s}
                          </div>
                        ))}
                      </div>
                    )}
                    <input type="hidden" {...register("subject", { required: "Please select a subject" })} />
                    {errors.subject && <p className="text-red-500 text-[10px] font-bold px-1 uppercase italic">{errors.subject.message}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 px-1">Message</label>
                    <textarea 
                      {...register("message", { required: "Message is required", minLength: { value: 10, message: "Tell us a bit more" } })}
                      rows={4} placeholder="Your message here..." className={`${inputClass("message")} resize-none`} 
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-[10px] font-bold px-1 uppercase italic">{errors.message.message}</p>}
                  </div>

                  <button
                    disabled={submitState === "loading"}
                    className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-red-600 transition-all flex items-center justify-center gap-3 disabled:bg-gray-400"
                  >
                    {submitState === "loading" ? "Sending..." : <>Send Message <FiSend /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}