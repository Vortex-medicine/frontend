import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Container from "@/components/elements/Container";
import { PAGE_HREFS } from "@/constants/navigation-links";

function WhatElseToExplore() {
  return (
    <section className={styles.whatElseToExploreSection}>
      <Container>
        <h2 className={styles.heading}>Что ещё изучить</h2>
        <ul className={styles.linkList}>
          <li className={styles.linkItem}>
            <p>
              <Link href={PAGE_HREFS.EXPERIENCE_SHARING_FILES}>
                Полные беседы в&nbsp;скайпе о&nbsp;вихревой медицине
              </Link>
            </p>
          </li>
          <li className={styles.linkItem}>
            <p>
              <Link href={PAGE_HREFS.MISHIN_COIL_SCHEMA}>
                Схемы катушек Мишина
              </Link>
            </p>
          </li>
          <li className={styles.linkItem}>
            <p>
              <Link href={PAGE_HREFS.SINUS_GENERATOR_SCHEMA}>
                Схема генератора синуса
              </Link>
            </p>
          </li>
          <li className={styles.linkItem}>
            <p>
              <Link href={PAGE_HREFS.ARTICLES}>Статьи</Link>
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default WhatElseToExplore;
