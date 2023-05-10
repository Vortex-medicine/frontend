import React from "react";
import IntroImage from "@/components/modules/home-page/IntroImage";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import Factoid from "@/components/elements/Factoid";
import colors from "@/styles/colors.module.scss";
import KitsPromoButton from "@/components/elements/home-page/KitsPromoButton";
import { useTranslation } from "next-i18next";

function Intro() {
  const { t } = useTranslation();

  return (
    <section className={styles.intro}>
      <IntroImage />
      <Container>
        <h1 className={styles.heading}>{t("home:intro.heading")}</h1>
        <p className={styles.subheading}>
          Прилад для лікування більшості захворювань у&nbsp;домашніх умовах
        </p>
        <div className={styles.mainContentWrapper}>
          <div className={styles.textBlock}>
            <p>
              Котушка Мішина допогає позбутися гіпертонії, хвороб нирок,
              аритмії, ВСД, ангіни та&nbsp;інших захворювань.
            </p>
            <p>
              Технологія має 6 основних переваг: немає побічних ефектів; лікує
              більшість захворювань; достатньо одного приладу на все життя;
              лікує в &nbsp;домашніх умовах; компактний, тому можна взяти
              в&nbsp;подорож; легко користуватися.
            </p>
            <p>
              Ми розповімо про&nbsp;те, як&nbsp;працює котушка Мішина,
              не&nbsp;залазячи глибоко у&nbsp;фізику процесів. Якщо добре
              знаєтеся на&nbsp;фізиці, подивіться{" "}
              <a
                href="https://youtu.be/WYBLpHd0y0Y"
                target="_blank"
                rel="noreferrer"
              >
                7-годинний вебінар з&nbsp;вихрової медицини
              </a>
              <span style={{ color: colors.blue }}>.</span>
            </p>
          </div>
          <Factoid text="150 років технології" className={styles.factoid} />
        </div>
        <KitsPromoButton />
      </Container>
    </section>
  );
}

export default Intro;
