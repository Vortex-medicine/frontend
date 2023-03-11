import { SubmenuData } from "@/types/navigation";
import React, { useRef, useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import styles from "./styles.module.scss";
import SubmenuLink from "@/components/elements/header/BigScreenNavbarPagesSubmenuLink";
import { ClassName } from "@/types/common";
import classNames from "classnames";
import useOutsideClick from "@/hooks/use-outside-click";

interface PagesDropdownItemProps {
  submenuData: SubmenuData;
  className?: ClassName;
}

function BigScreenNavbarPagesItemWithSubmenu({
  submenuData: { globalName, pages },
  className = "",
}: PagesDropdownItemProps): JSX.Element {
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const submenuGlobalNameWrapperElement = useRef<HTMLDivElement>(null);
  const dropdownItemSubmenuElement = useRef<HTMLUListElement>(null);

  const dropdownItemClasses = classNames(styles.dropdownItem, className, {
    [styles.dropdownItemOpened]: dropdownIsOpened,
  });

  const dropdownItemSubmenuClasses = classNames(styles.dropdownItemSubmenu);

  function handleDropdownClick() {
    setDropdownIsOpened((prev) => !prev);
  }

  useOutsideClick(
    [dropdownItemSubmenuElement, submenuGlobalNameWrapperElement],
    () => setDropdownIsOpened(false)
  );

  return (
    <li className={dropdownItemClasses}>
      <div
        ref={submenuGlobalNameWrapperElement}
        className={styles.submenuGlobalNameWrapper}
        onClick={handleDropdownClick}
      >
        <p className={styles.submenuGlobalName}>{globalName}</p>
        <KeyboardArrowDownRoundedIcon />
      </div>
      <ul
        ref={dropdownItemSubmenuElement}
        className={dropdownItemSubmenuClasses}
      >
        {pages.map((page) => {
          return <SubmenuLink key={page.name} pageData={page} />;
        })}
      </ul>
    </li>
  );
}

export default BigScreenNavbarPagesItemWithSubmenu;
