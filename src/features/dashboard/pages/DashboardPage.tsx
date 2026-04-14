import { useState } from "react";
import VitalsCard from "@/components/ui/Card/VitalsCard";
import { alertVitalsCardMock } from "@/mocks/data/alertVitalsCardMock";
import { alertsCardMock } from "@/mocks/data/alertCardMock";
import styles from "./DashboardPage.module.css";
import { getTrendIcon } from "../utils/getTrendIcon";
import SelectRow from "@/components/ui/Select/SelectRow";
import { selectOptions } from "@/features/constants/selectOptions";
import Button from "@/components/ui/Button/Button";
import AlertCard from "../components/AlertCard/AlertCard";
import { filterAndSortAlerts } from "../utils/filterAndSortAlerts";

export default function DashboardPage() {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({
    "Sort By": "All",
    Status: "All",
  });

  const filteredAlerts = filterAndSortAlerts(
    alertsCardMock,
    selectedFilters["Sort By"],
    selectedFilters.Status,
  );

  return (
    <section className={styles.page}>
      <div className={styles.grid}>
        {alertVitalsCardMock.map((alert) => (
          <VitalsCard
            key={alert.title}
            title={alert.title}
            total={alert.total}
            percentage={alert.percentage}
            trending={getTrendIcon(alert.percentage)}
          />
        ))}
      </div>
      <div className={styles.button_select_header}>
        <SelectRow
          selectOptions={selectOptions}
          selectedValues={selectedFilters}
          onValueChange={(name, value) => {
            setSelectedFilters((current) => ({
              ...current,
              [name]: value,
            }));
          }}
        />
        <Button size={"md"} variant={"tertiary"} text="title">
          Export Report
        </Button>
        <Button size={"md"} variant={"secondary"} text="light">
          Manage Rules
        </Button>
      </div>
      <div className={styles.alerts}>
        <AlertCard alerts={filteredAlerts} />
      </div>
    </section>
  );
}
