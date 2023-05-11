import React from "react";
import Image from "next/image";
import Container from "@/components/elements/Container";
import styles from "./styles.module.scss";
import Factoid from "@/components/elements/Factoid";

function CuresAtHome() {
  return (
    <section className={styles.curesAtHomeSection}>
      <Container className={styles.sectionContainer}>
        <Image
          className={styles.mainImg}
          src="/images/man-with-laptop.png"
          alt="a man with a laptop and the Mishin's coil"
          sizes="100vw,
                (min-width: 945px) 885px"
          width={6743}
          height={4500}
          quality={100}
        />
        <div className={styles.contentWrapper}>
          <h2 className={styles.heading}>Лікує в&nbsp;домашніх умовах</h2>
          <p className={styles.text}>
            Щоб користуватися котушкою Мішина, не&nbsp;потрібно ходити
            до&nbsp;лікаря. Досить просто сісти на&nbsp;диван, взяти ноутбук,
            включити улюблений фільм і&nbsp;покласти котушку на&nbsp;тіло.
          </p>
        </div>
        <Factoid
          className={styles.factoid}
          text="1&nbsp;година&nbsp;— середня тривалість сеансу"
        />
      </Container>
    </section>
  );
}

export default CuresAtHome;
