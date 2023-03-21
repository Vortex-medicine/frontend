import React from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import Image from "next/image";
import Link from "next/link";

function ReviewsFromSkype() {
  return (
    <section className={styles.reviewsFromSkypeSection}>
      <Container>
        <h2 className={styles.heading}>Отзывы из групп в скайпе</h2>

        <ul className={styles.reviewsList}>
          <li className={styles.review}>
            <div className={styles.imgWrapper}>
              <Image
                src="/review-1.png"
                alt="a review from Skype"
                width={676}
                height={449}
                sizes="100vw,
                   (min-width: 1200px) 725px"
                quality={100}
              />
            </div>
            <p className={styles.imgCaption}>Вылечил простуду за&nbsp;4 дня</p>
          </li>

          <li className={styles.review}>
            <div className={styles.imgWrapper}>
              <Image
                src="/review-2.png"
                alt="a review from Skype"
                width={690}
                height={298}
                sizes="100vw,
                   (min-width: 1200px) 725px"
                quality={100}
              />
            </div>
            <p className={styles.imgCaption}>
              Избавился от&nbsp;гипертонии и&nbsp;аритмии
            </p>
          </li>

          <li className={styles.review}>
            <div className={styles.imgWrapper}>
              <Image
                src="/review-3.png"
                alt="a review from Skype"
                width={733}
                height={287}
                sizes="100vw,
                   (min-width: 1200px) 725px"
                quality={100}
              />
            </div>
            <p className={styles.imgCaption}>Избавился от&nbsp;мигрени</p>
          </li>

          <li className={styles.review}>
            <div className={styles.imgWrapper}>
              <Image
                src="/review-4.png"
                alt="a review from Skype"
                width={729}
                height={309}
                sizes="100vw,
                   (min-width: 1200px) 725px"
                quality={100}
              />
            </div>
            <p className={styles.imgCaption}>Вылечил травмированную ногу</p>
          </li>

          <li className={styles.review}>
            <div className={styles.imgWrapper}>
              <Image
                src="/review-5.png"
                alt="a review from Skype"
                width={734}
                height={388}
                sizes="100vw,
                   (min-width: 1200px) 725px"
                quality={100}
              />
            </div>
            <p className={styles.imgCaption}>
              Прошла сердечная боль и&nbsp;опухоль на&nbsp;ноге
            </p>
          </li>

          <li className={styles.review}>
            <div className={styles.imgWrapper}>
              <Image
                src="/review-6.png"
                alt="a review from Skype"
                width={763}
                height={479}
                sizes="100vw,
                   (min-width: 1200px) 725px"
                quality={100}
              />
            </div>
            <p className={styles.imgCaption}>Улучшилось зрение</p>
          </li>
        </ul>
        <p className={styles.allReviewsLink}>
          <Link href="/reviews">Все отзывы</Link>
        </p>
      </Container>
    </section>
  );
}

export default ReviewsFromSkype;
