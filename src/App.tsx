import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";

import GamingPc from "./pages/headerpages/GamingPc";
import CartPage from "./pages/headerpages/Cart";
import ContactPage from "./pages/headerpages/Contact";
import NotFound from "./components/Not-found";
import LoginPage from "./pages/authpages/Login";
import RegisterPage from "./pages/authpages/Register";
import ProductDetailsPage from "./components/SingleProduct";
import CheckoutPage from "./components/CheckoutPage";
import WishlistPage from "./pages/headerpages/Wishlist";
import AboutPage from "./pages/headerpages/About";
import TermsAndConditions from "./pages/footer/Term&Condition";
import AffiliateProgram from "./pages/footer/AffiliateProgram";
import { SmartphonesPage } from "./pages/menupages/Smartphones";
import { LaptopsPage } from "./pages/menupages/Laptop";
import { CameraPage } from "./pages/menupages/Camera";
import { MensFashion } from "./pages/menupages/MenFashion";
import { WomensFashion } from "./pages/menupages/WomanFashtion";
import { KidsFashion } from "./pages/menupages/KidFashion";
import { NewArrivals } from "./pages/menupages/NewArrivals";
import { ClearanceSale } from "./pages/menupages/ClearanceSale";
import { LivingRoom } from "./pages/menupages/LivingRoom";
import { SneakersPage } from "./pages/menupages/SneakersPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/product/:id",
          element: <ProductDetailsPage />,
        },
        {
          path: "/electronics/phones",
          element: <SmartphonesPage />,
        },
        {
          path: "/electronics/laptops",
          element: <LaptopsPage />,
        },
        {
          path: "/electronics/cameras",
          element: <CameraPage />,
        },
        {
          path: "/clothes/men",
          element: <MensFashion />,
        },
        {
          path: "clothes/women",
          element: <WomensFashion />,
        },
        {
          path: "clothes/kids",
          element: <KidsFashion />,
        },
        {
          path: "new-arrivals",
          element: <NewArrivals />,
        },
        {
          path: "/furniture/living",
          element: <LivingRoom />,
        },
        {
          path: "/shoes/sneakers",
          element: <SneakersPage />,
        },
        {
          path: "sale",
          element: <ClearanceSale />,
        },
        {
          path: "/checkout",
          element: <CheckoutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/terms-and-conditions",
          element: <TermsAndConditions />,
        },
        {
          path: "/become-an-affiliate",
          element: <AffiliateProgram />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/wishlist",
          element: <WishlistPage />,
        },
        {
          path: "/gaming/pcs",
          element: <GamingPc />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
