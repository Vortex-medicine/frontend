import DefaultLayout from "@/components/layouts/Default";
import TreatmentPage from "@/components/templates/TreatmentPage";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Treatment() {
  return (
    <DefaultLayout>
      <TreatmentPage />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "treatment"])),
    },
  };
}

export default Treatment;
