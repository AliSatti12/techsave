import { useForm } from "react-hook-form";
import { useMyStore } from "../Store/Store";
import toast from "react-hot-toast";

type CheckoutInputs = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
};

const CheckoutPage = () => {
  const { cartItems } = useMyStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CheckoutInputs>();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = 15.0;
  const total = subtotal + shipping;

  const onSubmit = (data: CheckoutInputs) => {
    console.log("Order Placed:", { customer: data, items: cartItems, total });
    reset()
    toast.success("Order Placed Successfully!");

  };

  return (
    <div className=" min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col lg:flex-row gap-12"
        >
          <div className="flex-[2] space-y-8">
            <h2 className="text-2xl font-black uppercase tracking-tight">
              Shipping Details
            </h2>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <input
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    placeholder="First Name"
                    className={`w-full p-4 bg-gray-50 border rounded-2xl outline-none transition-all ${errors.firstName ? "border-red-500" : "border-gray-200 focus:ring-2 focus:ring-red-500"}`}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-xs ml-2">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <input
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    placeholder="Last Name"
                    className={`w-full p-4 bg-gray-50 border rounded-2xl outline-none transition-all ${errors.lastName ? "border-red-500" : "border-gray-200 focus:ring-2 focus:ring-red-500"}`}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-xs ml-2">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <input
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Valid email address is required",
                    },
                  })}
                  placeholder="Email Address"
                  className={`w-full p-4 bg-gray-50 border rounded-2xl outline-none transition-all ${errors.email ? "border-red-500" : "border-gray-200 focus:ring-2 focus:ring-red-500"}`}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs ml-2">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <input
                  {...register("address", { required: "Address is required" })}
                  placeholder="Street Address"
                  className={`w-full p-4 bg-gray-50 border rounded-2xl outline-none transition-all ${errors.address ? "border-red-500" : "border-gray-200 focus:ring-2 focus:ring-red-500"}`}
                />
                {errors.address && (
                  <span className="text-red-500 text-xs ml-2">
                    {errors.address.message}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-5">
                <input
                  {...register("city", { required: true })}
                  placeholder="City"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none"
                />
                <input
                  {...register("postalCode", { required: true })}
                  placeholder="Postal Code"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <div className="space-y-1">
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    minLength: { value: 10, message: "" },
                  })}
                  placeholder="Phone Number (03xx-xxxxxxx)"
                  className={`w-full p-4 bg-gray-50 border rounded-2xl outline-none transition-all ${errors.phone ? "border-red-500" : "border-gray-200 focus:ring-2 focus:ring-red-500"}`}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs ml-2">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-5 rounded-3xl font-black text-xl hover:bg-red-600 transition-all shadow-xl active:scale-[0.98] cursor-pointer"
            >
              Confirm Order - ${total.toFixed(2)}
            </button>
          </div>

          <div className="flex-1 lg:sticky lg:top-10 h-fit">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-gray-600 line-clamp-1 flex-1 pr-4">
                      {" "}
                      {"title" in item ? item.title : item.name} x{" "}
                      {item.quantity}
                    </span>
                    <span className="font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                <div className="border-t pt-4 mt-4 space-y-2">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-black">
                    <span>Total</span>
                    <span className="text-red-600">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
