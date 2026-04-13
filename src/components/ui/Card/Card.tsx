import clsx from "clsx";
import styles from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
  light: boolean;
  className?: string;
};

export default function Card({ children, light, className }: CardProps) {
  return (
    <div
      className={clsx(light ? styles.light_card : styles.dark_card, className)}
    >
      {children}
    </div>
  );
}
