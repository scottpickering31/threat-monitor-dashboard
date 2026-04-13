import type { LucideIcon } from "lucide-react";
import styles from "./Sidebar.module.css";

type SidebarIconProps = {
  icon: LucideIcon;
};

export default function SidebarIcon({ icon: Icon }: SidebarIconProps) {
  return <Icon className={styles.icon} strokeWidth={1.9} aria-hidden="true" />;
}
