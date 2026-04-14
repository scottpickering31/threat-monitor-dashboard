import type { AlertCardMockTypes } from "@/mocks/types/alertMocks";

type SortOption = "All" | "Alert Name" | "Severity" | "Device" | "Time";
type StatusFilter = "All" | AlertCardMockTypes["status"];

const severityRank: Record<AlertCardMockTypes["severity"], number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
};

function parseRelativeMinutes(label: string) {
  const [rawValue, unit] = label.split(" ");
  const value = Number(rawValue);

  if (Number.isNaN(value)) {
    return Number.POSITIVE_INFINITY;
  }

  if (unit.startsWith("min")) {
    return value;
  }

  if (unit.startsWith("hour")) {
    return value * 60;
  }

  return Number.POSITIVE_INFINITY;
}

export function filterAndSortAlerts(
  alerts: AlertCardMockTypes[],
  sortBy: string,
  status: string,
) {
  const normalizedSort = sortBy as SortOption;
  const normalizedStatus = status as StatusFilter;

  const filteredAlerts =
    normalizedStatus === "All"
      ? alerts
      : alerts.filter((alert) => alert.status === normalizedStatus);

  return [...filteredAlerts].sort((left, right) => {
    switch (normalizedSort) {
      case "Alert Name":
        return left.title.localeCompare(right.title);
      case "Severity":
        return severityRank[left.severity] - severityRank[right.severity];
      case "Device":
        return left.device.localeCompare(right.device);
      case "Time":
        return (
          parseRelativeMinutes(left.time) - parseRelativeMinutes(right.time)
        );
      case "All":
      default:
        return 0;
    }
  });
}
