import { ChevronDown } from "lucide-react";
import styles from "./Select.module.css";

interface SelectProps {
  name: string;
  values: string[];
}

export default function Select({ name, values }: SelectProps) {
  return (
    <div className={styles.select}>
      <p>{name}:</p>
      <p>{values.join(", ")}</p>
      <ChevronDown />
    </div>
  );
}
