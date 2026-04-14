import Card from "@/components/ui/Card/Card";
import styles from "./ThreatActivityCard.module.css";

const activityBars = [
  { value: 60, critical: false },
  { value: 80, critical: false },
  { value: 40, critical: false },
  { value: 95, critical: false },
  { value: 70, critical: true },
  { value: 30, critical: false },
  { value: 85, critical: false },
  { value: 50, critical: false },
  { value: 65, critical: false },
  { value: 45, critical: false },
];

const timelineLabels = ["00:00", "06:00", "12:00", "18:00", "24:00"];

export default function ThreatActivityCard() {
  return (
    <Card light className={styles.card}>
      <h3 className={styles.title}>Real-time Threat Activity</h3>

      <div className={styles.chart}>
        {activityBars.map((bar, index) => (
          <div
            key={`${bar.value}-${index}`}
            className={bar.critical ? styles.barCritical : styles.bar}
            style={{ height: `${bar.value}%` }}
          />
        ))}
      </div>

      <div className={styles.timeline}>
        {timelineLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </Card>
  );
}
