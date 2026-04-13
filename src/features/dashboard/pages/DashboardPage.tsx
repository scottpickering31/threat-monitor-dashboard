import DashboardVitalCard from "@/components/ui/Card/DashboardVitalCard";
import { alertCardMock } from "@/features/constants/alertCardMock";
import styles from "./DashboardPage.module.css";
import { getTrendIcon } from "./utils/getTrendIcon";

export default function DashboardPage() {
  return (
    <section className={styles.page}>
      <div className={styles.grid}>
        {alertCardMock.map((alert) => (
          <DashboardVitalCard
            key={alert.title}
            title={alert.title}
            total={alert.total}
            percentage={alert.percentage}
            trending={getTrendIcon(alert.percentage)}
          />
        ))}
      </div>
    </section>
  );
}
