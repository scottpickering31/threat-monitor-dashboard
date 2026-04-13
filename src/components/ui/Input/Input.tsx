import { Search } from "lucide-react";
import styles from "./Input.module.css";

export default function Input() {
  return (
    <label className={styles.search} aria-label="Search system threats">
      <span className={styles.search_icon}>
        <Search className={styles.icon} aria-hidden="true" strokeWidth={1.9} />
      </span>
      <input
        type="search"
        placeholder="Search system threats..."
        className={styles.input_field}
      />
    </label>
  );
}
