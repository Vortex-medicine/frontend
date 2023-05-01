export type CityId = string;
export type CityName = string;

export interface UkrainianCity {
  id: CityId;
  name: CityName;
}

export type WarehouseId = string;
export type WarehouseName = string;

export interface NovaposhtaWarehouse {
  id: WarehouseId;
  name: WarehouseName;
}

export interface CheckoutProps {
  ukrainianCities: UkrainianCity[];
  defaultSelectedCity: UkrainianCity;
  defaultWarehouses: NovaposhtaWarehouse[];
}
