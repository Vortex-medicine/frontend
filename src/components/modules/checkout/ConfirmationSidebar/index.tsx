import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { useCart, useCartDispatch } from "@/context/cart/Context";
import {
  getCartItemsTotalPrice,
  getCartItemsTotalQuantity,
} from "../../../../utils/product";
import { PAGE_HREFS } from "@/constants/navigation-links";
import { useRouter } from "next/router";
import { setOrderIsConfirmed } from "../../../../utils/cart-actions";

function ConfirmationSidebar() {
  const { items, orderIsConfirmed } = useCart();
  const cartDispatch = useCartDispatch();
  const router = useRouter();

  const itemsTotalQuantity = getCartItemsTotalQuantity(items);
  const itemsTotalPrice = getCartItemsTotalPrice(items);

  function handleConfirmOrder() {
    setOrderIsConfirmed(cartDispatch, true);
  }

  useEffect(() => {
    if (orderIsConfirmed) {
      router.push(PAGE_HREFS.ORDER_SUCCESS);
    }
  }, [orderIsConfirmed, router]);

  return (
    <section className={styles.confirmationSidebarSection}>
      <div className={styles.allContentWrapper}>
        <h2 className={styles.heading}>Вместе</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.orderSummaryItem}>
            <p className={styles.orderSummaryItemLabel}>Количество товаров:</p>
            <p className={styles.orderSummaryItemValue}>{itemsTotalQuantity}</p>
          </div>
          <div className={styles.orderSummaryItem}>
            <p className={styles.orderSummaryItemLabel}>Общая сумма:</p>
            <p className={styles.orderSummaryItemValue}>{itemsTotalPrice} ₴</p>
          </div>
        </div>
        <button className={styles.confirmOrderBtn} onClick={handleConfirmOrder}>
          Подтвердить заказ
        </button>
      </div>
    </section>
  );
}

export default ConfirmationSidebar;
