import React from "react";
import CheckoutProduct from "@/components/elements/CheckoutProduct";
import styles from "./styles.module.scss";
import classnames from "classnames";
import { CartItem } from "@/types/cart";

interface CheckoutProductsListProps {
  variant: "checkout" | "order-success";
  cartItems: CartItem[];
}

function CheckoutProductsList({
  variant,
  cartItems,
}: CheckoutProductsListProps): JSX.Element {
  return (
    <ul className={styles.productsList}>
      {cartItems.map((item) => (
        <li
          className={classnames(styles.productsListItem, {
            [styles.productsListItemCheckout]: variant === "checkout",
            [styles.productsListItemOrderSuccess]: variant === "order-success",
          })}
          key={item.productId}
        >
          <CheckoutProduct productData={item} />
        </li>
      ))}
    </ul>
  );
}

export default CheckoutProductsList;
