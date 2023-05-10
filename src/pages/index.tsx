import DefaultLayout from "@/components/layouts/Default";
import HomePage from "@/components/templates/HomePage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home(): JSX.Element {
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}
