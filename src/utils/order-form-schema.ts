import * as yup from "yup";
import { CountryData } from "react-phone-input-2";
import validatePhoneNumber from "./validate-phone-number";
import { DeliveryOption, UkrainianCityWithLabel } from "@/types/checkout";

export const contactInfoSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup
    .mixed<{ data: CountryData; formattedValue: string }>()
    .test("validPhoneNumber", "phone number is too short", (value) => {
      console.log("test value", value);
      return value && validatePhoneNumber(value.data, value.formattedValue);
    })
    .required(),
});
export type ContactInfoSchemaType = yup.InferType<typeof contactInfoSchema>;

export const novaposhtaSchemaNoApiCities = yup.object().shape({
  novaposhtaCityInputNoApiCities: yup.string().required(),
  novaposhtaWarehouseInputNoApiCities: yup.string().required(),
});
export type NovaposhtaSchemaNoApiCitiesType = yup.InferType<
  typeof novaposhtaSchemaNoApiCities
>;

export const novaposhtaSchemaNoApiWarehouses = yup.object().shape({
  novaposhtaCitySelect: yup.object().required(),
  novaposhtaWarehouseInputNoApiWarehouses: yup.string().required(),
});
export type NovaposhtaSchemaNoApiWarehousesType = yup.InferType<
  typeof novaposhtaSchemaNoApiWarehouses
>;

export const novaposhtaSchemaWithApi = yup.object().shape({
  novaposhtaCitySelect: yup
    .object()
    .shape({
      name: yup.string().required(),
    })
    .required(),
  novaposhtaWarehouseSelect: yup
    .object()
    .shape({
      name: yup.string().required(),
    })
    .required(),
});
export type NovaposhtaSchemaWithApiType = yup.InferType<
  typeof novaposhtaSchemaWithApi
>;

export const courierSchema = yup.object().shape({
  courierCityInput: yup.string().required(),
  courierAddressInput: yup.string().required(),
  courierZipInput: yup.string().required(),
});
export type CourierSchemaType = yup.InferType<typeof courierSchema>;

export const worldwideSchema = yup.object().shape({
  worldwideCountrySelect: yup
    .object()
    .shape({
      label: yup.string().required(),
    })
    .required(),
  worldwideCityInput: yup.string().required(),
  worldwideAddressInput: yup.string().required(),
  worldwideZipInput: yup.string().required(),
});
export type WorldwideSchemaType = yup.InferType<typeof worldwideSchema>;

export type CombinedSchemaType =
  | (ContactInfoSchemaType & NovaposhtaSchemaNoApiCitiesType)
  | (ContactInfoSchemaType & NovaposhtaSchemaNoApiWarehousesType)
  | (ContactInfoSchemaType & NovaposhtaSchemaWithApiType)
  | (ContactInfoSchemaType & CourierSchemaType)
  | (ContactInfoSchemaType & WorldwideSchemaType);

export function getCombinedSchema(
  selectedDeliveryOption: DeliveryOption,
  cities: UkrainianCityWithLabel[],
  warehousesNotAvailable: boolean
) {
  let deliverySchema;

  switch (selectedDeliveryOption) {
    case "novaposhta": {
      if (cities.length === 0) {
        deliverySchema = novaposhtaSchemaNoApiCities;
      } else if (warehousesNotAvailable) {
        deliverySchema = novaposhtaSchemaNoApiWarehouses;
      } else {
        deliverySchema = novaposhtaSchemaWithApi;
      }
      break;
    }
    case "courier": {
      deliverySchema = courierSchema;
      break;
    }
    case "worldwide": {
      deliverySchema = worldwideSchema;
    }
  }

  return contactInfoSchema.concat(deliverySchema as yup.ObjectSchema<never>);
}
