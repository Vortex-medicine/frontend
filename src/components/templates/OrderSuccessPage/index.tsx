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
import { useProducts } from "@/context/products/Context";

function OrderSuccessPage() {
  const { products: allProducts } = useProducts();
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
    items.length > 0 ? items : localItems,
    allProducts
  );

  return showPage ? (
    <Container>
      <section className={styles.receiptSection}>
        <div className={styles.allContentWrapper}>
          <h1 className={styles.heading}>Дякуємо за замовлення!</h1>
          <p>
            Ми зв&apos;яжемося з&nbsp;вами якнайшвидше, щоб&nbsp;ще&nbsp;раз
            підтвердити замовлення та&nbsp;уточнити всі&nbsp;деталі щодо
            доставки та&nbsp;оплати.
          </p>
          <p className={styles.orderSummaryDescr}>
            Ви замовили товарів на загальну суму{" "}
            <span className={styles.totalPrice}>{totalPrice} ₴:</span>
          </p>
          <CheckoutProductsList
            variant={"order-success"}
            cartItems={confirmedOrderProducts}
          />
        </div>
        <Link className={styles.mainPageBtn} href="/">
          На головну
        </Link>
      </section>
    </Container>
  ) : null;
}

export default OrderSuccessPage;
