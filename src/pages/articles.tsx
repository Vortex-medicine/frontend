import DefaultLayout from "@/components/layouts/Default";
import ArticlesPage from "@/components/templates/ArticlesPage";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Articles() {
  return (
    <DefaultLayout>
      <ArticlesPage />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "articles"])),
    },
  };
}

export default Articles;
