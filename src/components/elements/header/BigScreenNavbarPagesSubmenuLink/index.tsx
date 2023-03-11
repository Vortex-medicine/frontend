import { PageLinkData } from "@/types/navigation";
import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface SimpleItemProps {
  pageData: PageLinkData;
}

function BigScreenNavbarPagesSubmenuLink({
  pageData: { href, name },
}: SimpleItemProps): JSX.Element {
  return (
    <li className={styles.submenuItem}>
      <p>
        <Link href={href}>{name}</Link>
      </p>
    </li>
  );
}

export default BigScreenNavbarPagesSubmenuLink;
