import { useState } from "react";
import Card from "@/components/ui/Card/Card";
import AlertHeader from "../AlertHeader/AlertHeader";
import AlertList from "../AlertList/AlertList";
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
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * pageSize;
  const currentEnd = Math.min(safeCurrentPage * pageSize, totalAlerts);
  const paginatedAlerts = alerts.slice(startIndex, startIndex + pageSize);

  return (
    <Card light className={styles.alert_card}>
      <div>
        <AlertHeader />
        <AlertList alerts={paginatedAlerts} visibleRowCount={pageSize} />
        <AlertFooter
          showingCount={currentEnd}
          totalAlerts={totalAlerts}
          currentPage={safeCurrentPage}
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
