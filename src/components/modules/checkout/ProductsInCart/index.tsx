import React from "react";
import styles from "./styles.module.scss";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useCart, useCartDispatch } from "@/context/cart/Context";
import { openCart } from "../../../../utils/cart-actions";
import CheckoutProduct from "components/elements/checkout-page/CheckoutProduct";

function ProductsInCart(): JSX.Element {
  const { items } = useCart();
  const cartDispatch = useCartDispatch();

  return (
    <section className={styles.productsInCartSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Товары в заказе</h2>
        <button
          className={styles.editCartBtn}
          onClick={() => openCart(cartDispatch)}
        >
          <EditRoundedIcon className={styles.editCartIcon} />
          <p className={styles.editCartBtnText}>Редактировать</p>
        </button>
      </div>
      <ul className={styles.productsList}>
        {items.map((item) => (
          <li className={styles.productsListItem} key={item.productId}>
            <CheckoutProduct productData={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductsInCart;
