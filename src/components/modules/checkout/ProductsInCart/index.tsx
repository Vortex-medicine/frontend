import React from "react";
import styles from "./styles.module.scss";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useCart, useCartDispatch } from "@/context/cart/Context";
import { openCart } from "../../../../utils/cart-actions";
import CheckoutProductsList from "@/components/modules/CheckoutProductsList";

function ProductsInCart(): JSX.Element {
  const cartDispatch = useCartDispatch();
  const { items } = useCart();

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
      <CheckoutProductsList variant={"checkout"} cartItems={items} />
    </section>
  );
}

export default ProductsInCart;
