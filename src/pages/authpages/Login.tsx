import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FiEye,
  FiEyeOff,
  FiLogIn,
  FiArrowRight,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: FormData) => {
    reset()
    console.log(data);
    
  };

  // Helper for dynamic classes
  const inputBase = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all duration-200 bg-gray-50 placeholder-gray-300 text-gray-900 border-2 ${
      hasError
        ? "border-red-300 focus:border-red-500 bg-red-50/50"
        : "border-gray-100 focus:border-red-500 focus:bg-white"
    }`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-[420px]">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1
            className="text-4xl font-black text-gray-900"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Welcome Back
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Don't have an account?{" "}
            <a href="#" className="text-red-600 font-bold hover:underline">
              Sign up free
            </a>
          </p>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-2.5 mb-6">
          <button
            type="button"
            className="flex-1 flex items-center justify-center py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
          >
            <FaGoogle />
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
          >
            <FaFacebookF />
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
          >
            <FaApple />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Email Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-black text-gray-600 uppercase tracking-widest">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="you@example.com"
                className={inputBase(!!errors.email)}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-[11px] text-red-500 font-bold flex items-center gap-1">
                <FiAlertCircle /> {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-black text-gray-600 uppercase tracking-widest">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={inputBase(!!errors.password)}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Min 6 characters required" },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-[11px] text-red-500 font-bold flex items-center gap-1">
                <FiAlertCircle /> {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  {...register("rememberMe")}
                />
                {/* Custom Checkbox UI */}
                <div
                  className={`w-[18px] h-[18px] rounded border-2 flex items-center justify-center transition-all 
                  ${errors.rememberMe ? "border-red-300" : "border-gray-300 group-hover:border-red-400"}`}
                >
                  {/* Yahan hum state watch bhi kar sakte hain but CSS selector :checked bhi work karta hai */}
                  <div className="w-full h-full bg-red-600 hidden items-center justify-center rounded-[2px] transition-all">
                    <FiCheck
                      className="text-white text-[10px]"
                      strokeWidth={4}
                    />
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-gray-600">
                Remember me
              </span>
            </label>
            <a
              href="#"
              className="text-xs font-bold text-red-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-black uppercase bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30 transition-all active:scale-95"
          >
            <FiLogIn /> Sign In <FiArrowRight />
          </button>
        </form>
      </div>

      {/* Basic CSS for Checkbox Toggle without extra state */}
      <style>{`
        input:checked + div > div { display: flex; }
        input:checked + div { border-color: #dc2626; background: #dc2626; }
      `}</style>
    </div>
  );
}
