import React, { useState } from "react";
import styles from "./styles.module.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import useOutsideClick from "@/hooks/useOutsideClick";
import SmallScreenNavbarLanguageDropdownOptionsItem from "@/components/elements/SmallScreenNavbarLanguageDropdownOptionsItem";

const LANGUAGES = [
  { name: "Українська", id: 0 },
  { name: "Русский", id: 1 },
  { name: "English", id: 2 },
];

function SmallScreenNavbarLanguageDropdown() {
  const [selectedLanguageId, setSelectedLanguageId] = useState(1);
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);

  const ref = useOutsideClick<HTMLUListElement>(() =>
    setDropdownIsOpened(false)
  );

  return (
    <div
      className={`${styles.dropdown} ${
        dropdownIsOpened ? styles.dropdownOpened : ""
      }`}
    >
      <div
        className={styles.dropdownIconWrapper}
        onClick={() => setDropdownIsOpened(!dropdownIsOpened)}
      >
        <LanguageOutlinedIcon className={styles.dropdownIcon} />
      </div>
      <ul ref={ref} className={styles.dropdownOptions}>
        {LANGUAGES.map((item) => {
          return (
            <SmallScreenNavbarLanguageDropdownOptionsItem
              key={item.id}
              item={item}
              selectedLanguageId={selectedLanguageId}
              setSelectedLanguageId={setSelectedLanguageId}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default SmallScreenNavbarLanguageDropdown;
