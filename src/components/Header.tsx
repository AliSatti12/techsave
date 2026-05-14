import { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiLogIn,
  FiPhone,
  FiMenu,
  FiX,
  FiChevronDown,
  FiHeart,
} from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useMyStore } from "../Store/Store";
import { useWishlist } from "../Store/Whislist";

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavLink {
  label: string;
  href: string;
}

interface Category {
  label: string;
  href: string;
  submenu?: NavLink[];
}

const topLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const categories: Category[] = [
  {
    label: "Clothes",
    href: "/clothes",
    submenu: [
      { label: "Men's Fashion", href: "/clothes/men" },
      { label: "Women's Dresses", href: "/clothes/women" },
      { label: "Baby & Kids", href: "/clothes/kids" },
    ],
  },
  {
    label: "Electronics",
    href: "/electronics",
    submenu: [
      { label: "Smartphones", href: "/electronics/phones" },
      { label: "Laptops", href: "/electronics/laptops" },
      { label: "Cameras", href: "/electronics/cameras" },
    ],
  },
  {
    label: "Furniture",
    href: "/furniture",
    submenu: [
      { label: "Living Room", href: "/furniture/living" },
      { label: "Bedroom", href: "/furniture/bedroom" },
      { label: "Office", href: "/furniture/office" },
    ],
  },
  {
    label: "Shoes",
    href: "/shoes",
    submenu: [
      { label: "Sneakers", href: "/shoes/sneakers" },
      { label: "Formal", href: "/shoes/formal" },
      { label: "Casual", href: "/shoes/casual" },
    ],
  },
  { label: "Miscellaneous", href: "/miscellaneous" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Clearance Sale", href: "/sale" },
];

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const cart = useMyStore((state) => state.cartItems);
  const wishlist = useWishlist((state) => state.wishlist);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) alert(`Searching: "${searchQuery}"`);
  };

  const toggleMobileCategory = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <header className="w-full font-sans shadow-md">
        <div className="bg-red-700 text-white">
          <div className="max-w-screen  mx-auto flex items-center justify-between py-1  ">
            <nav className="hidden md:flex">
              {topLinks.map((link, i) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={`
                  text-[11px] font-bold tracking-widest uppercase px-4 py-2.5
                  hover:bg-black/20 transition-colors duration-150
                  ${i === 0 ? "border-l border-white/20" : ""}
                  border-r border-white/20
                `}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <button
              className="md:hidden p-3 hover:bg-black/20 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

            <div className="flex items-center">
              <Link
                to="/register"
                className="hidden sm:flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase px-4 py-2.5 border-l border-white/20 hover:bg-black/20 transition-colors"
              >
                <FiUser size={13} />
                My Account
              </Link>
              <Link
                to="/login"
                className="hidden sm:flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase px-4 py-2.5 border-l border-white/20 hover:bg-black/20 transition-colors"
              >
                <FiLogIn size={13} />
                Log In
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto flex items-center gap-4 px-4 py-3 lg:py-4">
            <Link
              to="/"
              className="flex-shrink-0 text-red-700 font-black text-3xl lg:text-4xl tracking-tight leading-none select-none"
              style={{ fontFamily: "'Arial Black', 'Arial', sans-serif" }}
            >
              TECHSAVE
            </Link>

            <form
              onSubmit={handleSearch}
              className="flex-1 flex items-center border-2 border-gray-200 rounded overflow-hidden focus-within:border-red-700 transition-colors duration-200"
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2.5 text-sm text-gray-700 outline-none bg-transparent placeholder-gray-400"
                aria-label="Search"
              />
              <button
                type="submit"
                className="bg-red-700 hover:bg-red-800 transition-colors px-5 py-2.5 text-white flex items-center justify-center"
                aria-label="Search"
              >
                <FiSearch size={17} strokeWidth={2.5} />
              </button>
            </form>

            {/* Right Icons Area */}
            <div className="flex items-center gap-3 md:gap-5 flex-shrink-0">
              {/* Wishlist Icon */}
              <Link
                to="/wishlist"
                className="relative p-2 text-gray-600 hover:text-red-700 transition-colors group"
                aria-label="Wishlist"
              >
                <FiHeart
                  size={22}
                  className="group-hover:fill-current transition-all"
                />
                
                 {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 right-1 bg-white text-red-700 text-[11px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

             
              <Link
                to="/cart"
                className="relative p-2 text-gray-600 hover:text-red-700 transition-colors "
              >
                {cart.length > 0 && (
                  <span className="absolute -top-0.5 right-1 bg-white text-red-700 text-[11px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}

                <FiShoppingCart size={22} />
              </Link>

              {/* Phone Number - Only on Desktop */}
              <div className="hidden lg:flex flex-col items-end border-l pl-4 border-gray-100">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider leading-none mb-1">
                  Questions? Call Us
                </span>
                <div className="flex items-center gap-1.5">
                  <FiPhone size={12} className="text-red-700" />
                  <span className="text-sm font-black text-gray-800 tracking-wide">
                    03071567625
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden bg-gray-900 text-white overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex border-b border-gray-700 ">
            <Link
              to="/account"
              className="flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold tracking-wider text-gray-300 hover:bg-gray-800 border-r border-gray-700 transition-colors"
            >
              <FiUser size={14} /> My Account
            </Link>
            <Link
              to="/login"
              className="flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold tracking-wider text-gray-300 hover:bg-gray-800 transition-colors "
            >
              <FiLogIn size={14} /> Log In
            </Link>
          </div>

          {topLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-5 py-3 text-sm font-semibold tracking-wide text-gray-300 hover:bg-gray-800 hover:text-white border-b border-gray-700/50 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t border-gray-600 mt-1">
            <p className="px-5 py-2 text-[10px] font-black tracking-widest text-red-400 uppercase">
              Categories
            </p>
            {categories.map((cat) => {
              console.log(cat)
              return (
              (
              <div key={cat.label}>
                <div className="flex items-center justify-between border-b border-gray-700/50">
                  <Link
                    to={cat.href}
                    onClick={() => !cat.submenu && setMobileOpen(false)}
                    className="flex-1 px-5 py-3 text-sm font-bold tracking-wide text-gray-200 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    {cat.label}
                  </Link>
                  {cat.submenu && (
                    <button
                      onClick={() => toggleMobileCategory(cat.label)}
                      className="px-4 py-3 text-gray-400 hover:text-white transition-colors"
                      aria-label={`Expand ${cat.label}`}
                    >
                      <FiChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${
                          mobileExpanded === cat.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {cat.submenu && mobileExpanded === cat.label && (
                  <div className="bg-gray-800/50">
                    {cat.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="block pl-10 pr-5 py-2.5 text-xs font-semibold text-gray-400 hover:text-red-400 border-b border-gray-700/30 transition-colors"
                      >
                        → {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
            )})}
          </div>
        </div>
      </header>

      <nav className="bg-white border-b-4 border-red-700  hidden md:block sticky top-0 z-50  ">
        <div className=" flex items-center md:flex-wrap">
          {categories.map((cat) => {
            return (
              <div
                key={cat.label}
                className="relative flex-shrink-0"
                onMouseEnter={() => cat.submenu && setActiveSubmenu(cat.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  to={''}
                  className="flex items-center gap-1 px-5 h-11 text-[12px] font-black tracking-widest uppercase text-gray-800 hover:text-red-700 hover:bg-red-50 border-r border-gray-100 transition-colors duration-150 whitespace-nowrap"
                >
                  {cat.label}
                  {cat.submenu && (
                    <FiChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        activeSubmenu === cat.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {cat.submenu && activeSubmenu === cat.label && (
                  <div className="absolute top-full left-0 z-50 bg-white border border-gray-200 shadow-xl rounded-b-md min-w-[190px] py-1">
                    {cat.submenu.map((sub) => (
                      <Link
                      onClick={() => setActiveSubmenu(null)}
                        key={sub.label}
                        to={sub.href}
                        className="block px-4 py-2.5 text-[12px] font-semibold tracking-wide text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors"
                      >
                        
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};
