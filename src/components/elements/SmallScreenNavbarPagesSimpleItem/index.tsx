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
      <Link href={href} legacyBehavior>
        <a>
          <Container>{name}</Container>
        </a>
      </Link>
    </li>
  );
}

export default SmallScreenNavbarPagesItem;
