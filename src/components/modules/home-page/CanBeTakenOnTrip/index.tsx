import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Container from "@/components/elements/Container";

function CanBeTakenOnTrip() {
  const mainContainerElement = useRef<HTMLDivElement>(null);
  const textContentBlockElement = useRef<HTMLDivElement>(null);
  const spanElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function placeTextBlock() {
      if (!mainContainerElement.current) {
        throw new Error("mainContainerElement is not defined");
      }

      if (!textContentBlockElement.current) {
        throw new Error("textContentBlockElement is not defined");
      }

      if (!spanElement.current) {
        throw new Error("spanElement is not defined");
      }

      if (window.innerWidth < 600 || window.innerWidth > 1072) {
        textContentBlockElement.current.style.marginLeft = `0px`;
        return;
      }

      const mainContainerWidth =
        mainContainerElement.current.clientWidth -
        parseFloat(
          getComputedStyle(mainContainerElement.current).getPropertyValue(
            "padding-left"
          )
        ) *
          2;

      const spanWidth = spanElement.current.offsetWidth;

      const marginValue = (mainContainerWidth - spanWidth) / 2;

      textContentBlockElement.current.style.marginLeft = `${marginValue}px`;
    }

    placeTextBlock();

    window.addEventListener("resize", placeTextBlock);

    return () => window.removeEventListener("resize", placeTextBlock);
  }, []);

  return (
    <section className={styles.canBeTakenOnTripSection}>
      <Container className={styles.luggageImgContainer}>
        <Image
          className={styles.luggageImg}
          src="/luggage.png"
          alt="a luggage with the Mishin's coil"
          width={5477}
          height={3812}
          sizes="120vw
                 (min-width: 1200px) 1250px"
          quality={100}
        />
      </Container>
      <Container ref={mainContainerElement} className={styles.mainContainer}>
        <div ref={textContentBlockElement} className={styles.textContentBlock}>
          <h2 className={styles.heading}>Можна взяти в&nbsp;подорож</h2>
          <p className={styles.descr}>
            <span ref={spanElement}>
              Котушка Мішина та&nbsp;генератор синуса замінять більшість ліків,
              які&nbsp;ви берете з&nbsp;собою в&nbsp;дорогу. Прилади легко
              поміщаються у&nbsp;валізу, дорожню сумку та&nbsp;рюкзак.
            </span>
          </p>
        </div>
        <Image
          className={styles.bagImg}
          src="/bag.png"
          alt="a bag with the Mishin's coil"
          width={3349}
          height={2548}
          sizes="100vw,
                 (min-width: 604px) 574px"
          quality={100}
        />
      </Container>
    </section>
  );
}

export default CanBeTakenOnTrip;
