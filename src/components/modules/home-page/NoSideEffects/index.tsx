import React from "react";
import styles from "./styles.module.scss";
import Schema from "@/components/modules/home-page/NoSideEffectsSchema";
import Container from "@/components/elements/Container";

function NoSideEffects() {
  return (
    <section className={styles.noSideEffectsSection}>
      <Container>
        <Schema />
      </Container>
    </section>
  );
}

export default NoSideEffects;
