import DefaultLayout from "@/components/layouts/Default";
import ExperienceSharingFilesPage from "@/components/templates/ExprerienceSharingFilesPage";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function ExperienceSharingFiles() {
  return (
    <DefaultLayout>
      <ExperienceSharingFilesPage />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "experience-sharing-files",
      ])),
    },
  };
}

export default ExperienceSharingFiles;
