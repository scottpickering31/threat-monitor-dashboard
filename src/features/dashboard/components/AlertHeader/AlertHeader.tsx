import styles from "./AlertHeader.module.css";

const headerOptions = [
  "Alert Name",
  "Severity",
  "Device",
  "Time",
  "Status",
  "Actions",
];

export default function AlertHeader() {
  return (
    <div className={styles.header}>
      {headerOptions.map((option) => (
        <p key={option} className={styles.header_option}>
          {option.toUpperCase()}
        </p>
      ))}
    </div>
  );
}
