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
          src="/man-with-laptop.png"
          alt="a man with a laptop and the Mishin's coil"
          sizes="100vw
                (min-width: 945px) 885px"
          width={6743}
          height={4500}
          quality={100}
        />
        <div className={styles.contentWrapper}>
          <h2 className={styles.heading}>Лечит в домашних условиях</h2>
          <p className={styles.text}>
            Чтобы пользоваться катушкой Мишина, не&nbsp;нужнох одить
            к&nbsp;доктору. Нужно просто сесть на&nbsp;диван, взять ноутбук,
            включить любимый фильм и&nbsp;положить катушку на&nbsp;тело.
          </p>
        </div>
        <Factoid
          className={styles.factoid}
          text="1 час&nbsp;— средняя длительность сеанса"
        />
      </Container>
    </section>
  );
}

export default CuresAtHome;
