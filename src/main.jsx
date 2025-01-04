import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PrimeContextProvider from "./contexts/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeContextProvider>
      <App />
    </PrimeContextProvider>
  </StrictMode>
);
