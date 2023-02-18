import React from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import LanguageDropdown from "@/components/modules/SmallScreenNavbarLanguageDropdown";

function SmallScreenNavbarInnerButtons() {
  return (
    <div className={styles.innerButtons}>
      <Container>
        <LanguageDropdown />
      </Container>
    </div>
  );
}

export default SmallScreenNavbarInnerButtons;
