import DefaultLayout from "@/components/layouts/Default";
import SinusGeneratorSchemaPage from "@/components/templates/SinusGeneratorSchemaPage";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function SinusGeneratorSchema() {
  return (
    <DefaultLayout>
      <SinusGeneratorSchemaPage />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "sinus-generator-schema",
      ])),
    },
  };
}

export default SinusGeneratorSchema;
