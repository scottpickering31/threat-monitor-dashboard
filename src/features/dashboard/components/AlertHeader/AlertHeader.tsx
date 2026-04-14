import styles from "./AlertHeader.module.css";

export default function AlertHeader() {
  return (
    <div className={styles.header}>
      <p>Alert Name</p>
      <p>Severity</p>
      <p>Device</p>
      <p>Time</p>
      <p>Status</p>
      <p>Actions</p>
    </div>
  );
}
