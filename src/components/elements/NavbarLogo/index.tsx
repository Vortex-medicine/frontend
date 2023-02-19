import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useTabletMediaQuery } from "@/hooks/use-media-query";
import classNames from "classnames";

interface NavbarLogoProps {
  menuIsOpened: boolean;
}

function NavbarLogo({ menuIsOpened }: NavbarLogoProps) {
  const isTablet = useTabletMediaQuery();

  const upperLogoClasses = classNames(styles.navbarLogo, {
    [styles.navbarLogoIsTransparent]: menuIsOpened && !isTablet,
  });

  return (
    <div className={styles.navbarLogoWrapper}>
      <Image
        src="/logo-white.png"
        alt="Vortex-medicine"
        width="100"
        height="26"
        className={styles.navbarLogo}
      />
      <Image
        src="/logo.png"
        alt="Vortex-medicine"
        width="100"
        height="26"
        className={upperLogoClasses}
      />
    </div>
  );
}

export default NavbarLogo;
