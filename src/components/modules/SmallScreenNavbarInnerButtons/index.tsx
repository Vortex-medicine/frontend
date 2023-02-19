import React from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import LanguageDropdown from "@/components/modules/SmallScreenNavbarLanguageDropdown";

interface NavbarInnerButtonsProps {
  menuIsOpened: boolean;
}

function SmallScreenNavbarInnerButtons({
  menuIsOpened,
}: NavbarInnerButtonsProps) {
  return (
    <div className={styles.innerButtons}>
      <Container>
        <LanguageDropdown menuIsOpened={menuIsOpened} />
      </Container>
    </div>
  );
}

export default SmallScreenNavbarInnerButtons;
