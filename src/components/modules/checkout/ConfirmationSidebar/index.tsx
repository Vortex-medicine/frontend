import React, { useEffect, useState } from "react";
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
import { DeliveryOption, UkrainianCityWithLabel } from "@/types/checkout";
import axios from "axios";
import { BACKEND_URL } from "@/constants/api-urls";
import { setOrderIsConfirmed } from "../../../../utils/cart-actions";
import ConfirmOrderBtn from "@/components/elements/ConfirmOrderBtn";
import { useProducts } from "@/context/products/Context";

interface ConfirmationSidebarProps {
  selectedDeliveryOption: DeliveryOption;
  cities: UkrainianCityWithLabel[];
  warehousesNotAvailable: boolean;
  warehousesNotFound: boolean;
}

// function sleep(duration: number) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, duration);
//   });
// }

function ConfirmationSidebar({
  selectedDeliveryOption,
  cities,
  warehousesNotAvailable,
  warehousesNotFound,
}: ConfirmationSidebarProps): JSX.Element {
  const { items, orderIsConfirmed } = useCart();
  const { products: allProducts } = useProducts();
  const {
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<CombinedSchemaType>();
  const cartDispatch = useCartDispatch();
  const router = useRouter();

  const itemsTotalQuantity = getCartItemsTotalQuantity(items);
  const itemsTotalPrice = getCartItemsTotalPrice(items, allProducts);
  const orderItems = getAllOrderItemsFromCart(items, allProducts);

  const [backendRequestInProgress, setBackendRequestInProgress] =
    useState(false);

  const [backendRequestError, setBackendRequestError] = useState(false);

  async function handleConfirmOrder(data: CombinedSchemaType) {
    const formattedData = formatOrderObject(
      data,
      selectedDeliveryOption,
      cities,
      warehousesNotAvailable,
      orderItems
    );
    console.log("Form data:", formattedData);
    console.log("Form errors:", errors);
    console.log("Form is valid:", isValid);

    try {
      setBackendRequestInProgress(true);
      setBackendRequestError(false);
      await axios.post(`${BACKEND_URL}/orders`, formattedData);
      // await sleep(3000);
      // throw new Error("test error");
      setOrderIsConfirmed(cartDispatch, true);
    } catch (error) {
      setBackendRequestInProgress(false);
      setBackendRequestError(true);
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
        <h2 className={styles.heading}>Разом</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.orderSummaryItem}>
            <p className={styles.orderSummaryItemLabel}>Кількість товарів:</p>
            <p className={styles.orderSummaryItemValue}>{itemsTotalQuantity}</p>
          </div>
          <div className={styles.orderSummaryItem}>
            <p className={styles.orderSummaryItemLabel}>Загальна сума:</p>
            <p className={styles.orderSummaryItemValue}>{itemsTotalPrice} ₴</p>
          </div>
        </div>
        <div className={styles.confirmBtnAndErrorWrapper}>
          <ConfirmOrderBtn
            handleSubmit={() => {
              console.log("selectedDeliveryOption: ", selectedDeliveryOption);
              console.log("warehousesNotFound: ", warehousesNotFound);
              if (
                selectedDeliveryOption === "novaposhta" &&
                warehousesNotFound
              ) {
                const citySelectElem =
                  document.getElementById("citySelectWrapper");
                if (citySelectElem) {
                  const y =
                    citySelectElem.getBoundingClientRect().top + scrollY - 160; // 50 is the offset
                  window.scroll({
                    top: y,
                    behavior: "smooth",
                  });
                }
              } else {
                handleSubmit(handleConfirmOrder)();
              }
            }}
            loading={backendRequestInProgress}
          />
          {backendRequestError && (
            <p className={styles.backendRequestErrorMessage}>
              Виникла помилка, спробуйте ще раз!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ConfirmationSidebar;
