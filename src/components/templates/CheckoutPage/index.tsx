import Container from "@/components/elements/Container";
import React from "react";
import styles from "./styles.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import ContactInfo from "@/components/modules/checkout/ContactInfo";
import Delivery from "@/components/modules/checkout/Delivery";

function CheckoutPage() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Container>
        <h1 className={styles.heading}>Оформление заказа</h1>
        <ContactInfo />
        <Delivery />
      </Container>
    </FormProvider>
  );
}

export default CheckoutPage;
