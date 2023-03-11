import React from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import LanguageDropdown from "@/components/modules/header/NavbarLanguageDropdown";

interface NavbarInnerButtonsProps {
  menuIsOpened: boolean;
}

function SmallScreenNavbarInnerButtons({
  menuIsOpened,
}: NavbarInnerButtonsProps): JSX.Element {
  return (
    <div className={styles.innerButtons}>
      <Container>
        <LanguageDropdown menuIsOpened={menuIsOpened} />
      </Container>
    </div>
  );
}

export default SmallScreenNavbarInnerButtons;
