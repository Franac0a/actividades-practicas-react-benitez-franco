import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MultipleCustomHooks } from "./pages/MultipleCustomHooks.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MultipleCustomHooks />
  </StrictMode>
);
