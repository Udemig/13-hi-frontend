import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./context/productContext.jsx";
import { BasketProvider } from "./context/basketContext.jsx";
import { ToastContainer } from "react-toastify";

// Context Provider ile context yapısını projeye tanıtırız
createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <BasketProvider>
      <App />
      <ToastContainer autoClose={2000} position="bottom-right" />
    </BasketProvider>
  </ProductProvider>
);
