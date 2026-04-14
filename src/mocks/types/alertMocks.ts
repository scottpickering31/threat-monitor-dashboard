export type AlertCardMockTypes = {
  id: number;
  title: string;
  description: string;
  severity: "low" | "medium" | "high" | "critical";
  time: string;
  device: string;
  status: "Open" | "Closed";
};

export type AlertVitalsMockTypes = {
  title: string;
  total: string;
  percentage: number;
  change: string;
};
