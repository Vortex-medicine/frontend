import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { CityId, NovaposhtaWarehouse, UkrainianCity } from "@/types/checkout";
import SearchSelect from "@/components/elements/SearchSelect";
import getWarehousesByCityId from "../../../../api/get-novaposhta-warehouses";
import TextInput from "@/components/elements/TextInput";
import { Backdrop, CircularProgress } from "@mui/material";
import getUkrainianCities from "../../../../api/get-ukrainian-cities";

interface UkrainianCityWithLabel extends UkrainianCity {
  label: string;
}

interface NovaposhtaWarehouseWithLabel extends NovaposhtaWarehouse {
  label: string;
}

function NovaposhtaOptionFields() {
  const [defaultOptionsLoading, setDefaultOptionsLoading] = useState(true);
  const [warehousesNotAvailable, setWarehousesNotAvailable] = useState(false);
  const [cities, setCities] = useState<UkrainianCityWithLabel[]>([]);

  useEffect(() => {
    async function fetchDefaultOptions() {
      let ukrainianCities: UkrainianCity[];

      try {
        ukrainianCities = await getUkrainianCities();
      } catch (error) {
        ukrainianCities = [];
      }

      if (ukrainianCities.length > 0) {
        let defaultSelectedCity: number | null = ukrainianCities.findIndex(
          (city) => city.name === "Київ"
        );

        if (defaultSelectedCity === -1) {
          console.log("Default city not found");
          defaultSelectedCity = null;
        }

        let defaultWarehouses: NovaposhtaWarehouse[];

        if (!defaultSelectedCity) {
          defaultWarehouses = [];
        } else {
          try {
            defaultWarehouses = await getWarehousesByCityId(
              ukrainianCities[defaultSelectedCity].id
            );
          } catch (error) {
            setWarehousesNotAvailable(true);
            defaultWarehouses = [];
          }
        }

        const labeledUkrainianCities = ukrainianCities.map((city) => ({
          ...city,
          label: city.name,
        }));

        const labeledDefaultWarehouses = defaultWarehouses.map((warehouse) => ({
          ...warehouse,
          label: warehouse.name,
        }));

        setCities(labeledUkrainianCities);
        setSelectedCity(defaultSelectedCity);
        setWarehouses(labeledDefaultWarehouses);
      }

      setDefaultOptionsLoading(false);
    }

    fetchDefaultOptions();
  }, []);

  const [warehouseCache, setWarehouseCache] = useState<{
    [key: CityId]: NovaposhtaWarehouseWithLabel[];
  }>({});

  const [selectedCity, setSelectedCity] = useState<number | null>(null);

  const [warehouses, setWarehouses] = useState<NovaposhtaWarehouseWithLabel[]>(
    []
  );

  const [selectedWarehouse, setSelectedWarehouse] = useState(0);
  const [warehousesLoading, setWarehousesLoading] = useState(false);

  async function handleCityChange(newCity: UkrainianCityWithLabel) {
    if (!newCity) {
      return;
    }

    setSelectedCity(cities.findIndex((city) => city.id === newCity.id));

    if (warehouseCache[newCity.id]) {
      console.log(`warehouses for ${newCity.name} already fetched`);
      setWarehouses(warehouseCache[newCity.id]);
      setSelectedWarehouse(0);
      return;
    }

    setWarehouses([]);
    setWarehousesLoading(true);

    let newWarehouses;
    try {
      newWarehouses = await getWarehousesByCityId(newCity.id);
    } catch (error) {
      setWarehousesNotAvailable(true);
      return;
    }

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
    setWarehousesLoading(false);
  }

  function handleWarehouseChange(newWarehouse: NovaposhtaWarehouseWithLabel) {
    setSelectedWarehouse(
      warehouses.findIndex((warehouse) => warehouse.id === newWarehouse.id)
    );
  }

  let warehousesNotFound = false;
  if (
    !warehousesLoading &&
    warehouses.length === 0 &&
    !warehousesNotAvailable &&
    !defaultOptionsLoading
  ) {
    warehousesNotFound = true;
  }

  return (
    <div className={styles.novaposhtaFieldsWrapper}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={defaultOptionsLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {defaultOptionsLoading || cities.length === 0 ? (
        <>
          <TextInput
            className={styles.cityTextInput}
            label={"Город"}
            inputProps={{ required: true }}
          />
          <TextInput
            className={styles.warehouseTextInput}
            label={"Номер отделения или почтомата"}
            inputProps={{ required: true }}
          />
        </>
      ) : (
        <>
          <SearchSelect
            label={"Город"}
            required
            className={styles.citySearchSelect}
            openOnFocus
            autoHighlight
            disableListWrap
            disableClearable
            options={cities}
            value={cities[selectedCity ?? 0]}
            onChange={async (event, newValue) => {
              await handleCityChange(newValue);
            }}
          />
          {warehousesNotFound ? (
            <p className={styles.noWarehousesText}>
              <strong>
                На данный момент в вашем городе нет ни одного доступного
                отделения.{" "}
              </strong>
              Выберите курьерскую доставку, и мы постараемся найти оптимальный
              вариант, как вам получить заказ. Вы также можете выбрать другой
              город, если сможете забрать там посылку.
            </p>
          ) : (
            <>
              {warehousesNotAvailable ? (
                <TextInput
                  className={styles.warehouseTextInput}
                  label={"Номер отделения или почтомата"}
                  inputProps={{ required: true }}
                />
              ) : (
                <SearchSelect
                  label={"Отделение или почтомат"}
                  loading={warehousesLoading}
                  required
                  className={styles.warehouseSearchSelect}
                  openOnFocus
                  autoHighlight
                  disableListWrap
                  disableClearable
                  options={warehouses}
                  value={
                    warehousesLoading
                      ? (null as unknown as NovaposhtaWarehouseWithLabel)
                      : warehouses[selectedWarehouse]
                  }
                  onChange={(event, newValue) => {
                    handleWarehouseChange(newValue);
                  }}
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default NovaposhtaOptionFields;
