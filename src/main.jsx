import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./home.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimationBg from "./components/bg/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <AnimationBg />
  </StrictMode>
);

AOS.init({ passive: true });
