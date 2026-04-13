import Header from "../Header/Header";
import styles from "./Page.module.css";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page_body}>
      <Header />
      {children}
    </div>
  );
}
