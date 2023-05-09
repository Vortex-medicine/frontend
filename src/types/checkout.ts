export type CityId = string;
export type CityName = string;

export interface UkrainianCity {
  id: CityId;
  name: CityName;
}

export type DeliveryOption = "novaposhta" | "courier" | "worldwide";

export interface UkrainianCityWithLabel extends UkrainianCity {
  label: string;
}

export type WarehouseId = string;
export type WarehouseName = string;

export interface NovaposhtaWarehouse {
  id: WarehouseId;
  name: WarehouseName;
}

export interface CheckoutProps {
  ukrainianCities: UkrainianCity[];
  defaultSelectedCity: UkrainianCity | null;
  defaultWarehouses: NovaposhtaWarehouse[];
}
