import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

function NoSideEffectsSchema() {
  return (
    <div className={styles.schemaWrapper}>
      <div className={styles.coilWorkingPrincipleBlock}>
        <p>Катушка Мишина разбивает чужеродные структуры</p>
        <p>Организм самостоятельно выводит остатки от заболеваний</p>
      </div>
      <Image
        className={styles.schemaImage}
        src="/schema.jpg"
        width={4780}
        height={2852}
        sizes="
               (min-width: 575px) 1140px,
               200vw
              "
        alt="Mishin's coil schema of work"
        quality={100}
      />
      <p className={styles.sinusGeneratorDescr}>
        Генератор синуса – прибор для питания катушки Мишина
      </p>
      <div>
        <Image
          className={styles.speakerImage}
          src="/speaker.png"
          alt="Speaker"
          width={216}
          height={132}
          quality={100}
        />
        <p className={styles.mozartRecommendation}>
          Во время сеанса хорошо слушать{" "}
          <a href="https://youtu.be/DWVXa_Ism6g">анданте Моцарта</a> :)
        </p>
      </div>
    </div>
  );
}

export default NoSideEffectsSchema;
