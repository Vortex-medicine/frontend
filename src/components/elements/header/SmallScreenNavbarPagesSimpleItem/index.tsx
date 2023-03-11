import React from "react";
import Link from "next/link";
import Container from "@/components/elements/Container";
import { ClassName } from "@/types/common";
import { PageLinkData } from "@/types/navigation";

interface SimpleItemProps {
  pageLinkData: PageLinkData;
  className?: ClassName;
}

function SmallScreenNavbarPagesItem({
  className,
  pageLinkData: { name, href },
}: SimpleItemProps): JSX.Element {
  return (
    <li className={className}>
      <Link href={href}>
        <Container>{name}</Container>
      </Link>
    </li>
  );
}

export default SmallScreenNavbarPagesItem;
