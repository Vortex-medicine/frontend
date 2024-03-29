import React from "react";
import { CartItem } from "@/types/cart";
import styles from "./styles.module.scss";
import Image from "next/image";
import { getProductById } from "../../../utils/product";
import { useTranslation } from "next-i18next";
import { ProductDescr } from "@/types/product";
import { useProducts } from "@/context/products/Context";

interface CheckoutProductProps {
  productData: CartItem;
}

function CheckoutProduct({
  productData: { productId, quantity },
}: CheckoutProductProps): JSX.Element {
  const { products: allProducts } = useProducts();

  console.log("productId", productId);
  console.log("allProducts", allProducts);
  const product = getProductById(productId, allProducts);
  const {
    i18n: { language: currentLanguage },
  } = useTranslation();

  if (!product) {
    throw new Error("product not found");
  }

  return (
    <div className={styles.productWrapper}>
      <div className={styles.productImgDescrWrapper}>
        <Image
          className={styles.productImg}
          src={product.img.path}
          alt="cart item"
          width={product.img.width}
          height={product.img.height}
          sizes="100vw,
               (min-width: 700px) 50vw,
               (min-width: 1200px) 330px"
        />
        <div className={styles.productNameDescrWrapper}>
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.productDescr}>
            {product.descr[currentLanguage as keyof ProductDescr]}
          </p>
        </div>
      </div>
      <div className={styles.productPriceQuantityWrapper}>
        <p className={styles.productPriceQuantityItem}>
          <span className={styles.productPriceQuantityLabel}>
            Ціна<span className={styles.colon}>:</span>
          </span>{" "}
          <span className={styles.productPriceQuantityValue}>
            {product.price} ₴
          </span>
        </p>
        <p className={styles.productPriceQuantityItem}>
          <span className={styles.productPriceQuantityLabel}>
            Кількість<span className={styles.colon}>:</span>
          </span>{" "}
          <span className={styles.productPriceQuantityValue}>{quantity}</span>
        </p>
        <p className={styles.productPriceQuantityItem}>
          <span className={styles.productPriceQuantityLabel}>
            Сума<span className={styles.colon}>:</span>
          </span>{" "}
          <span className={styles.productPriceQuantityValue}>
            {product.price * quantity} ₴
          </span>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
