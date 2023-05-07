import React from "react";
import styles from "./styles.module.scss";
import { useCart } from "@/context/cart/Context";
import {
  getCartItemsTotalPrice,
  getCartItemsTotalQuantity,
} from "../../../../utils/product";

function ConfirmationSidebar() {
  const { items } = useCart();

  const itemsTotalQuantity = getCartItemsTotalQuantity(items);
  const itemsTotalPrice = getCartItemsTotalPrice(items);

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
        <button className={styles.confirmOrderBtn}>Подтвердить заказ</button>
      </div>
    </section>
  );
}

export default ConfirmationSidebar;
