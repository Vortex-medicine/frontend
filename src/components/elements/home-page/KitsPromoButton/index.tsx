import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import DefaultButton from "@/components/elements/DefaultButton";

function KitsPromoButton() {
  return (
    <div className={styles.promoButtonWrapper}>
      <Link href="/kits" legacyBehavior passHref>
        <DefaultButton
          className={styles.kitsButton}
          text="Перейти до&nbsp;опису та&nbsp;вартості приладів"
        />
      </Link>
    </div>
  );
}

export default KitsPromoButton;
