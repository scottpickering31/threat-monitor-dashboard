import { Outlet } from "react-router";
import styles from "./AppShell.module.css";
import Header from "../Header/Header";

export default function Page() {
  return (
    <div className={styles.page_body}>
      <Header />
      <Outlet />
    </div>
  );
}
