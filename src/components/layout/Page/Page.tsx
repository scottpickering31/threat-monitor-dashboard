import Header from "../Header/Header";
import styles from "./Page.module.css";

export default function Page() {
  return (
    <div className={styles.page_body}>
      <Header />
    </div>
  );
}
