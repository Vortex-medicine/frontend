import Container from "@/components/elements/Container";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

function ShareTechnologyWithFriends() {
  const telegramItemClasses = classNames(
    styles.socialItem,
    styles.telegramItem
  );

  return (
    <section className={styles.shareTechnologyWithFriendsSection}>
      <Container>
        <p className={styles.heading}>Розкажіть друзям про технологію:</p>
        <ul className={styles.socialBtnsList}>
          <li className={styles.socialItem}>
            <FacebookShareButton url={"https://vortex-medicine.com.ua"}>
              <FacebookIcon size={50} round />
            </FacebookShareButton>
          </li>
          <li className={styles.socialItem}>
            <TwitterShareButton url={"https://vortex-medicine.com.ua"}>
              <TwitterIcon size={50} round />
            </TwitterShareButton>
          </li>
          <li className={styles.socialItem}>
            <LinkedinShareButton url={"https://vortex-medicine.com.ua"}>
              <LinkedinIcon size={50} round />
            </LinkedinShareButton>
          </li>
          <li className={telegramItemClasses}>
            <TelegramShareButton url={"https://vortex-medicine.com.ua"}>
              <TelegramIcon size={50} round />
            </TelegramShareButton>
          </li>
          <li className={styles.socialItem}>
            <ViberShareButton url={"https://vortex-medicine.com.ua"}>
              <ViberIcon size={50} round />
            </ViberShareButton>
          </li>
          <li className={styles.socialItem}>
            <WhatsappShareButton url={"https://vortex-medicine.com.ua"}>
              <WhatsappIcon size={50} round />
            </WhatsappShareButton>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default ShareTechnologyWithFriends;
