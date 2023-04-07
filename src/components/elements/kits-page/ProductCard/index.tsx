import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import AddToCartButton from "../../AddToCardButton";

function ProductCard() {
  return (
    <div className={styles.productCard}>
      <Image
        src="/kgs-kit.jpg"
        alt="KGS kit"
        sizes="100vw,
               (min-width: 1200px) 750px"
        quality={100}
        width={3436}
        height={1730}
        className={styles.productImage}
      />
      <div className={styles.productAllInfoWrapper}>
        <h2 className={styles.productName}>KGS</h2>
        <p className={styles.productDescr}>
          Cредний по&nbsp;стоимости вариант.
        </p>
        <div className={styles.addToCartBtnWrapper}>
          <AddToCartButton presentInCart={false} />
        </div>
        <p className={styles.productPrice}>4900 ₴</p>
      </div>
    </div>
  );
}

export default ProductCard;
