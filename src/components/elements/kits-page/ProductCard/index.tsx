import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import AddToCartButton from "../../AddToCardButton";
import classnames from "classnames";
import { ProductData } from "@/types/product";
import { useCart, useCartDispatch } from "@/context/cart/Context";
import { productIsPresentInCart } from "utils/product";
import { addCartItem, openCart } from "utils/cart-actions";

function ProductCard({
  id: productId,
  name: productName,
  descr: productDescr,
  img: { path, width, height },
  price: productPrice,
  discountInfo,
}: ProductData): JSX.Element {
  const productNameWrapperClasses = classnames(styles.productNameWrapper, {
    [styles.productNameWrapperWithDiscount]: discountInfo,
  });

  const { items: cartItems } = useCart();
  const presentInCart = productIsPresentInCart(cartItems, productId);

  const cartDispatch = useCartDispatch();

  function handleAddToCartBtnClick() {
    if (!presentInCart) {
      addCartItem(cartDispatch, productId);
    } else {
      openCart(cartDispatch);
    }
  }

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
        <div
          onClick={handleAddToCartBtnClick}
          className={styles.addToCartBtnWrapper}
        >
          <AddToCartButton presentInCart={presentInCart} />
        </div>
        <p className={styles.productPrice}>{productPrice} ₴</p>
      </div>
    </div>
  );
}

export default ProductCard;
