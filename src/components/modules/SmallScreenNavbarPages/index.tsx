import React from "react";
import styles from "./styles.module.scss";
import SimpleItem from "@/components/elements/SmallScreenNavbarPagesSimpleItem";
import AccordionItem from "@/components/elements/SmallScreenNavbarPagesAccordionItem";
import PAGES from "@/constants/navigation-links";
import { isPageLinkData } from "@/types/navigation";

interface PagesProps {
  menuIsOpened: boolean;
}

function SmallScreenNavbarPages({ menuIsOpened }: PagesProps) {
  return (
    <ul className={styles.pageList}>
      {PAGES.map((page) => {
        if (isPageLinkData(page)) {
          return (
            <SimpleItem
              key={page.name}
              pageLinkData={page}
              className={styles.pagesItem}
            />
          );
        } else {
          return (
            <AccordionItem
              key={page.globalName}
              globalMenuIsOpened={menuIsOpened}
              submenuData={page}
              className={`${styles.pagesItem} ${styles.accordionWrapper}`}
            />
          );
        }
      })}
    </ul>
  );
}

export default SmallScreenNavbarPages;
