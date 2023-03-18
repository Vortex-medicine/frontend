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
        <h2 className={styles.heading}>Лечит большинство заболеваний</h2>
        <div className={styles.mainContentWrapper}>
          <p>
            Катушка Мишина помогает организму справиться с&nbsp;большинством
            заболеваний.
          </p>
          <p>
            Скорость выздоровления зависит от&nbsp;количества ресурсов
            организма. Ресурсы&nbsp;— состояние организма на&nbsp;текущий
            момент: сколько у&nbsp;него сил и&nbsp;насколько правильно работают
            все функции. Чем больше ресурсов, тем организм быстрее избавляется
            от&nbsp;остатков заболеваний. Если предыдущие болезни забрали
            у&nbsp;организма силы и&nbsp;нарушили его функции, организму будет
            труднее справиться с&nbsp;новыми проблемами.
          </p>
          <p>
            Список заболеваний, по лечению которых есть{" "}
            <Link href="/reviews">положительные отзывы</Link>
            <span style={{ color: colors.blue }}>:</span>
          </p>
        </div>
        <ul className={styles.diseasesList}>
          <li className={styles.diseasesListItem}>
            <p>гайморит;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>простуда и&nbsp;грипп;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>ангина;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>физическая травма;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>артроз, остеоартроз, остеопороз;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>артриты;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>простатит;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>аденома простаты;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>сахарный диабет I и&nbsp;II;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>болезни почек, камни в&nbsp;почках;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>пиелонефрит;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>язвы желудка и&nbsp;двенадцатиперстной кишки;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>болезни желчного, камни в&nbsp;желчном;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>холецистит;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>аллергии;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>варикозное расширение вен;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>почернение пальцев;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>рубцы, рубцовая ткань;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>головные боли, мигрени;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>никотиновая зависимость;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>ВСД, панические атаки;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>желтуха, гепатит;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>стенокардии и&nbsp;ИБС;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>инфаркт миокарда;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>заболевания щитовидной железы, узлы на&nbsp;щитовидке;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>СПИД;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>киста яичников;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>аритмия сердца;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>онкология;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>наркотические зависимости;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>псориаз;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>лимфостаз;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>эпилепсия;</p>
          </li>
          <li className={styles.diseasesListItem}>
            <p>болезни крови.</p>
          </li>
        </ul>
        <div
          ref={coilTeaExampleWrapperElement}
          className={styles.coilTeaExampleWrapper}
        >
          <Image
            className={styles.coilTeaMobileImg}
            src="/cup-of-tea-mobile.png"
            alt="a coil and a cup of tea example"
            width={645}
            height={333}
            sizes="100vw,
                   (min-width: 768px) 645px"
            quality={100}
          />

          <Image
            className={styles.coilTeaDesktopImg}
            src="/cup-of-tea-desktop.png"
            alt="a coil and a cup of tea example"
            width={571}
            height={448}
            quality={100}
          />

          <p ref={coilTeaExampleParagraphElement}>
            <span ref={coilTeaExampleSpanElement}>
              Если заболели простудой, пользуйтесь катушкой и&nbsp;пейте
              подкисленные чаи.
            </span>
          </p>
        </div>
        <KitsPromoButton />
      </Container>
    </section>
  );
}

export default CuresMostDiseases;
