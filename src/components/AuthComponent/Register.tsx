import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiPhone,
   FiAlertCircle, FiArrowRight, FiCheckCircle,
} from "react-icons/fi";



interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
  newsletter: boolean;
}

const strengthRules = [
  { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
  { label: "One uppercase letter",  test: (p: string) => /[A-Z]/.test(p) },
  { label: "One number",            test: (p: string) => /\d/.test(p) },
  { label: "One special character", test: (p: string) => /[^A-Za-z0-9]/.test(p) },
];

const strengthConfig = [
  { label: "Too weak",   color: "bg-red-500",    text: "text-red-500"    },
  { label: "Weak",       color: "bg-orange-500",  text: "text-orange-500" },
  { label: "Fair",       color: "bg-amber-500",   text: "text-amber-500"  },
  { label: "Strong",     color: "bg-green-500",   text: "text-green-500"  },
  { label: "Very strong", color: "bg-emerald-600", text: "text-emerald-600"},
];

function InputField({ label, error, required, children }: any) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-black text-gray-600 uppercase tracking-widest flex items-center gap-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-[11px] font-semibold text-red-500">
          <FiAlertCircle size={11} /> {error.message}
        </p>
      )}
    </div>
  );
}

export default function RegisterPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: { agreeTerms: false, newsletter: true },
    mode: "onBlur" 
  });

  const passwordValue = watch("password", "");

  // Password Strength Calculation
  const score = strengthRules.filter((r) => r.test(passwordValue)).length;
  const cfg = strengthConfig[score] ?? strengthConfig[0];

  const onSubmit =  (data : FormData) => {
    reset()
    console.log("Registered Data:", data);
  };

  const handleNext = async () => {
    const isValid = await trigger(["firstName", "lastName", "email", "phone"]);
    if (isValid) setStep(2);
  };

  const inputBase = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all duration-200 bg-gray-50 placeholder-gray-300 text-gray-900 border-2 ${
      hasError ? "border-red-300 bg-red-50/40 focus:border-red-500" : "border-gray-100 focus:border-red-500 focus:bg-white"
    }`;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-white">
      <div className="w-full max-w-[460px]">
        {isSuccess ? (
          <div className="text-center flex flex-col items-center gap-5">
            <FiCheckCircle size={60} className="text-green-500 animate-bounce" />
            <h2 className="text-3xl font-black">Account Created! 🎉</h2>
            <a href="/login" className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold">Go to Login</a>
          </div>
        ) : (
          <>
            <h1 className="text-4xl font-black mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Create Account</h1>
            
            {/* Step Indicator */}
            <div className="flex items-center gap-3 mb-8">
               <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-red-600 text-white' : 'bg-gray-200'}`}>1</div>
               <div className={`flex-1 h-px ${step === 2 ? 'bg-red-600' : 'bg-gray-200'}`}></div>
               <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? 'bg-red-600 text-white' : 'bg-gray-200'}`}>2</div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-500">
                  <div className="grid grid-cols-2 gap-3">
                    <InputField label="First Name" error={errors.firstName} required>
                      <div className="relative">
                        <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input {...register("firstName", { required: "Required" })} className={`${inputBase(!!errors.firstName)} pl-10`} placeholder="John" />
                      </div>
                    </InputField>
                    <InputField label="Last Name" error={errors.lastName} required>
                      <input {...register("lastName", { required: "Required" })} className={inputBase(!!errors.lastName)} placeholder="Doe" />
                    </InputField>
                  </div>

                  <InputField label="Email" error={errors.email} required>
                    <div className="relative">
                       <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                       <input {...register("email", { 
                         required: "Required", 
                         pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } 
                       })} className={`${inputBase(!!errors.email)} pl-10`} placeholder="you@example.com" />
                    </div>
                  </InputField>

                  <InputField label="Phone (Optional)" error={errors.phone}>
                    <div className="relative">
                       <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                       <input {...register("phone", { pattern: { value: /^[+\d\s\-()]{7,15}$/, message: "Invalid phone" } })} className={`${inputBase(!!errors.phone)} pl-10`} placeholder="+1..." />
                    </div>
                  </InputField>

                  <button type="button" onClick={handleNext} className="w-full bg-red-600 text-white py-4 rounded-xl font-black uppercase flex items-center justify-center gap-2">
                    Continue <FiArrowRight />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in slide-in-from-right duration-500">
                  <InputField label="Password" error={errors.password} required>
                    <div className="relative">
                      <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input 
                        type={showPass ? "text" : "password"} 
                        {...register("password", { required: "Password is required", minLength: { value: 8, message: "Min 8 chars" } })} 
                        className={`${inputBase(!!errors.password)} pl-10 pr-10`} 
                      />
                      <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                        {showPass ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                    {/* Strength Meter */}
                    <div className="mt-2 space-y-2">
                      <div className="flex gap-1">
                        {[0, 1, 2, 3].map((i) => (
                          <div key={i} className={`flex-1 h-1.5 rounded-full transition-all ${i < score ? cfg.color : "bg-gray-200"}`} />
                        ))}
                      </div>
                      <p className={`text-[10px] font-bold ${cfg.text}`}>{cfg.label}</p>
                    </div>
                  </InputField>

                  <InputField label="Confirm Password" error={errors.confirmPassword} required>
                    <div className="relative">
                      <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input 
                        type={showConfirm ? "text" : "password"} 
                        {...register("confirmPassword", { 
                          required: "Please confirm", 
                          validate: (val) => val === passwordValue || "Passwords do not match" 
                        })} 
                        className={`${inputBase(!!errors.confirmPassword)} pl-10`} 
                      />
                    </div>
                  </InputField>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" {...register("agreeTerms", { required: "Terms must be accepted" })} className="mt-1" />
                    <span className="text-xs text-gray-600">I agree to Terms & Privacy Policy</span>
                  </label>
                  {errors.agreeTerms && <p className="text-[10px] text-red-500 font-bold">{errors.agreeTerms.message}</p>}

                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(1)} className="px-6 py-4 border rounded-xl font-bold">Back</button>
                    <button type="submit" disabled={isSubmitting} className="flex-1 bg-red-600 text-white py-4 rounded-xl font-black uppercase disabled:bg-gray-400">
                      {isSubmitting ? "Creating..." : "Create Account"}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}