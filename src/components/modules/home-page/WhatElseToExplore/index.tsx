import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Container from "@/components/elements/Container";

function WhatElseToExplore() {
  return (
    <section className={styles.whatElseToExploreSection}>
      <Container>
        <h2 className={styles.heading}>Что ещё изучить</h2>
        <ul className={styles.linkList}>
          <li className={styles.linkItem}>
            <p>
              <Link href="/experience-sharing-files">
                Полные беседы в&nbsp;скайпе о&nbsp;вихревой медицине
              </Link>
            </p>
          </li>
          <li className={styles.linkItem}>
            <p>
              <Link href="/mishin-coil-schema">Схемы катушек Мишина</Link>
            </p>
          </li>
          <li className={styles.linkItem}>
            <p>
              <Link href="/sinus-generator-schema">
                Схема генератора синуса
              </Link>
            </p>
          </li>
          <li className={styles.linkItem}>
            <p>
              <Link href="/articles">Статьи</Link>
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default WhatElseToExplore;
