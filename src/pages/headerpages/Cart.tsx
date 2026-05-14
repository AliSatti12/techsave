import { Link } from "react-router-dom";
import { useMyStore } from "../../Store/Store";

const CartPage = () => {
  const { cartItems, increment, decrement, removeFromCart } = useMyStore();

  console.log(cartItems);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = cartItems.length > 0 ? 15 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-6">
        <div className="bg-gray-100 p-8 rounded-full animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 11V7a4 4 0 11-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">
          Your Cart is Empty!
        </h2>
        <Link
          to="/"
          className="bg-red-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className=" min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-black text-gray-900 mb-1 uppercase tracking-tighter">
          Shopping Cart ({cartItems.length})
        </h1>
        <div className="h-1.5 w-20 bg-red-600 mb-4 rounded-full hidden md:block"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6 group transition-all hover:shadow-md"
              >
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={"images" in item ? item.images[0] : item.image}
                    alt={"title" in item ? item.title : item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">
                    {"category" in item ? item.category.name : item.brand}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                    {"title" in item ? item.title : item.name}
                  </h3>
                  <p className="text-xl font-black text-gray-900">
                    ${item.price}
                  </p>
                </div>

                {/* Quantity Controller - Using Store Actions */}
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                  <button
                    onClick={() => decrement(item.id)}
                    className="px-3 py-1 hover:bg-red-500 hover:text-white transition-colors font-bold cursor-pointer"
                  >
                    −
                  </button>
                  <span className="px-4 py-1 font-bold text-gray-900 min-w-[40px] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increment(item.id)}
                    className="px-3 py-1 hover:bg-red-500 hover:text-white transition-colors font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-3 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 sticky top-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-bold text-gray-900">
                    ${shipping.toFixed(2)}
                  </span>
                </div>
                <div className="h-px bg-gray-100 my-4"></div>
                <div className="flex justify-between text-xl font-black text-gray-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-red-500 text-white py-4 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-lg shadow-red-100 active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
              >
                Checkout Now
              </Link>

              <Link
                to="/"
                className="block text-center mt-4 text-sm font-medium text-gray-500 hover:text-red-500 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
