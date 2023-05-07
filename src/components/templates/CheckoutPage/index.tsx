import Container from "@/components/elements/Container";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import ContactInfo from "@/components/modules/checkout/ContactInfo";
import Delivery from "@/components/modules/checkout/Delivery";
import ProductsInCart from "@/components/modules/checkout/ProductsInCart";
import { useCart } from "@/context/cart/Context";
import { useRouter } from "next/router";
import ConfirmationSidebar from "@/components/modules/checkout/ConfirmationSidebar";
import { PAGE_HREFS } from "@/constants/navigation-links";

function CheckoutPage() {
  const { items, itemsAreLoading } = useCart();
  const [showPage, setShowPage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!itemsAreLoading && items.length === 0) {
      router.push(PAGE_HREFS.KITS);
    } else {
      if (!showPage && items.length > 0) {
        setShowPage(true);
      }
    }
  }, [items, itemsAreLoading, router, showPage]);

  const methods = useForm();

  return showPage ? (
    <FormProvider {...methods}>
      <Container>
        <h1 className={styles.heading}>Оформление заказа</h1>
        <div className={styles.allContentWrapper}>
          <div className={styles.mainContentWrapper}>
            <ContactInfo />
            <Delivery />
            <ProductsInCart />
          </div>
          <ConfirmationSidebar />
        </div>
      </Container>
    </FormProvider>
  ) : null;
}

export default CheckoutPage;
