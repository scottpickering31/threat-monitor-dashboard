import { sidebarPages } from "@/features/alerts/constants/sidebarPages";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.title_container}>
        <div className={styles.title}>Threat Monitor</div>
      </div>
      <div className={styles.sidebar}>
        {sidebarPages.map((page) => (
          <div className={styles.sidebar_pages}>
            <p>{page.icon}</p>
            <p>{page.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
