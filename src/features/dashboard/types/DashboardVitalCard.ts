import { TrendingDown, TrendingUp, TrendingUpDown } from "lucide-react";

export interface DashboardVitalCardProps {
  title: string;
  total: string;
  trending: typeof TrendingUp | typeof TrendingDown | typeof TrendingUpDown;
  percentage: number;
}
