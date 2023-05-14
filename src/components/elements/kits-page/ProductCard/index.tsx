import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import AddToCartButton from "../../AddToCartButton";
import classnames from "classnames";
import { ProductData, ProductDescr } from "@/types/product";
import { useCart, useCartDispatch } from "@/context/cart/Context";
import { productIsPresentInCart } from "utils/product";
import { addCartItem, openCart } from "utils/cart-actions";
import { useSnackbar } from "notistack";
import { useTranslation } from "next-i18next";
import { ProductDiscountInfo } from "@/types/product";

interface ProductCardProps {
  productData: ProductData;
}

function ProductCard({
  productData: {
    id: productId,
    name: productName,
    descr: productDescr,
    img: { path, width, height },
    price: productPrice,
    discountInfo,
  },
}: ProductCardProps): JSX.Element {
  const {
    i18n: { language: currentLanguage },
  } = useTranslation();
  const productNameWrapperClasses = classnames(styles.productNameWrapper, {
    [styles.productNameWrapperWithDiscount]: discountInfo,
  });

  const { items: cartItems } = useCart();
  const presentInCart = productIsPresentInCart(cartItems, productId);

  const cartDispatch = useCartDispatch();

  const { enqueueSnackbar } = useSnackbar();

  function handleAddToCartBtnClick() {
    if (!presentInCart) {
      addCartItem(cartDispatch, productId);
      // setSnackbarIsOpened(true);
      enqueueSnackbar({ variant: "addToCartAlert" });
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
            <p className={styles.discountInfo}>
              {discountInfo[currentLanguage as keyof ProductDiscountInfo]}
            </p>
          )}
        </div>
        <p className={styles.productDescr}>
          {productDescr[currentLanguage as keyof ProductDescr]}
        </p>
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
