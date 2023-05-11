import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <div className={styles.guarantee}>
        <Image
          src="/images/guarantee.png"
          alt="guarantee"
          width={310}
          height={487}
          quality={100}
        />
        <p>Гарантія 1&nbsp;рік на&nbsp;всі продукти.</p>
      </div>
      <div className={styles.delivery}>
        <Image
          src="/images/novaposhta-logo.png"
          alt="delivery"
          width={42}
          height={42}
          quality={100}
          className={styles.deliveryImg}
        />
        <p className={styles.deliveryDescr}>
          Доставка Україною та світом{" "}
          <span className={styles.novaposhta}>компанією «Нова пошта».</span>
        </p>
      </div>
    </section>
  );
}

export default Sidebar;
