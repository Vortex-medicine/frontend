import DefaultLayout from "@/components/layouts/Default";
import ContactsPage from "@/components/templates/ContactsPage";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Contacts() {
  return (
    <DefaultLayout>
      <ContactsPage />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "contacts"])),
    },
  };
}

export default Contacts;
