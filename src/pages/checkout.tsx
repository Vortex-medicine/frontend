import DefaultLayout from "@/components/layouts/Default";
import CheckoutPage from "@/components/templates/CheckoutPage";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Checkout() {
  return (
    <DefaultLayout>
      <CheckoutPage />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "checkout"])),
    },
  };
}
