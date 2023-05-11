import DefaultLayout from "@/components/layouts/Default";
import KitsPage from "@/components/templates/KitsPage";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Kits() {
  return (
    <DefaultLayout>
      <KitsPage />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "kits"])),
    },
  };
}

export default Kits;
