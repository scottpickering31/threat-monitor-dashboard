import DashboardVitalCard from "@/features/dashboard/components/DashboardVitalCard";
import { alertCardMock } from "@/mocks/data/alertCardMock";
import styles from "./DashboardPage.module.css";
import { getTrendIcon } from "../utils/getTrendIcon";
import SelectRow from "@/components/ui/Select/SelectRow";
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
      <div>
        <SelectRow selectOptions={selectOptions} />
      </div>
    </section>
  );
}
