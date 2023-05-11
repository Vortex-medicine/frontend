import React from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import Image from "next/image";
import Link from "next/link";

function ReviewsFromSkype() {
  return (
    <section className={styles.reviewsFromSkypeSection}>
      <Container>
        <h2 className={styles.heading}>Відгуки з&nbsp;груп у&nbsp;скайпі</h2>

        <ul className={styles.reviewsList}>
          <li className={styles.review}>
            <div className={styles.imgWrapper}>
              <Image
                src="/images/review-1.png"
                alt="a review from Skype"
                width={676}
                height={449}
                sizes="100vw,
                   (min-width: 1200px) 725px"
                quality={100}
              />
            </div>
            <p className={styles.imgCaption}>Вилікував застуду за&nbsp;4 дні</p>
          </li>

          <li className={styles.review}>
            <div className={styles.imgWrapper}>
              <Image
                src="/images/review-2.png"
                alt="a review from Skype"
                width={690}
                height={298}
                sizes="100vw,
                   (min-width: 1200px) 725px"
                quality={100}
              />
            </div>
            <p className={styles.imgCaption}>
              Позбувся&nbsp;гіпертонії та&nbsp;аритмії
            </p>
          </li>

          <li className={styles.review}>
            <div className={styles.imgWrapper}>
              <Image
                src="/images/review-3.png"
                alt="a review from Skype"
                width={733}
                height={287}
                sizes="100vw,
                   (min-width: 1200px) 725px"
                quality={100}
              />
            </div>
            <p className={styles.imgCaption}>Позбувся мігрені</p>
          </li>

          <li className={styles.review}>
            <div className={styles.imgWrapper}>
              <Image
                src="/images/review-4.png"
                alt="a review from Skype"
                width={729}
                height={309}
                sizes="100vw,
                   (min-width: 1200px) 725px"
                quality={100}
              />
            </div>
            <p className={styles.imgCaption}>Вилікував травмовану ногу</p>
          </li>

          <li className={styles.review}>
            <div className={styles.imgWrapper}>
              <Image
                src="/images/review-5.png"
                alt="a review from Skype"
                width={734}
                height={388}
                sizes="100vw,
                   (min-width: 1200px) 725px"
                quality={100}
              />
            </div>
            <p className={styles.imgCaption}>
              Пройшов серцевий біль і&nbsp;пухлина на&nbsp;нозі
            </p>
          </li>

          <li className={styles.review}>
            <div className={styles.imgWrapper}>
              <Image
                src="/images/review-6.png"
                alt="a review from Skype"
                width={763}
                height={479}
                sizes="100vw,
                   (min-width: 1200px) 725px"
                quality={100}
              />
            </div>
            <p className={styles.imgCaption}>Поліпшився зір</p>
          </li>
        </ul>
        <p className={styles.allReviewsLink}>
          <Link href="/reviews">Усі відгуки</Link>
        </p>
      </Container>
    </section>
  );
}

export default ReviewsFromSkype;
