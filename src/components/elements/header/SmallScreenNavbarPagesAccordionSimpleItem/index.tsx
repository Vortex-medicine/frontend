import Link from "next/link";
import React from "react";
import Container from "@/components/elements/Container";
import { PageLinkData } from "@/types/navigation";
import { useRouter } from "next/router";
import classnames from "classnames";
import styles from "./styles.module.scss";

function SmallScreenNavbarPagesAccordionSimpleItem({
  name,
  href,
}: PageLinkData): JSX.Element {
  const router = useRouter();

  const isActive = router.pathname === href;

  const accordionItemClasses = classnames({
    [styles.accordionItemIsActive]: isActive,
  });

  return (
    <li className={accordionItemClasses}>
      {isActive ? (
        <span>
          <Container>{name}</Container>
        </span>
      ) : (
        <Link href={href}>
          <Container>{name}</Container>
        </Link>
      )}
    </li>
  );
}

export default SmallScreenNavbarPagesAccordionSimpleItem;
