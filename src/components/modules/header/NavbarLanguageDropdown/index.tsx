import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import useOutsideClick from "@/hooks/use-outside-click";
import NavbarLanguageDropdownOptionsItem from "@/components/elements/header/NavbarLanguageDropdownOptionsItem";
import LANGUAGES from "@/constants/languages";
import classNames from "classnames";
import { ClassName } from "@/types/common";

interface LanguageDropdownProps {
  menuIsOpened?: boolean;
  className?: ClassName;
}

function NavbarLanguageDropdown({
  menuIsOpened,
  className = "",
}: LanguageDropdownProps): JSX.Element {
  const [selectedLanguageId, setSelectedLanguageId] = useState(1);
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);

  const dropdownOptionsElement = useRef(null);
  const dropdownIconWrapper = useRef(null);

  useOutsideClick([dropdownOptionsElement, dropdownIconWrapper], () => {
    setDropdownIsOpened(false);
  });

  useEffect(() => {
    if (menuIsOpened !== undefined) {
      if (!menuIsOpened) {
        setDropdownIsOpened(false);
      }
    }
  }, [menuIsOpened]);

  const dropdownClasses = classNames(styles.dropdown, className, {
    [styles.dropdownOpened]: dropdownIsOpened,
  });

  return (
    <div className={dropdownClasses}>
      <div
        className={styles.dropdownIconWrapper}
        ref={dropdownIconWrapper}
        onClick={() => setDropdownIsOpened((prev) => !prev)}
      >
        <LanguageOutlinedIcon className={styles.dropdownIcon} />
      </div>
      <ul ref={dropdownOptionsElement} className={styles.dropdownOptions}>
        {LANGUAGES.map((item) => {
          return (
            <NavbarLanguageDropdownOptionsItem
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

export default NavbarLanguageDropdown;
