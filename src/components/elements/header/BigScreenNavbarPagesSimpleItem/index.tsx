import { PageLinkData } from "@/types/navigation";
import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import classnames from "classnames";

interface SimpleItemProps {
  pageLinkData: PageLinkData;
}

function BigScreenNavbarPagesSimpleItem({
  pageLinkData: { name, href },
}: SimpleItemProps): JSX.Element {
  const router = useRouter();
  const isActive = router.pathname === href;

  const pageItemClasses = classnames(styles.pageItem, {
    [styles.pageItemIsActive]: isActive,
  });

  return (
    <li className={pageItemClasses}>
      <p>{isActive ? name : <Link href={href}>{name}</Link>}</p>
    </li>
  );
}

export default BigScreenNavbarPagesSimpleItem;
