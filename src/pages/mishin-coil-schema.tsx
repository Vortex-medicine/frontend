import DefaultLayout from "@/components/layouts/Default";
import MishinCoilSchemaPage from "@/components/templates/MishinCoilSchemaPage";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function MishinCoilSchema() {
  return (
    <DefaultLayout>
      <MishinCoilSchemaPage />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "mishin-coil-schema",
      ])),
    },
  };
}

export default MishinCoilSchema;
