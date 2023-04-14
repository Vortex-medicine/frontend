import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { ClassName } from "@/types/common";
import { SubmenuData } from "@/types/navigation";
import classNames from "classnames";
import { useRouter } from "next/router";
import AccorionSimpleItem from "@/components/elements/header/SmallScreenNavbarPagesAccordionSimpleItem";

interface AccordionItemProps {
  submenuData: SubmenuData;
  globalMenuIsOpened: boolean;
  className?: ClassName;
}

function SmallScreenNavbarPagesAccordionItem({
  submenuData: { globalName, pages },
  globalMenuIsOpened,
  className,
}: AccordionItemProps): JSX.Element {
  const router = useRouter();
  const [accordionIsOpened, setAccordionIsOpened] = useState(false);
  const panelElement = useRef<HTMLUListElement>(null);

  const isActive = pages.some((page) => router.pathname === page.href);

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
    [styles.accordionIsActive]: isActive,
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
        {pages.map((page) => (
          <AccorionSimpleItem key={page.name} {...page} />
        ))}
      </ul>
    </li>
  );
}

export default SmallScreenNavbarPagesAccordionItem;
