import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Category {
  id: number;
  name: string;
  image: string;
}
type ApiProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
};

type SaleProduct = {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
};

type Product = ApiProduct | SaleProduct;

type CartItem = Product & {
  quantity: number;
};

type Store = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  removeFromCart: (id: number) => void;
};

export const useMyStore = create<Store>()(
  persist(
    (set) => ({
      cartItems: [],
     addToCart: (product) =>
        set((state) => {
          const existing = state.cartItems.find((item) => item.id === product.id);
          if (existing) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return {
            cartItems: [...state.cartItems, { ...product, quantity: 1 }],
          };
        }),

      increment: (id) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      decrement: (id) =>
        set((state) => ({
          cartItems: state.cartItems
            .map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),

      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter(
            (item) => item.id !== id
          ),
        })),
    }),
    {
      name: "cart", 
    }
  )
);