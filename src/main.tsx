import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import AlertsPage from "./features/alerts/pages/AlertsPage";
import DashboardPage from "./features/dashboard/pages/DashboardPage";
import DevicesPage from "./features/devices/pages/DevicesPage";
import SettingsPage from "./features/settings/pages/SettingsPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="alerts" element={<AlertsPage />} />
          <Route path="devices" element={<DevicesPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
