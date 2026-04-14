import type { AlertCardMockTypes } from "@/mocks/types/alertMocks";
import styles from "./AlertRow.module.css";

type AlertRowProps = {
  alert: AlertCardMockTypes;
};

export default function AlertRow({ alert }: AlertRowProps) {
  return (
    <div className={styles.row}>
      <div className={styles.alertName}>
        <p className={styles.title}>{alert.title}</p>
        <p className={styles.description}>{alert.description}</p>
      </div>

      <p className={styles.severity} data-severity={alert.severity}>
        {alert.severity}
      </p>

      <p>{alert.device}</p>
      <p>{alert.time}</p>
      <p className={styles.status}>{alert.status}</p>

      <button className={styles.resolveButton} type="button">
        Resolve
      </button>
    </div>
  );
}
