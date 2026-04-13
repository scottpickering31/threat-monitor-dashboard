import {
  LayoutDashboard,
  AlertTriangle,
  Monitor,
  Settings,
} from "lucide-react";

export const sidebarPages = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Alerts",
    path: "/alerts",
    icon: AlertTriangle,
  },
  {
    name: "Devices",
    path: "/devices",
    icon: Monitor,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];
