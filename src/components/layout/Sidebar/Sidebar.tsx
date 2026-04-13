import { ShieldUser } from "lucide-react";
import { sidebarPages } from "@/features/constants/sidebarPages";
import styles from "./Sidebar.module.css";
import { Link, NavLink } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Link to={"/dashboard"} className={styles.title}>
        <div className={styles.brand}>Threat Monitor</div>
      </Link>

      <nav className={styles.navigation} aria-label="Primary">
        {sidebarPages.map((page) => {
          return (
            <NavLink
              key={page.path}
              to={page.path}
              className={({ isActive }) =>
                `${styles.nav_item} ${isActive ? styles.nav_item_active : ""}`
              }
            >
              <span className={styles.nav_icon}>
                <SidebarIcon icon={page.icon} />
              </span>
              <span className={styles.nav_label}>{page.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className={styles.analyst_card}>
        <div className={styles.avatar_wrap} aria-hidden="true">
          <div className={styles.avatar}>
            <ShieldUser
              className={styles.presence_icon}
              aria-hidden="true"
              strokeWidth={1.9}
            />
          </div>
          <span className={styles.avatar_status} />
        </div>
        <div className={styles.analyst_meta}>
          <p className={styles.analyst_title}>Analyst</p>
          <p className={styles.analyst_id}>Scott Pickering</p>
        </div>
      </div>
    </aside>
  );
}
