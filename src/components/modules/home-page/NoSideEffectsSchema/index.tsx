import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Arrow from "@/components/elements/Arrow";
import colors from "@/styles/colors.module.scss";

function NoSideEffectsSchema() {
  const principleDescrWrapperElement = useRef<HTMLDivElement>(null);
  const arrowElement = useRef<HTMLDivElement>(null);
  const firstTextBlockElement = useRef<HTMLParagraphElement>(null);
  const firstTextBlockSpanElement = useRef<HTMLSpanElement>(null);
  const secondTextBlockElement = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    function placeArrow() {
      if (window.innerWidth < 700) {
        return;
      }

      if (!principleDescrWrapperElement.current) {
        throw new Error("principleDescrWrapperElement is not defined");
      }

      if (!arrowElement.current) {
        throw new Error("arrowElement is not defined");
      }

      if (!firstTextBlockElement.current) {
        throw new Error("firstTextBlockElement is not defined");
      }

      if (!firstTextBlockSpanElement.current) {
        throw new Error("firstTextBlockSpanElement is not defined");
      }

      if (!secondTextBlockElement.current) {
        throw new Error("secondTextBlockElement is not defined");
      }

      const principleDescrWrapperHeight =
        principleDescrWrapperElement.current.offsetHeight;
      const arrowTop = principleDescrWrapperHeight / 2;

      const firstTextBlockSpanWidth =
        firstTextBlockSpanElement.current.offsetWidth;
      const secondTextBlockWidth = secondTextBlockElement.current.offsetWidth;

      const principleDescrWrapperGapRe = getComputedStyle(
        principleDescrWrapperElement.current
      )
        .getPropertyValue("gap")
        .match(/\d+/);
      if (!principleDescrWrapperGapRe) {
        throw new Error("principleDescrWrapperGapRe is not defined");
      }

      const principleDescrWrapperGapValue = parseFloat(
        principleDescrWrapperGapRe[0]
      );

      const principleDescrWrapperLeftPaddingRe = getComputedStyle(
        principleDescrWrapperElement.current
      )
        .getPropertyValue("padding-left")
        .match(/\d+/);
      if (!principleDescrWrapperLeftPaddingRe) {
        throw new Error("principleDescrWrapperLeftPaddingRe is not defined");
      }

      const principleDescrWrapperLeftPaddingValue = parseFloat(
        principleDescrWrapperLeftPaddingRe[0]
      );

      const principleDescrWrapperSpecialWidth =
        firstTextBlockElement.current.offsetWidth +
        principleDescrWrapperGapValue +
        secondTextBlockElement.current.offsetWidth;

      const arrowLeft =
        firstTextBlockSpanWidth +
        principleDescrWrapperLeftPaddingValue +
        (principleDescrWrapperSpecialWidth -
          firstTextBlockSpanWidth -
          secondTextBlockWidth -
          arrowElement.current.offsetWidth) /
          2;

      arrowElement.current.style.top = `${arrowTop}px`;
      arrowElement.current.style.transform = "translateY(-50%)";

      arrowElement.current.style.left = `${arrowLeft}px`;
    }

    placeArrow();

    window.addEventListener("resize", placeArrow);

    return () => window.removeEventListener("resize", placeArrow);
  }, []);

  return (
    <div className={styles.schemaWrapper}>
      <div
        ref={principleDescrWrapperElement}
        className={styles.coilWorkingPrincipleWrapper}
      >
        <p ref={firstTextBlockElement} className={styles.firstTextBlock}>
          <span ref={firstTextBlockSpanElement}>
            Котушка Мішина розбиває чужорідні структури
          </span>
        </p>
        <Arrow
          ref={arrowElement}
          className={styles.arrowHorizontal}
          type="horizontal"
        />
        <Arrow className={styles.arrowVertical} type="vertical" />
        <p ref={secondTextBlockElement} className={styles.secondTextBlock}>
          <span>Організм самостійно виводить залишки від&nbsp;захворювань</span>
        </p>
      </div>
      <div className={styles.coilCaptionWrapper}>
        <p className={styles.coilCaption}>Котушка Мішина</p>
        <div className={styles.captionLine}></div>
      </div>
      <Image
        className={styles.schemaImage}
        src="/images/schema.jpg"
        width={4780}
        height={2852}
        sizes="
               200vw,
               (min-width: 575px) 1140px
              "
        alt="Mishin's coil schema of work"
        quality={100}
      />
      <p className={styles.sinusGeneratorDescr}>
        Генератор синуса&nbsp;— прилад для&nbsp;живлення котушки Мішина
      </p>
      <div className={styles.speakerWrapper}>
        <Image
          className={styles.speakerImage}
          src="/images/speaker.png"
          alt="Speaker"
          width={216}
          height={132}
          quality={100}
        />
        <p className={styles.mozartRecommendation}>
          Під&nbsp;час сеансу добре слухати{" "}
          <a href="https://youtu.be/DWVXa_Ism6g">анданте Моцарта</a>{" "}
          <span style={{ color: colors.blue }}>:)</span>
        </p>
      </div>
    </div>
  );
}

export default NoSideEffectsSchema;
