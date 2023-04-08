import React, { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import NavbarOuterButtons from "../NavbarOuterButtons";
import NavbarLogo from "@/components/elements/header/NavbarLogo";
import BigScreenNavbarPages from "@/components/modules/header/BigScreenNavbarPages";

interface NavbarVisibleAreaProps {
  menuIsOpened: boolean;
  setMenuIsOpened: Dispatch<SetStateAction<boolean>>;
}

function SmallScreenNavbarVisibleArea({
  menuIsOpened,
  setMenuIsOpened,
}: NavbarVisibleAreaProps): JSX.Element {
  return (
    <Container className={styles.navbarVisibleArea}>
      <div className={styles.bigScreenLogoPagesWrapper}>
        <NavbarLogo menuIsOpened={menuIsOpened} />

        <BigScreenNavbarPages />
      </div>

      <NavbarOuterButtons
        menuIsOpened={menuIsOpened}
        setMenuIsOpened={setMenuIsOpened}
      />
    </Container>
  );
}

export default SmallScreenNavbarVisibleArea;
