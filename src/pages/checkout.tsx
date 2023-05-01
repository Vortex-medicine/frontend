import DefaultLayout from "@/components/layouts/Default";
import CheckoutPage from "@/components/templates/CheckoutPage";
import { CheckoutContext } from "@/context/checkout/Context";
import { CheckoutProps } from "@/types/checkout";
import getWarehousesByCityId from "api/get-novaposhta-warehouses";
import getUkrainianCities from "api/get-ukrainian-cities";
import React from "react";

export default function Checkout(props: CheckoutProps) {
  return (
    <CheckoutContext.Provider value={props}>
      <DefaultLayout>
        <CheckoutPage />
      </DefaultLayout>
    </CheckoutContext.Provider>
  );
}

export async function getServerSideProps(): Promise<{ props: CheckoutProps }> {
  const ukrainianCities = await getUkrainianCities();

  let defaultSelectedCity = ukrainianCities.find(
    (city) => city.name === "Київ"
  );
  if (!defaultSelectedCity) {
    console.log("Default city not found");
    defaultSelectedCity = ukrainianCities[0];
  }

  const defaultWarehouses = await getWarehousesByCityId(defaultSelectedCity.id);

  return {
    props: {
      ukrainianCities,
      defaultSelectedCity,
      defaultWarehouses,
    },
  };
}
