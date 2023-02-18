import React from "react";
import styles from "./styles.module.scss";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

type LanguageId = number;
type LanguageName = string;

interface Language {
  id: LanguageId;
  name: LanguageName;
}

interface LanguageDropdownItemProps {
  item: Language;
  selectedLanguageId: LanguageId;
  setSelectedLanguageId: (id: LanguageId) => void;
}

function SmallScreenNavbarLanguageDropdownOptionsItem({
  item,
  selectedLanguageId,
  setSelectedLanguageId,
}: LanguageDropdownItemProps) {
  return (
    <li
      key={item.id}
      className={`${styles.optionsItem} ${
        selectedLanguageId === item.id ? styles.optionsItemActive : ""
      }`}
      onClick={() => setSelectedLanguageId(item.id)}
    >
      <p>{item.name}</p>
      <DoneRoundedIcon />
    </li>
  );
}

export default SmallScreenNavbarLanguageDropdownOptionsItem;
