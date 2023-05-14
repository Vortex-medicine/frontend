import DefaultLayout from "@/components/layouts/Default";
import KitsPage from "@/components/templates/KitsPage";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllProducts from "../api/get-all-products";
import { ProductData } from "@/types/product";

interface KitsProps {
  products: ProductData[];
}

function Kits({ products }: KitsProps): JSX.Element {
  return (
    <DefaultLayout>
      <KitsPage products={products} />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const products = await getAllProducts();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "kits"])),
      products,
    },
  };
}

export default Kits;
