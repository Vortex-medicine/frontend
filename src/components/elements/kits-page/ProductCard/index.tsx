import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import AddToCartButton from "../../AddToCardButton";
import classnames from "classnames";

interface ProductImg {
  path: string;
  width: number;
  height: number;
}

interface ProductCardProps {
  productName: string;
  productDescr: string;
  productImg: ProductImg;
  productPrice: number;
  discountInfo?: string;
}

function ProductCard({
  productName,
  productDescr,
  productImg: { path, width, height },
  productPrice,
  discountInfo,
}: ProductCardProps): JSX.Element {
  const productNameWrapperClasses = classnames(styles.productNameWrapper, {
    [styles.productNameWrapperWithDiscount]: discountInfo,
  });

  return (
    <div className={styles.productCard}>
      <Image
        src={path}
        alt="KGS kit"
        sizes="100vw,
               (min-width: 1200px) 750px"
        quality={100}
        width={width}
        height={height}
        className={styles.productImage}
      />
      <div className={styles.productAllInfoWrapper}>
        <div className={productNameWrapperClasses}>
          <h2 className={styles.productName}>{productName}</h2>
          {discountInfo && (
            <p className={styles.discountInfo}>{discountInfo}</p>
          )}
        </div>
        <p className={styles.productDescr}>{productDescr}</p>
        <div className={styles.addToCartBtnWrapper}>
          <AddToCartButton presentInCart={false} />
        </div>
        <p className={styles.productPrice}>{productPrice} ₴</p>
      </div>
    </div>
  );
}

export default ProductCard;
