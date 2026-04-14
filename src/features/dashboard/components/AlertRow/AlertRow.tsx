import type { AlertCardMockTypes } from "@/mocks/types/alertMocks";
import styles from "./AlertRow.module.css";
import Badge from "@/components/ui/Badge/Badge";
import { alertDeviceIcons } from "@/mocks/data/alertDeviceIcons";
import { Circle } from "lucide-react";
import clsx from "clsx";

type AlertRowProps = {
  alert: AlertCardMockTypes;
};

export default function AlertRow({ alert }: AlertRowProps) {
  const Icon = alertDeviceIcons[alert.iconKey];
  return (
    <div className={styles.row}>
      <div className={styles.alertName}>
        <p className={styles.title}>{alert.title}</p>
        <p className={styles.description}>{alert.description}</p>
      </div>
      <Badge
        title={alert.severity}
        variant={alert.severity}
        size="sm"
        capitalize
      />
      <div className={styles.device}>
        <Icon size={16} strokeWidth={1.9} aria-hidden="true" />
        <p>{alert.device}</p>
      </div>
      <p className={styles.time}>{alert.time}</p>
      <div className={styles.statusContainer}>
        <Circle
          size={8}
          strokeWidth={1.5}
          className={clsx([styles.dot], {
            [styles.offline]: alert.status === "Closed",
          })}
        />
        <p className={styles.status}>{alert.status}</p>
      </div>

      <button className={styles.resolveButton} type="button">
        Resolve
      </button>
    </div>
  );
}
