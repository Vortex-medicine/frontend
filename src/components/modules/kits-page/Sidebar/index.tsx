import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <div className={styles.guarantee}>
        <Image
          src="/guarantee.png"
          alt="guarantee"
          width={310}
          height={487}
          quality={100}
        />
        <p>Гарантия 1&nbsp;год на все продукты.</p>
      </div>
      <div className={styles.delivery}>
        <Image
          src="/novaposhta-logo.png"
          alt="delivery"
          width={42}
          height={42}
          quality={100}
          className={styles.deliveryImg}
        />
        <p className={styles.deliveryDescr}>
          Доставка по Украине и миру{" "}
          <span className={styles.novaposhta}>компанией «Нова пошта».</span>
        </p>
      </div>
    </section>
  );
}

export default Sidebar;
