import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useCheckout } from "@/context/checkout/Context";
import { CityId, NovaposhtaWarehouse, UkrainianCity } from "@/types/checkout";
import SearchSelect from "@/components/elements/SearchSelect";
import getWarehousesByCityId from "../../../../api/get-novaposhta-warehouses";

interface UkrainianCityWithLabel extends UkrainianCity {
  label: string;
}

interface NovaposhtaWarehouseWithLabel extends NovaposhtaWarehouse {
  label: string;
}

function NovaposhtaOptionFields() {
  const { ukrainianCities, defaultSelectedCity, defaultWarehouses } =
    useCheckout();

  const labeledUkrainianCities = ukrainianCities.map((city) => ({
    ...city,
    label: city.name,
  }));

  const labeledDefaultSelectedCity = {
    ...defaultSelectedCity,
    label: defaultSelectedCity.name,
  };

  const labeledDefaultWarehouses = defaultWarehouses.map((warehouse) => ({
    ...warehouse,
    label: warehouse.name,
  }));

  const [warehouseCache, setWarehouseCache] = useState<{
    [key: CityId]: NovaposhtaWarehouseWithLabel[];
  }>({
    [labeledDefaultSelectedCity.id]: labeledDefaultWarehouses,
  });

  const [selectedCity, setSelectedCity] = useState<
    UkrainianCityWithLabel | undefined
  >(labeledDefaultSelectedCity);

  const [warehouses, setWarehouses] = useState<NovaposhtaWarehouseWithLabel[]>(
    labeledDefaultWarehouses
  );

  const [selectedWarehouse, setSelectedWarehouse] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleCityChange(newCity: UkrainianCityWithLabel) {
    setSelectedCity(newCity);

    if (warehouseCache[newCity.id]) {
      console.log(`warehouses for ${newCity.name} already fetched`);
      setWarehouses(warehouseCache[newCity.id]);
      setSelectedWarehouse(0);
      return;
    }

    setWarehouses([]);
    setLoading(true);

    const newWarehouses = await getWarehousesByCityId(newCity.id);
    const newLabeledWarehouses = newWarehouses.map((warehouse) => ({
      ...warehouse,
      label: warehouse.name,
    }));

    setWarehouseCache({
      ...warehouseCache,
      [newCity.id]: newLabeledWarehouses,
    });

    console.log(
      `warehouseCache length — ${Object.keys(warehouseCache).length}`
    );

    setWarehouses(newLabeledWarehouses);
    setSelectedWarehouse(0);
    setLoading(false);
  }

  function handleWarehouseChange(newWarehouse: NovaposhtaWarehouseWithLabel) {
    let index = warehouses.findIndex(
      (warehouse) => warehouse.id === newWarehouse.id
    );

    if (index === -1) {
      console.log("warehouse not found");
      index = 0;
    }

    setSelectedWarehouse(index);
  }

  let warehousesNotFound = false;
  if (!loading && warehouses.length === 0) {
    warehousesNotFound = true;
  }

  return (
    <div className={styles.novaposhtaFieldsWrapper}>
      <SearchSelect
        // open
        label={"Ваш город"}
        required
        className={styles.citySearchSelect}
        openOnFocus
        autoHighlight
        disableListWrap
        disableClearable
        options={labeledUkrainianCities}
        ListboxProps={
          {
            selectedValue: selectedCity?.label,
          } as never
        }
        value={selectedCity}
        onChange={async (event, newValue) => {
          await handleCityChange(newValue);
        }}
      />
      {warehousesNotFound ? (
        <p className={styles.noWarehousesText}>
          <strong>
            На данный момент в вашем городе нет ни одного доступного отделения.{" "}
          </strong>
          Выберите курьерскую доставку, и мы постараемся найти оптимальный
          вариант, как вам получить заказ. Вы также можете выбрать другой город,
          если сможете забрать там посылку.
        </p>
      ) : (
        <SearchSelect
          label={"Отделение"}
          loading={loading}
          required
          className={styles.warehouseSearchSelect}
          openOnFocus
          autoHighlight
          disableListWrap
          disableClearable
          options={warehouses}
          ListboxProps={
            {
              selectedValue: warehouses[selectedWarehouse]?.label,
            } as never
          }
          value={
            loading
              ? (null as unknown as NovaposhtaWarehouseWithLabel)
              : warehouses[selectedWarehouse]
          }
          onChange={(event, newValue) => {
            handleWarehouseChange(newValue);
          }}
        />
      )}
    </div>
  );
}

export default NovaposhtaOptionFields;
