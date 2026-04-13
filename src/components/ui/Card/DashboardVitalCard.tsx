import type { TrendingDown, TrendingUp, TrendingUpDown } from "lucide-react";
import styles from "./Card.module.css";

interface DashboardVitalCardProps {
  title: string;
  total: string;
  trending: typeof TrendingUp | typeof TrendingDown | typeof TrendingUpDown;
  percentage: number;
}

export default function DashboardVitalCard({
  title,
  total,
  percentage,
  trending: TrendIcon,
}: DashboardVitalCardProps) {
  return (
    <>
      {percentage >= 0 ? (
        <div className={styles.vitals_card_positive}>
          <p className={styles.vitals_title}>{title}</p>
          <div className={styles.vitals_row_positive}>
            <p className={styles.vitals_total}>{total}</p>
            <div className={styles.vitals_trending_positive}>
              <TrendIcon
                size={16}
                className={styles.vitals_icon}
                strokeWidth={1.9}
              />
              <p>+{percentage}%</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.vitals_card_negative}>
          <p className={styles.vitals_title}>{title}</p>
          <div className={styles.vitals_row_negative}>
            <p className={styles.vitals_total}>{total}</p>
            <div className={styles.vitals_trending_negative}>
              <TrendIcon
                size={16}
                className={styles.vitals_icon}
                strokeWidth={1.9}
              />
              <p>{percentage}%</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
