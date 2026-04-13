import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./Page.module.css";

export default function Page() {
  return (
    <main className={styles.page_body}>
      <Header />
      <div className={styles.page_content}>
        <Outlet />
      </div>
    </main>
  );
}
