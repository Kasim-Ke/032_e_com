import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./components/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter basename="/032_e_com/">
        <App />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
);
