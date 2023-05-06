import React, { forwardRef } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import classNames from "classnames";

interface NavbarLogoProps {
  menuIsOpened: boolean;
}

const NavbarLogo = forwardRef<HTMLDivElement, NavbarLogoProps>(
  function NavbarLogo({ menuIsOpened }, ref): JSX.Element {
    const upperLogoClasses = classNames(styles.navbarLogo, {
      [styles.navbarLogoIsTransparent]: menuIsOpened,
    });

    return (
      <div ref={ref} className={styles.navbarLogoWrapper}>
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
);

export default NavbarLogo;
