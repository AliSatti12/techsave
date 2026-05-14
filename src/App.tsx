import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";


import GamingPc from "./components/Header Pages/GamingPc";
import CartPage from "./components/Header Pages/Cart";
import ContactPage from "./components/Header Pages/Contact";
import NotFound from "./components/Not-found";
import LoginPage from "./components/AuthComponent/Login";
import RegisterPage from "./components/AuthComponent/Register";
import ProductDetailsPage from "./components/SingleProduct";
import CheckoutPage from "./components/CheckoutPage";
import WishlistPage from "./components/Header Pages/Wishlist";
import AboutPage from "./components/Header Pages/About";
import TermsAndConditions from "./components/footer/Term&Condition";
import AffiliateProgram from "./components/footer/AffiliateProgram";
import { SmartphonesPage } from "./components/menupages/Smartphones";
import { LaptopsPage } from "./components/menupages/Laptop";
import { CameraPage } from "./components/menupages/Camera";
import { MensFashion } from "./components/menupages/MenFashion";
import { WomensFashion } from "./components/menupages/WomanFashtion";
import { KidsFashion } from "./components/menupages/KidFashion";
import { NewArrivals } from "./components/menupages/NewArrivals";
import { ClearanceSale } from "./components/menupages/ClearanceSale";
import { LivingRoom } from "./components/menupages/LivingRoom";
import { SneakersPage } from "./components/menupages/SneakersPage";

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
          element: <AboutPage/>,
        },
        {
          path: "/product/:id",
          element: <ProductDetailsPage/>,
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
          element: <CheckoutPage/>,
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
