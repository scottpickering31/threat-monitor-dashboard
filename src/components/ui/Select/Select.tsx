import { ChevronDown } from "lucide-react";
import { useState } from "react";
import styles from "./Select.module.css";

interface SelectProps {
  name: string;
  values: string[];
  isActive?: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export default function Select({
  name,
  values,
  isActive = false,
  onToggle,
  onClose,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(values[0] ?? "");

  return (
    <div className={styles.select_wrapper}>
      <button
        type="button"
        className={styles.select}
        onClick={onToggle}
        aria-expanded={isActive}
        aria-haspopup="listbox"
      >
        <span className={styles.select_label}>
          <span className={styles.select_name}>{name}:</span>
          <span className={styles.select_value}>{selectedValue}</span>
        </span>
        <ChevronDown
          aria-hidden="true"
          className={isActive ? styles.select_icon_open : styles.select_icon}
        />
      </button>

      {isActive && (
        <ul
          className={styles.menu}
          role="listbox"
          aria-label={`${name} options`}
        >
          {values.map((value) => (
            <li key={value}>
              <button
                type="button"
                className={styles.option}
                onClick={() => {
                  setSelectedValue(value);
                  onClose();
                }}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
