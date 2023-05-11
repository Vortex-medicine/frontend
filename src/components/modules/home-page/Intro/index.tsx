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
        <p className={styles.subheading}>{t("home:intro.subheading")}</p>
        <div className={styles.mainContentWrapper}>
          <div className={styles.textBlock}>
            <p>{t("home:intro.textBlock1")}</p>
            <p>{t("home:intro.textBlock2")}</p>
            <p>
              {t("home:intro.textBlock3.mainText")}{" "}
              <a
                href="https://youtu.be/WYBLpHd0y0Y"
                target="_blank"
                rel="noreferrer"
              >
                {t("home:intro.textBlock3.linkText")}
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
