import Page from "../Page/Page";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./AppShell.module.css";

export default function AppShell() {
  return (
    <div className={styles.AppShell}>
      <Sidebar />
      <Page />
    </div>
  );
}
