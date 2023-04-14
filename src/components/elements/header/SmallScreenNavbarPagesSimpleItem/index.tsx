import React from "react";
import Link from "next/link";
import Container from "@/components/elements/Container";
import { ClassName } from "@/types/common";
import { PageLinkData } from "@/types/navigation";
import { useRouter } from "next/router";
import classnames from "classnames";
import styles from "./styles.module.scss";

interface SimpleItemProps {
  pageLinkData: PageLinkData;
  className?: ClassName;
}

function SmallScreenNavbarPagesItem({
  className,
  pageLinkData: { name, href },
}: SimpleItemProps): JSX.Element {
  const router = useRouter();

  const isActive = router.pathname === href;

  const pageItemClasses = classnames(className, {
    [styles.pageItemIsActive]: isActive,
  });

  return (
    <li className={pageItemClasses}>
      <Link href={href}>
        <Container>{name}</Container>
      </Link>
    </li>
  );
}

export default SmallScreenNavbarPagesItem;
