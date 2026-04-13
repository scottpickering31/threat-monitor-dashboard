import { TrendingDown, TrendingUp, TrendingUpDown } from "lucide-react";

export const getTrendIcon = (percentage: number) => {
  if (percentage > 0) return TrendingUp;
  if (percentage < 0) return TrendingDown;
  return TrendingUpDown;
};
