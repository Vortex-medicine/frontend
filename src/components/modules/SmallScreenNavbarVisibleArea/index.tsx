import React, { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import SmallScreenNavbarOuterButtons from "../SmallScreenNavbarOuterButtons";
import NavbarLogo from "@/components/elements/NavbarLogo";

interface NavbarVisibleAreaProps {
  menuIsOpened: boolean;
  setMenuIsOpened: Dispatch<SetStateAction<boolean>>;
}

function SmallScreenNavbarVisibleArea({
  menuIsOpened,
  setMenuIsOpened,
}: NavbarVisibleAreaProps) {
  return (
    <Container className={styles.navbarVisibleArea}>
      <NavbarLogo menuIsOpened={menuIsOpened} />

      <SmallScreenNavbarOuterButtons
        isOpened={menuIsOpened}
        setIsOpened={setMenuIsOpened}
      />
    </Container>
  );
}

export default SmallScreenNavbarVisibleArea;
