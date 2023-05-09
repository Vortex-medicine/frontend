import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { useCart, useCartDispatch } from "@/context/cart/Context";
import {
  getAllOrderItemsFromCart,
  getCartItemsTotalPrice,
  getCartItemsTotalQuantity,
} from "../../../../utils/product";
import { PAGE_HREFS } from "@/constants/navigation-links";
import { useRouter } from "next/router";
import { useFormContext } from "react-hook-form";
import { CombinedSchemaType } from "../../../../utils/order-form-schema";
import formatOrderObject from "../../../../utils/format-order-object";
import { DeliveryOption } from "@/types/checkout";
import axios from "axios";
import { BACKEND_URL } from "@/constants/api-urls";
import { setOrderIsConfirmed } from "../../../../utils/cart-actions";

interface ConfirmationSidebarProps {
  selectedDeliveryOption: DeliveryOption;
}

function ConfirmationSidebar({
  selectedDeliveryOption,
}: ConfirmationSidebarProps): JSX.Element {
  const { items, orderIsConfirmed } = useCart();
  const { handleSubmit } = useFormContext<CombinedSchemaType>();
  const cartDispatch = useCartDispatch();
  const router = useRouter();

  const itemsTotalQuantity = getCartItemsTotalQuantity(items);
  const itemsTotalPrice = getCartItemsTotalPrice(items);
  const orderItems = getAllOrderItemsFromCart(items);

  async function handleConfirmOrder(data: CombinedSchemaType) {
    const formattedData = formatOrderObject(
      data,
      selectedDeliveryOption,
      orderItems
    );
    console.log("Form data:", formattedData);

    try {
      await axios.post(`${BACKEND_URL}/orders`, formattedData);
      setOrderIsConfirmed(cartDispatch, true);
    } catch (error) {
      console.log("error on POST /orders: ", error);
    }
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
        <button
          className={styles.confirmOrderBtn}
          onClick={() => {
            handleSubmit(handleConfirmOrder)();
          }}
        >
          Подтвердить заказ
        </button>
      </div>
    </section>
  );
}

export default ConfirmationSidebar;
