import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";

function IntroImage() {
  return (
    <div className={styles.introIllustration}>
      <Container className={styles.imageCaptionContainer}>
        <p className={styles.imageCaption}>
          <span>Здоровье</span>
          <br />
          без таблеток
        </p>
      </Container>
      <div className={styles.imageWrapperMobile}>
        <Image
          className={styles.imageMobile}
          src="/family-mobile.png"
          alt="a family with mishin's coil"
          fill
        />
      </div>
      <Container>
        <div className={styles.imageWrapperTablet}>
          <Image
            className={styles.imageTablet}
            src="/family.png"
            alt="a family with mishin's coil"
            fill
          />
        </div>
      </Container>
    </div>
  );
}

export default IntroImage;
