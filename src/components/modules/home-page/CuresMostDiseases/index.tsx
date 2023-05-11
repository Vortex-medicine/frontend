import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import Link from "next/link";
import colors from "@/styles/colors.module.scss";
import Image from "next/image";
import KitsPromoButton from "@/components/elements/home-page/KitsPromoButton";

function CuresMostDiseases() {
  const coilTeaExampleWrapperElement = useRef<HTMLDivElement>(null);
  const coilTeaExampleParagraphElement = useRef<HTMLParagraphElement>(null);
  const coilTeaExampleSpanElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function placeTextBlock() {
      if (!coilTeaExampleWrapperElement.current) {
        throw new Error("coilTeaExampleWrapperElement is not defined");
      }

      if (!coilTeaExampleParagraphElement.current) {
        throw new Error("coilTeaExampleParagraphElement is not defined");
      }

      if (!coilTeaExampleSpanElement.current) {
        throw new Error("coilTeaExampleSpanElement is not defined");
      }

      if (window.innerWidth < 490 || window.innerWidth > 1200) {
        coilTeaExampleParagraphElement.current.style.marginLeft = `0`;
        return;
      }

      const coilTeaExampleWrapperWidth =
        coilTeaExampleWrapperElement.current.offsetWidth;

      const coilTeaExampleSpanWidth =
        coilTeaExampleSpanElement.current.offsetWidth;

      const marginLeftValue =
        (coilTeaExampleWrapperWidth - coilTeaExampleSpanWidth) / 2;

      coilTeaExampleParagraphElement.current.style.marginLeft = `${marginLeftValue}px`;
    }

    placeTextBlock();

    window.addEventListener("resize", placeTextBlock);

    return () => window.removeEventListener("resize", placeTextBlock);
  }, []);

  return (
    <section className={styles.curesMostDiseasesSection}>
      <Container className={styles.curesMostDiseasesSectionContainer}>
        <h2 className={styles.heading}>Лікує більшість захворювань</h2>
        <div className={styles.mainContentWrapper}>
          <p>
            Котушка Мішина допомагає організму впоратися з&nbsp;більшістю
            захворювань.
          </p>
          <p>
            Швидкість одужання залежить від кількості ресурсів організму.
            Ресурси&nbsp;— це стан організму на поточний момент: скільки
            в&nbsp;нього сил і&nbsp;наскільки правильно працюють
            усі&nbsp;функції. Чим більше ресурсів, тим організм швидше
            позбавляється залишків захворювань. Якщо попередні хвороби забрали
            в&nbsp; організму сили і&nbsp;порушили його функції, організму буде
            важче впоратися з&nbsp;новими проблемами.
          </p>
          <p>
            Список захворювань, щодо&nbsp;лікування яких є{" "}
            <Link href="/reviews">позитивні відгуки</Link>
            <span style={{ color: colors.blue }}>:</span>
          </p>
        </div>
        <ul className={styles.diseasesList}>
          <li className={styles.diseasesListItem}>
            <p>гайморит;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>застуда та&nbsp;грип;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>ангіна;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>фізична травма;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>артроз, остеоартроз, остеопороз;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>артрити;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>простатит;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>аденома простати;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>цукровий діабет I та&nbsp;II;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>хвороби нирок, каміння в&nbsp;нирках;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>пієлонефрит;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>виразки шлунка та &nbsp;дванадцятипалої кишки;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>хвороби жовчного, каміння в&nbsp;жовчному;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>холецистит;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>алергії;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>варикозне розширення вен;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>почорніння пальців;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>рубці, рубцева тканина;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>головний біль, мігрені;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>нікотинова залежність;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>ВСД, панічні атаки;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>жовтяниця, гепатит;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>стенокардії та&nbsp;ІХС;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>інфаркт міокарда;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>захворювання щитовидної залози, вузли на&nbsp;щитовидці;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>СНІД;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>кіста яєчників;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>аритмія серця;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>онкологія;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>наркотичні залежності;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>псоріаз;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>лімфостаз;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>епілепсія;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>хвороби крові.</p>
          </li>
        </ul>
        <div
          ref={coilTeaExampleWrapperElement}
          className={styles.coilTeaExampleWrapper}
        >
          <Image
            className={styles.coilTeaMobileImg}
            src="/images/cup-of-tea-mobile.png"
            alt="a coil and a cup of tea example"
            width={645}
            height={333}
            sizes="100vw,
                   (min-width: 768px) 645px"
            quality={100}
          />

          <Image
            className={styles.coilTeaDesktopImg}
            src="/images/cup-of-tea-desktop.png"
            alt="a coil and a cup of tea example"
            width={571}
            height={448}
            quality={100}
          />

          <p ref={coilTeaExampleParagraphElement}>
            <span ref={coilTeaExampleSpanElement}>
              Якщо захворіли на&nbsp;застуду, користуйтеся котушкою і&nbsp;пийте
              підкислені чаї.
            </span>
          </p>
        </div>
        <KitsPromoButton />
      </Container>
    </section>
  );
}

export default CuresMostDiseases;
