import Container from "@/components/elements/Container";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import ContactInfo from "@/components/modules/checkout/ContactInfo";
import Delivery from "@/components/modules/checkout/Delivery";
import ProductsInCart from "@/components/modules/checkout/ProductsInCart";
import { useCart } from "@/context/cart/Context";
import { useRouter } from "next/router";

function CheckoutPage() {
  const { items, itemsAreLoading } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (!itemsAreLoading && items.length === 0) {
      router.push("/");
    }
  }, [items, itemsAreLoading, router]);

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Container>
        <h1 className={styles.heading}>Оформление заказа</h1>
        <ContactInfo />
        <Delivery />
        <ProductsInCart />
      </Container>
    </FormProvider>
  );
}

export default CheckoutPage;
