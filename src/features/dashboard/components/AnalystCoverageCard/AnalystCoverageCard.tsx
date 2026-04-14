import Card from "@/components/ui/Card/Card";
import styles from "./AnalystCoverageCard.module.css";

const analysts = [
  {
    name: "Sarah Chen",
    status: "Active in L1-Queue",
    avatar: "https://i.pravatar.cc/80?img=32",
    online: true,
  },
  {
    name: "Marcus Thorne",
    status: "Investigation #992",
    avatar: "https://i.pravatar.cc/80?img=53",
    online: true,
  },
  {
    name: "Elena Rodriguez",
    status: "Offline",
    avatar: "https://i.pravatar.cc/80?img=47",
    online: false,
  },
];

export default function AnalystCoverageCard() {
  return (
    <Card light className={styles.card}>
      <h3 className={styles.title}>Analyst Coverage</h3>

      <div className={styles.list}>
        {analysts.map((analyst) => (
          <div
            key={analyst.name}
            className={analyst.online ? styles.row : styles.rowOffline}
          >
            <img
              className={styles.avatar}
              src={analyst.avatar}
              alt={analyst.name}
            />

            <div className={styles.copy}>
              <p className={styles.name}>{analyst.name}</p>
              <p className={styles.status}>{analyst.status}</p>
            </div>

            {analyst.online && <span className={styles.pulse} aria-hidden="true" />}
          </div>
        ))}
      </div>

      <button type="button" className={styles.button}>
        View Team
      </button>
    </Card>
  );
}
