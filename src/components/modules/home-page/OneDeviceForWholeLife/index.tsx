import Container from "@/components/elements/Container";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

function OneDeviceForWholeLife() {
  return (
    <section className={styles.oneDeviceForWholeLifeSection}>
      <Container>
        <h2 className={styles.heading}>Один прибор на&nbsp;всю жизнь</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.pillsBlock}>
            <div className={styles.pillsImgWrapper}>
              <Image
                src="/pills.jpg"
                alt="pills"
                width={4424}
                height={2964}
                sizes="100vw"
                quality={100}
              />
            </div>
            <p className={styles.pillsImgCaption}>
              Таблетки нужно покупать всю жизнь.{" "}
              <a>По&nbsp;данным statista.com</a> за&nbsp;2021 год
              на&nbsp;лекарства было потрачено около 1.42 триллиона долларов.
            </p>
          </div>
          <div className={styles.deviceBlock}>
            <div className={styles.deviceImgWrapper}>
              <Image
                src="/device-with-coil.png"
                alt="the Mishin's coil with the sinus generator"
                width={2299}
                height={1652}
                sizes="100vw"
                quality={100}
              />
            </div>
            <p className={styles.deviceImgCaption}>
              Генератор синуса и катушку Мишина достаточно купить один раз и
              пользоваться всю жизнь.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OneDeviceForWholeLife;
