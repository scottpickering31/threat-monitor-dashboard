import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css";
import App from "@/App";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./app/dashboard";
import Alerts from "./app/alerts";
import Devices from "./app/devices";
import Settings from "./app/settings";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
