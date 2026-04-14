import { useEffect, useState } from "react";
import Card from "@/components/ui/Card/Card";
import AlertHeader from "../AlertHeader/AlertHeader";
import AlertsList from "../AlertsList/AlertList";
import AlertFooter from "../AlertFooter/AlertFooter";
import styles from "./AlertCard.module.css";
import type { AlertCardMockTypes } from "@/mocks/types/alertMocks";

const PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

type AlertCardProps = {
  alerts: AlertCardMockTypes[];
};

export default function AlertCard({ alerts }: AlertCardProps) {
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalAlerts = alerts.length;
  const totalPages = Math.max(1, Math.ceil(totalAlerts / pageSize));
  const currentEnd = Math.min(currentPage * pageSize, totalAlerts);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedAlerts = alerts.slice(startIndex, startIndex + pageSize);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  return (
    <Card light className={styles.alert_card}>
      <div>
        <AlertHeader />
        <AlertsList alerts={paginatedAlerts} visibleRowCount={5} />
        <AlertFooter
          showingCount={currentEnd}
          totalAlerts={totalAlerts}
          currentPage={currentPage}
          pageSize={pageSize}
          pageSizeOptions={PAGE_SIZE_OPTIONS}
          onPageSizeChange={(value) => {
            setPageSize(value);
            setCurrentPage(1);
          }}
          onNextPage={() => {
            setCurrentPage((page) => Math.min(page + 1, totalPages));
          }}
          onPreviousPage={() => {
            setCurrentPage((page) => Math.max(page - 1, 1));
          }}
        />
      </div>
    </Card>
  );
}
