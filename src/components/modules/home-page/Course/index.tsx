import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import TelegramButton from "@/components/elements/TelegramButton";
import Image from "next/image";
import KitsPromoButton from "@/components/elements/home-page/KitsPromoButton";

function Course() {
  const courseSectionContainerElement = useRef<HTMLDivElement>(null);
  const headingSpanElement = useRef<HTMLSpanElement>(null);
  const courseDescrSpanElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function placeContent() {
      if (!courseSectionContainerElement.current) {
        throw new Error("courseSectionContainerElement is not defined");
      }

      if (!headingSpanElement.current) {
        throw new Error("headingSpanElement is not defined");
      }

      if (!courseDescrSpanElement.current) {
        throw new Error("courseDescrSpanElement is not defined");
      }

      if (window.innerWidth < 600 || window.innerWidth >= 900) {
        if (window.innerWidth >= 900) {
          courseSectionContainerElement.current.style.paddingLeft = `30px`;
        } else {
          courseSectionContainerElement.current.style.paddingLeft = `15px`;
        }

        return;
      }

      const headingSpanWidth = headingSpanElement.current.offsetWidth;
      const courseDescrWidth = courseDescrSpanElement.current.offsetWidth;
      const maxWidth = Math.max(headingSpanWidth, courseDescrWidth);

      const courseSectionContainerWidth =
        courseSectionContainerElement.current.offsetWidth;
      const paddingLeftValue = (courseSectionContainerWidth - maxWidth) / 2;

      courseSectionContainerElement.current.style.paddingLeft = `${paddingLeftValue}px`;
    }

    placeContent();

    window.addEventListener("resize", placeContent);

    return () => window.removeEventListener("resize", placeContent);
  }, []);

  return (
    <section className={styles.courseSection}>
      <div className={styles.courseOuterWrapper}>
        <Container
          ref={courseSectionContainerElement}
          className={styles.courseSectionContainer}
        >
          <div className={styles.allContentWrapper}>
            <div className={styles.teslaImgWrapper}>
              <Image
                className={styles.teslaWithCoilImg}
                src="/tesla-with-coil.png"
                alt="Tesla with a coil"
                width={1733}
                height={1859}
                quality={100}
              />
            </div>

            <div className={styles.mainContentWrapper}>
              <div>
                <h2 className={styles.heading}>
                  <div className={styles.headingCourseDescr}>
                    3-денний відеокурс
                  </div>
                  <div className={styles.headingCourseName}>
                    <span ref={headingSpanElement}>
                      Закрита технологія здоров&apos;я
                    </span>
                  </div>
                </h2>
                <p className={styles.courseDescr}>
                  <span ref={courseDescrSpanElement}>
                    У&nbsp;курсі докладно розповідаємо про&nbsp;те, що&nbsp;таке
                    вихрова медицина, як&nbsp;вона працює і&nbsp;відповідаємо
                    на&nbsp;поширені питання.
                  </span>
                </p>
                <TelegramButton
                  className={styles.telegramButton}
                  text="Отримати курс у&nbsp;Telegram"
                  href="https://t.me/vortex_medicine/32"
                />
              </div>

              <Image
                className={styles.freemasonsOrangeImg}
                src="/freemasons-mobile-with-filter.png"
                alt="freemasons"
                width={844}
                height={148}
                sizes="100vw,
                  (min-width: 400px) 370px"
                quality={100}
              />

              <Image
                className={styles.freemasonsBlackAndWhiteImg}
                src="/freemasons-black-and-white.png"
                alt="freemasons"
                width={844}
                height={148}
                quality={100}
              />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <KitsPromoButton />
      </Container>
    </section>
  );
}

export default Course;
