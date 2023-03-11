import React from "react";
import PAGES from "@/constants/navigation-links";
import { isPageLinkData } from "@/types/navigation";
import SimpleItem from "@/components/elements/header/BigScreenNavbarPagesSimpleItem";
import DropdownItem from "@/components/elements/header/BigScreenNavbarPagesItemWithSubmenu";
import styles from "./styles.module.scss";

function BigScreenNavbarPages(): JSX.Element {
  return (
    <ul className={styles.navbarPagesList}>
      {PAGES.map((page) => {
        if (isPageLinkData(page)) {
          return <SimpleItem key={page.name} pageLinkData={page} />;
        } else {
          return (
            <DropdownItem
              key={page.globalName}
              submenuData={page}
              className={styles.dropdownItem}
            />
          );
        }
      })}
    </ul>
  );
}

export default BigScreenNavbarPages;
