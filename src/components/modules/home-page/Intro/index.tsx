import React from "react";
import IntroImage from "@/components/modules/home-page/IntroImage";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import Factoid from "@/components/elements/Factoid";
import DefaultButton from "@/components/elements/DefaultButton";
import Link from "next/link";

function Intro() {
  return (
    <section className={styles.intro}>
      <IntroImage />
      <Container>
        <h1 className={styles.heading}>
          Катушка Мишина&nbsp;— ваш домашний доктор
        </h1>
        <p className={styles.subheading}>
          Прибор для лечения большинства заболеваний в&nbsp;домашних условиях
        </p>
        <div className={styles.mainContentWrapper}>
          <div className={styles.textBlock}>
            <p>
              Катушка Мишина помогает избавиться от&nbsp;гипертонии, болезней
              почек, аритмии, ВСД, ангины и&nbsp;других заболеваний.
            </p>
            <p>
              У технологии есть 6 преимуществ: нет побочных эффектов; лечит
              большинство заболеваний; достаточно одного прибора на&nbsp;всю
              жизнь; лечит в&nbsp;домашних условиях; компактный, поэтому можно
              взять в&nbsp;путешествие; легко пользоваться.
            </p>
            <p>
              Мы расскажем о&nbsp;том, как работает катушка Мишина,
              не&nbsp;залезая глубоко в&nbsp;физику процессов. Если хорошо
              разбираетесь в&nbsp;физике, посмотрите{" "}
              <a>7-часовой вебинар по&nbsp;вихревой медицине.</a>
            </p>
          </div>
          <Factoid text="150 лет технологии" className={styles.factoid} />
        </div>
        <div className={styles.promoButtonWrapper}>
          <Link href="/kits" legacyBehavior passHref>
            <DefaultButton
              className={styles.kitsButton}
              text="Перейти к&nbsp;описанию и&nbsp;стоимости приборов"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Intro;
