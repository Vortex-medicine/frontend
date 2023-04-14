import { PageLinkData } from "@/types/navigation";
import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import classnames from "classnames";

interface SimpleItemProps {
  pageData: PageLinkData;
}

function BigScreenNavbarPagesSubmenuLink({
  pageData: { href, name },
}: SimpleItemProps): JSX.Element {
  const router = useRouter();

  const isActive = router.pathname === href;

  const submenuItemClasses = classnames(styles.submenuItem, {
    [styles.submenuItemIsActive]: isActive,
  });

  return (
    <li className={submenuItemClasses}>
      <p>{isActive ? name : <Link href={href}>{name}</Link>}</p>
    </li>
  );
}

export default BigScreenNavbarPagesSubmenuLink;
