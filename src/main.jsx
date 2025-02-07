import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PrimeContextProvider from "./contexts/Context.jsx";

createRoot(document.getElementById("root")).render(
    <PrimeContextProvider>
      <App />
    </PrimeContextProvider>
);
