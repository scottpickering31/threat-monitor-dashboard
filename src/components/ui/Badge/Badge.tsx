import { clsx } from "clsx";
import styles from "./Badge.module.css";

type BadgeSize = "sm" | "md" | "lg";
type BadgeVariant = "critical" | "high" | "medium" | "low";

interface BadgeTypes {
  title?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  capitalize?: boolean;
}

export default function Badge({
  title,
  variant,
  size,
  className,
  capitalize,
}: BadgeTypes) {
  return (
    <div
      className={clsx([styles.badge], styles[variant], styles[size], className)}
    >
      <p className={styles.title}>
        {capitalize ? title?.toUpperCase() : title}
      </p>
    </div>
  );
}
