import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Import our custom CSS
import "./styles.scss";

// Import all of Bootstrap’s JS
import "bootstrap";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
