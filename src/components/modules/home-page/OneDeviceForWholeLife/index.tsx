import Container from "@/components/elements/Container";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

function OneDeviceForWholeLife() {
  return (
    <section className={styles.oneDeviceForWholeLifeSection}>
      <Container>
        <h2 className={styles.heading}>Один прилад на&nbsp;все життя</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.pillsBlock}>
            <div className={styles.pillsImgWrapper}>
              <Image
                src="/images/pills.jpg"
                alt="pills"
                width={4424}
                height={2964}
                sizes="100vw"
                quality={100}
              />
            </div>
            <p className={styles.pillsImgCaption}>
              Пігулки потрібно купувати все&nbsp;життя.{" "}
              <a>За&nbsp;даними statista.com</a> за&nbsp;2021 рік на&nbsp;ліки
              було витрачено близько 1.42 трильйона доларів.
            </p>
          </div>
          <div className={styles.deviceBlock}>
            <div className={styles.deviceImgWrapper}>
              <Image
                src="/images/device-with-coil.png"
                alt="the Mishin's coil with the sinus generator"
                width={2299}
                height={1652}
                sizes="100vw"
                quality={100}
              />
            </div>
            <p className={styles.deviceImgCaption}>
              Генератор синуса та&nbsp;котушку Мішина достатньо купити один раз
              і&nbsp;користуватися все життя.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OneDeviceForWholeLife;
