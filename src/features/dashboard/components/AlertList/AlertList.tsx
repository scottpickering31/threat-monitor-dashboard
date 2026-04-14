import type { CSSProperties } from "react";
import type { AlertCardMockTypes } from "@/mocks/types/alertMocks";
import styles from "./AlertList.module.css";
import AlertRow from "../AlertRow/AlertRow";

type AlertsListProps = {
  alerts: AlertCardMockTypes[];
  visibleRowCount?: number;
};

export default function AlertList({
  alerts,
  visibleRowCount = 5,
}: AlertsListProps) {
  return (
    <div
      className={styles.list}
      style={
        {
          "--visible-row-count": visibleRowCount,
        } as CSSProperties
      }
    >
      {alerts.map((alert) => (
        <AlertRow key={alert.id} alert={alert} />
      ))}
    </div>
  );
}
