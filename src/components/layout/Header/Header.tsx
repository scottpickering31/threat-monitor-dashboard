import BellIcon from "@/components/ui/Icons/BellIcon";
import styles from "./Header.module.css";
import HelpIcon from "@/components/ui/Icons/HelpIcon";
import SearchIcon from "@/components/ui/Icons/SearchIcon";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <h1 className={styles.header_title}>Alerts</h1>
        <label className={styles.search} aria-label="Search system threats">
          <span className={styles.search_icon}>
            <SearchIcon />
          </span>
          <input
            type="search"
            placeholder="Search system threats..."
            className={styles.input_field}
          />
        </label>
      </div>
      <div className={styles.header_right}>
        <button
          type="button"
          className={styles.icon_button}
          aria-label="Open notifications"
        >
          <BellIcon />
        </button>
        <button
          type="button"
          className={styles.icon_button}
          aria-label="Open help"
        >
          <HelpIcon />
        </button>
        <div className={styles.header_divider} aria-hidden="true" />
        <div className={styles.live_status} aria-live="polite">
          <span className={styles.pulse} aria-hidden="true">
            <span className={styles.pulse_ring_outer} />
            <span className={styles.pulse_ring_inner} />
            <span className={styles.pulse_core} />
          </span>
          <span className={styles.live_label}>System Live</span>
        </div>
      </div>
    </header>
  );
}
