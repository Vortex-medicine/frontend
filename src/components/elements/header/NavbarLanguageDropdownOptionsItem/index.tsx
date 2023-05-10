import React from "react";
import styles from "./styles.module.scss";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import classNames from "classnames";
import { LanguageOption } from "@/types/navigation";

interface LanguageDropdownItemProps {
  item: LanguageOption;
  selectedLanguage: LanguageOption;
  setSelectedLanguage: (option: LanguageOption) => void;
}

function NavbarLanguageDropdownOptionsItem({
  item,
  selectedLanguage,
  setSelectedLanguage,
}: LanguageDropdownItemProps): JSX.Element {
  const optionsItemClasses = classNames(styles.optionsItem, {
    [styles.optionsItemActive]: selectedLanguage.value === item.value,
  });

  return (
    <li
      key={item.value}
      className={optionsItemClasses}
      onClick={() => setSelectedLanguage(item)}
    >
      <p>{item.label}</p>
      <DoneRoundedIcon />
    </li>
  );
}

export default NavbarLanguageDropdownOptionsItem;
