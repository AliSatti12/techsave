import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
}

interface StoreState { 
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
}

export const useWishlist = create<StoreState>()(
  persist(
    (set) => ({
      wishlist: [],

      addToWishlist: (product) => set((state) => {
        const exists = state.wishlist.find((item) => item.id === product.id);
        if (exists) {
        
          return { wishlist: state.wishlist.filter((item) => item.id !== product.id) };
        }
        return { wishlist: [...state.wishlist, product] };
      }),

      removeFromWishlist: (id) => set((state) => ({
        wishlist: state.wishlist.filter((item) => item.id !== id)
      })),

      clearWishlist: () => set({ wishlist: [] }),
    }),
    { name: 'user-wishlist' } 
  )
);