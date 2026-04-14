import styles from "./Select.module.css";
import Select from "./Select";
import { useEffect, useRef, useState } from "react";

type SelectRowProps = {
  selectOptions: {
    name: string;
    values: string[];
  }[];
};

export default function SelectRow({ selectOptions }: SelectRowProps) {
  const [activeSelect, setActiveSelect] = useState<string | null>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!rowRef.current?.contains(event.target as Node)) {
        setActiveSelect(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  const handleToggle = (name: string) => {
    setActiveSelect((current) => (current === name ? null : name));
  };

  return (
    <div className={styles.select_row} ref={rowRef}>
      {selectOptions.map((options) => {
        return (
          <Select
            key={options.name}
            name={options.name}
            values={options.values}
            isActive={activeSelect === options.name}
            onToggle={() => handleToggle(options.name)}
            onClose={() => setActiveSelect(null)}
          />
        );
      })}
    </div>
  );
}
