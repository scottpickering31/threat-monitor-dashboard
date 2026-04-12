import styles from "./Icon.module.css";

export default function BellIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 17h5l-1.4-1.55a2 2 0 0 1-.52-1.35V11a6.08 6.08 0 0 0-4-5.71V4.5a2.08 2.08 0 1 0-4.16 0v.79a6.08 6.08 0 0 0-4 5.71v3.1a2 2 0 0 1-.52 1.35L4 17h5m6 0a3 3 0 0 1-6 0m6 0H9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
