import styles from "./Icon.module.css";

export default function HelpIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 3-3 3m.09 4h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
