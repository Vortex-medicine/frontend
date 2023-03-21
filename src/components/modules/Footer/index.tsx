import React from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import Image from "next/image";
import classNames from "classnames";

function Footer() {
  const telegramSocialItemClasses = classNames(
    styles.socialBtnItem,
    styles.telegramSocialBtnItem
  );
  const youtubeSocialItemClasses = classNames(
    styles.socialBtnItem,
    styles.youtubeSocialBtnItem
  );
  const facebookSocialItemClasses = classNames(
    styles.socialBtnItem,
    styles.facebookSocialBtnItem
  );

  return (
    <section className={styles.footer}>
      <Container className={styles.footerContainer}>
        <div className={styles.contacts}>
          <p className={styles.phone}>
            <a target="_blank" rel="noreferrer" href="tel:+380677074154">
              +380 67 707-41-54
            </a>
          </p>
          <p className={styles.email}>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:kgs.assist@gmail.com"
            >
              kgs.assist@gmail.com
            </a>
          </p>
        </div>
        <ul className={styles.socialBtns}>
          <li className={telegramSocialItemClasses}>
            <a
              href="https://t.me/vortex_medicine"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/telegram-circle-logo.png"
                alt="telegram logo"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li className={youtubeSocialItemClasses}>
            <a
              href="https://www.youtube.com/channel/UCLxp9ELUy9um8Z3aanuBtog"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/youtube-circle-logo.png"
                alt="youtube logo"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li className={facebookSocialItemClasses}>
            <a
              href="https://www.facebook.com/VortexMed2017/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/facebook-circle-logo.webp"
                alt="facebook logo"
                width={50}
                height={50}
              />
            </a>
          </li>
        </ul>
        <p className={styles.copyright}>© Vortex-medicine, 2023</p>
      </Container>
    </section>
  );
}

export default Footer;
