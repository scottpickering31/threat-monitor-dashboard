import DashboardVitalCard from "@/features/dashboard/components/DashboardVitalCard";
import { alertCardMock } from "@/mocks/data/alertCardMock";
import styles from "./DashboardPage.module.css";
import { getTrendIcon } from "../utils/getTrendIcon";
import Select from "@/components/ui/Select/Select";
import { selectOptions } from "@/features/constants/selectOptions";

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
      <div className={styles.select_header}>
        {selectOptions.map((options) => {
          return <Select name={options.name} values={options.values} />;
        })}
      </div>
    </section>
  );
}
