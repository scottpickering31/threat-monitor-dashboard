import clsx from "clsx";
import styles from "./VitalsCard.module.css";
import Card from "@/components/ui/Card/Card";
import type { VitalCardTypes } from "./VitalsCardTypes";

export default function DashboardVitalCard({
  title,
  total,
  percentage,
  trending: TrendIcon,
}: VitalCardTypes) {
  // Styling based on percentage
  const isPositive = percentage > 0;
  const isNegative = percentage < 0;
  const isNeutral = percentage === 0;
  const trendLabel = isPositive ? `+${percentage}%` : `${percentage}%`;

  return (
    <Card
      light={!isNegative}
      className={clsx({
        [styles.vitals_card_negative]: isNegative,
        [styles.vitals_card_neutral]: isNeutral,
      })}
    >
      <p className={styles.vitals_title}>{title}</p>
      <div className={styles.vitals_row}>
        <p
          className={clsx({
            [styles.vitals_total_positive]: isPositive,
            [styles.vitals_total_negative]: isNegative,
            [styles.vitals_total_neutral]: isNeutral,
          })}
        >
          {total}
        </p>
        <div
          className={clsx(styles.vitals_trending, {
            [styles.vitals_trending_positive]: isPositive,
            [styles.vitals_trending_negative]: isNegative,
            [styles.vitals_trending_neutral]: isNeutral,
          })}
        >
          <TrendIcon
            size={16}
            className={styles.vitals_icon}
            strokeWidth={1.9}
          />
          <p>{trendLabel}</p>
        </div>
      </div>
    </Card>
  );
}
