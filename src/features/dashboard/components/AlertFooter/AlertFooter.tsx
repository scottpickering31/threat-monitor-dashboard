import styles from "./AlertFooter.module.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

type AlertFooterProps = {
  showingCount: number;
  totalAlerts: number;
  currentPage: number;
  pageSize: number;
  pageSizeOptions: number[];
  onPageSizeChange: (value: number) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
};

export default function AlertFooter({
  showingCount,
  totalAlerts,
  currentPage,
  pageSize,
  pageSizeOptions,
  onPageSizeChange,
  onPreviousPage,
  onNextPage,
}: AlertFooterProps) {
  const totalPages = Math.max(1, Math.ceil(totalAlerts / pageSize));
  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <div className={styles.alert_footer_container}>
      <div className={styles.footer_meta}>
        <label className={styles.page_size_label}>
          <span>Rows</span>
          <select
            className={styles.page_size_select}
            value={pageSize}
            onChange={(event) => onPageSizeChange(Number(event.target.value))}
          >
            {pageSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <div className={styles.alert_footer}>
          {`SHOWING ${showingCount} OF ${totalAlerts} ALERTS`}
        </div>
      </div>

      <div className={styles.pagination}>
        <button
          type="button"
          className={styles.pagination_button}
          onClick={onPreviousPage}
          disabled={isPreviousDisabled}
          aria-label="Previous alerts page"
        >
          <ChevronLeft size={20} strokeWidth={1.5} aria-hidden="true" />
        </button>

        <span className={styles.page_indicator}>
          {currentPage} / {totalPages}
        </span>

        <button
          type="button"
          className={styles.pagination_button}
          onClick={onNextPage}
          disabled={isNextDisabled}
          aria-label="Next alerts page"
        >
          <ChevronRight size={20} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
