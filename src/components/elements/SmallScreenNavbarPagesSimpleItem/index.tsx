import React from "react";
import Container from "../Container";
import Link from "next/link";
import { ClassName } from "@/types/common";
import { PageLinkData } from "@/types/navigation";

interface SimpleItemProps {
  pageLinkData: PageLinkData;
  className?: ClassName;
}

function SmallScreenNavbarPagesItem({
  className,
  pageLinkData: { name, href },
}: SimpleItemProps) {
  return (
    <li className={className}>
      <Link href={href}>
        <Container>{name}</Container>
      </Link>
    </li>
  );
}

export default SmallScreenNavbarPagesItem;
