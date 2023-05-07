import React, { useEffect, useState } from "react";
import Container from "@/components/elements/Container";
import styles from "./styles.module.scss";
import { useCart, useCartDispatch } from "@/context/cart/Context";
import { getCartItemsTotalPrice } from "../../../utils/product";
import CheckoutProductsList from "@/components/modules/CheckoutProductsList";
import Link from "next/link";
import { PAGE_HREFS } from "@/constants/navigation-links";
import { useRouter } from "next/router";
import { setCartItems, setOrderIsConfirmed } from "../../../utils/cart-actions";
import { CartItem } from "@/types/cart";

function OrderSuccessPage() {
  const router = useRouter();
  const { items } = useCart();
  const [localItems, setLocalItems] = useState<CartItem[]>([]);
  const { orderIsConfirmed } = useCart();
  const cartDispatch = useCartDispatch();

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    if (!orderIsConfirmed && !showPage) {
      router.push(PAGE_HREFS.KITS);
    } else {
      if (!showPage) {
        setShowPage(true);
      }
    }
  }, [showPage, orderIsConfirmed, router, cartDispatch]);

  useEffect(() => {
    if (showPage) {
      if (orderIsConfirmed) {
        setOrderIsConfirmed(cartDispatch, false);
      }

      if (items.length > 0) {
        setLocalItems(items);
      }
    }
  }, [showPage, cartDispatch, items, orderIsConfirmed]);

  useEffect(() => {
    if (localItems.length > 0) {
      setCartItems(cartDispatch, []);
    }
  }, [localItems, cartDispatch]);

  const confirmedOrderProducts = items.length > 0 ? items : localItems;
  const totalPrice = getCartItemsTotalPrice(
    items.length > 0 ? items : localItems
  );

  return showPage ? (
    <Container>
      <section className={styles.receiptSection}>
        <div className={styles.allContentWrapper}>
          <h1 className={styles.heading}>Спасибо за заказ!</h1>
          <p>
            Мы свяжемся с вами как можно быстрее, чтобы ещё раз подтвердить
            заказ и уточнить все детали по доставке и оплате.
          </p>
          <p className={styles.orderSummaryDescr}>
            Вы заказали товаров на общую сумму{" "}
            <span className={styles.totalPrice}>{totalPrice} ₴:</span>
          </p>
          <CheckoutProductsList
            variant={"order-success"}
            cartItems={confirmedOrderProducts}
          />
        </div>
        <Link className={styles.mainPageBtn} href="/">
          На главную
        </Link>
      </section>
    </Container>
  ) : null;
}

export default OrderSuccessPage;
