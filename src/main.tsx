import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <>
   
      <Toaster position="top-right" />
      <App />
   
  </>,
);
