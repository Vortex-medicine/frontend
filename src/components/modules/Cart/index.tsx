import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useCart } from "@/context/cart/Context";
import { useMediaQuery } from "@mui/material";
import VIEWPORT_BOUNDS from "@/constants/viewport-bounds";
import { CloseRounded } from "@mui/icons-material";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import CartItem from "@/components/elements/CartItem";

export default function Cart() {
  const { cartIsOpened, cartModalElement, handleCartIsOpened } = useCart();

  const noFullScreen = useMediaQuery(
    `(min-width: ${VIEWPORT_BOUNDS.tablet}px)`
  );
  const [fullScreen, fullWidth] = noFullScreen ? [false, true] : [true, false];

  return (
    <Dialog
      className={styles.cartModal}
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
      onClose={() => handleCartIsOpened(false)}
    >
      <div className={styles.modalTitleOuterWrapper}>
        <Container className={styles.modalTitleInnerContainer}>
          <h2>Корзина</h2>
          <button
            className={styles.closeModalBtn}
            onClick={() => handleCartIsOpened(false)}
          >
            <CloseRounded />
          </button>
        </Container>
      </div>
      <DialogContent className={styles.cartMainContentOuterWrapper}>
        <Container className={styles.cartMainContentInnerContainer}>
          <ul className={styles.cartItemList}>
            <li className={styles.cartItem}>
              <CartItem
                productData={{
                  productName: "KGS",
                  productDescr: "Cредний по\u00A0стоимости вариант.",
                  productImg: {
                    path: "/kgs-kit.jpg",
                    width: 3436,
                    height: 1730,
                  },
                  productPrice: 4900,
                }}
              />
            </li>
            <li className={styles.cartItem}>
              <CartItem
                productData={{
                  productName: "KGS-MINI",
                  productDescr:
                    "Бюджетный вариант, простой в\u00A0использовании, с\u00A0минимальной функциональностью.",
                  productImg: {
                    path: "/kgs-mini-kit.jpg",
                    width: 4032,
                    height: 2528,
                  },
                  productPrice: 3000,
                }}
              />
            </li>
          </ul>
          <div className={styles.footerBtnsWrapper}>
            <div className={styles.checkoutWrapper}>
              <p className={styles.totalPrice}>7900 ₴</p>
              <button className={styles.checkoutBtn}>Оформить заказ</button>
            </div>
            <button
              className={styles.continueShoppingBtn}
              onClick={() => handleCartIsOpened(false)}
            >
              Продолжить покупки
            </button>
          </div>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
