import {
  CombinedSchemaType,
  CourierSchemaType,
  NovaposhtaSchemaWithApiType,
  WorldwideSchemaType,
} from "./order-form-schema";
import { DeliveryOption } from "@/types/checkout";
import { OrderItem } from "@/types/product";

export interface NovaposhtaDeliveryData {
  city: string;
  warehouse: string;
}

export interface CourierDeliveryData {
  city: string;
  address: string;
  zip: string;
}

export interface WorldwideDeliveryData {
  country: string;
  city: string;
  address: string;
  zip: string;
}

export interface FormatOrderObject {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  delivery: {
    kind: DeliveryOption;
    data: NovaposhtaDeliveryData | CourierDeliveryData | WorldwideDeliveryData;
  };
  orderedProducts: OrderItem[];
}

export default function formatOrderObject(
  formData: CombinedSchemaType,
  selectedDeliveryOption: DeliveryOption,
  orderItems: OrderItem[]
) {
  let deliveryData;

  switch (selectedDeliveryOption) {
    case "novaposhta": {
      deliveryData = {
        city: (formData as NovaposhtaSchemaWithApiType).novaposhtaCitySelect
          .name,
        warehouse: (formData as NovaposhtaSchemaWithApiType)
          .novaposhtaWarehouseSelect.name,
      };
      break;
    }
    case "courier": {
      deliveryData = {
        city: (formData as CourierSchemaType).courierCityInput,
        address: (formData as CourierSchemaType).courierAddressInput,
        zip: (formData as CourierSchemaType).courierZipInput,
      };
      break;
    }
    case "worldwide": {
      deliveryData = {
        country: (formData as WorldwideSchemaType).worldwideCountrySelect.label,
        city: (formData as WorldwideSchemaType).worldwideCityInput,
        address: (formData as WorldwideSchemaType).worldwideAddressInput,
        zip: (formData as WorldwideSchemaType).worldwideZipInput,
      };
      break;
    }
    default: {
      const _exhaustiveCheck: never = selectedDeliveryOption;
      throw new Error(
        `Unhandled delivery option: ${JSON.stringify(_exhaustiveCheck)}`
      );
    }
  }

  const formattedOrderObject: FormatOrderObject = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phoneNumber: formData.phoneNumber.formattedValue,
    delivery: {
      kind: selectedDeliveryOption,
      data: deliveryData,
    },
    orderedProducts: orderItems,
  };

  return formattedOrderObject;
}
