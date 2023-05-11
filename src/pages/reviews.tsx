import DefaultLayout from "@/components/layouts/Default";
import ReviewsPage from "@/components/templates/ReviewsPage";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Reviews(): JSX.Element {
  return (
    <DefaultLayout>
      <ReviewsPage />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "reviews"])),
    },
  };
}

export default Reviews;
