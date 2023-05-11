import DefaultLayout from "@/components/layouts/Default";
import OrderSuccessPage from "@/components/templates/OrderSuccessPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function OrderSuccess() {
  return (
    <DefaultLayout>
      <OrderSuccessPage />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "order-success"])),
    },
  };
}
