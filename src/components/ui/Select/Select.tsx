import { ChevronDown } from "lucide-react";
import styles from "./Select.module.css";

interface SelectProps {
  name: string;
  values: string[];
  selectedValue: string;
  isActive?: boolean;
  onToggle: () => void;
  onClose: () => void;
  onValueChange: (value: string) => void;
}

export default function Select({
  name,
  values,
  selectedValue,
  isActive = false,
  onToggle,
  onClose,
  onValueChange,
}: SelectProps) {
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
                  onValueChange(value);
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
