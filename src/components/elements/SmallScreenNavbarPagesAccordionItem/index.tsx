import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Link from "next/link";
import { ClassName } from "@/types/common";
import { SubmenuData } from "@/types/navigation";
import classNames from "classnames";

interface AccordionItemProps {
  submenuData: SubmenuData;
  globalMenuIsOpened: boolean;
  className?: ClassName;
}

function SmallScreenNavbarPagesAccordionItem({
  submenuData: { globalName, pages },
  globalMenuIsOpened,
  className,
}: AccordionItemProps) {
  const [accordionIsOpened, setAccordionIsOpened] = useState(false);
  const panelElement = useRef<HTMLUListElement>(null);

  function handleAccordionClick() {
    setAccordionIsOpened((prev) => !prev);
  }

  useEffect(() => {
    if (!globalMenuIsOpened) {
      setAccordionIsOpened(false);
    }
  }, [globalMenuIsOpened]);

  const accordionClasses = classNames(styles.accordion, {
    [styles.accordionOpened]: accordionIsOpened,
  });

  return (
    <li className={className}>
      <div className={accordionClasses} onClick={handleAccordionClick}>
        <Container className={styles.accordionInnerContainer}>
          {globalName}
          <KeyboardArrowDownRoundedIcon className={styles.accordionArrowIcon} />
        </Container>
      </div>
      <ul
        ref={panelElement}
        className={styles.accordionPanel}
        style={
          accordionIsOpened
            ? { maxHeight: panelElement.current?.scrollHeight }
            : { maxHeight: "0px" }
        }
      >
        {pages.map((page) => {
          return (
            <li key={page.name}>
              <Link href={page.href}>
                <Container>{page.name}</Container>
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default SmallScreenNavbarPagesAccordionItem;
