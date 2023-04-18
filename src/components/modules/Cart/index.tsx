import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useCart, useCartDispatch } from "@/context/cart/Context";
import { useMediaQuery } from "@mui/material";
import VIEWPORT_BOUNDS from "@/constants/viewport-bounds";
import { CloseRounded } from "@mui/icons-material";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import CartItem from "@/components/elements/CartItem";
import { closeCart } from "utils/cart-actions";
import { getCartItemsTotalPrice } from "utils/product";
import Link from "next/link";
import { PAGE_HREFS } from "@/constants/navigation-links";
import classnames from "classnames";

export default function Cart() {
  const {
    isOpened: cartIsOpened,
    modalElement: cartModalElement,
    items: cartItems,
  } = useCart();
  const cartDispatch = useCartDispatch();

  const noFullScreen = useMediaQuery(
    `(min-width: ${VIEWPORT_BOUNDS.tablet}px)`
  );
  const [fullScreen, fullWidth] = noFullScreen ? [false, true] : [true, false];

  const cartModalClasses = classnames(styles.cartModal, {
    [styles.cartModalIsEmpty]: cartItems.length === 0,
  });

  return (
    <Dialog
      className={cartModalClasses}
      ref={cartModalElement}
      sx={{
        "& .MuiPaper-root": {
          width: { tablet: "calc(100% - 90px)" },
          margin: { tablet: "45px" },
          boxShadow: "none",
          filter: "drop-shadow(0px 20px 31px rgba(0, 0, 0, 0.2))",
          borderRadius: { tablet: "30px" },
        },
      }}
      open={cartIsOpened}
      fullScreen={fullScreen}
      fullWidth={fullWidth}
      maxWidth="cart"
      scroll="paper"
      onClose={() => closeCart(cartDispatch)}
    >
      <div className={styles.modalTitleOuterWrapper}>
        <Container className={styles.modalTitleInnerContainer}>
          <h2>Корзина</h2>
          <button
            className={styles.closeModalBtn}
            onClick={() => closeCart(cartDispatch)}
          >
            <CloseRounded />
          </button>
        </Container>
      </div>
      <DialogContent className={styles.cartMainContentOuterWrapper}>
        <Container className={styles.cartMainContentInnerContainer}>
          {cartItems.length > 0 ? (
            <ul className={styles.cartItemList}>
              {cartItems.map((item) => (
                <li key={item.productId} className={styles.cartItem}>
                  <CartItem productData={item} />
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.emptyCartWrapper}>
              <h3>В корзине пусто</h3>
              <p>Но это никогда не поздно исправить :)</p>
            </div>
          )}

          {cartItems.length > 0 && (
            <div className={styles.footerBtnsWrapper}>
              <div className={styles.checkoutWrapper}>
                <p className={styles.totalPrice}>
                  {getCartItemsTotalPrice(cartItems)} ₴
                </p>
                <Link
                  onClick={() => closeCart(cartDispatch)}
                  href={PAGE_HREFS.CHECKOUT}
                  className={styles.checkoutBtn}
                >
                  Оформить заказ
                </Link>
              </div>
              <button
                className={styles.continueShoppingBtn}
                onClick={() => closeCart(cartDispatch)}
              >
                Продолжить покупки
              </button>
            </div>
          )}
        </Container>
      </DialogContent>
    </Dialog>
  );
}
