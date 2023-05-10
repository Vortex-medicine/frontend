import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  CityId,
  NovaposhtaWarehouse,
  UkrainianCity,
  UkrainianCityWithLabel,
} from "@/types/checkout";
import SearchSelect from "@/components/elements/SearchSelect";
import getWarehousesByCityId from "../../../../api/get-novaposhta-warehouses";
import TextInput from "@/components/elements/TextInput";
import { Backdrop, CircularProgress, TextField } from "@mui/material";
import getUkrainianCities from "../../../../api/get-ukrainian-cities";
import { Controller, useFormContext } from "react-hook-form";
import FieldErrorMessage from "@/components/elements/FieldErrorMessage";

interface NovaposhtaWarehouseWithLabel extends NovaposhtaWarehouse {
  label: string;
}

interface NovaposhtaOptionFieldsProps {
  cities: UkrainianCityWithLabel[];
  setCities: Dispatch<SetStateAction<UkrainianCityWithLabel[]>>;
  warehousesNotFound: boolean;
  setWarehousesNotFound: Dispatch<SetStateAction<boolean>>;
  setWarehousesNotAvailable: Dispatch<SetStateAction<boolean>>;
  warehousesNotAvailable: boolean;
}

function NovaposhtaOptionFields({
  cities,
  setCities,
  setWarehousesNotFound,
  warehousesNotFound,
  setWarehousesNotAvailable,
  warehousesNotAvailable,
}: NovaposhtaOptionFieldsProps) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const [defaultOptionsLoading, setDefaultOptionsLoading] = useState(true);

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
  }, [setCities, setWarehousesNotAvailable]);

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

  if (
    !warehousesLoading &&
    warehouses.length === 0 &&
    !warehousesNotAvailable &&
    !defaultOptionsLoading
  ) {
    if (!warehousesNotFound) {
      setWarehousesNotFound(true);
    }
  } else {
    if (warehousesNotFound) {
      setWarehousesNotFound(false);
    }
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
          <div className={styles.cityTextInputWrapper}>
            <TextInput
              className={styles.cityTextInput}
              label={"Місто"}
              inputProps={{
                required: true,
                ...register("novaposhtaCityInputNoApiCities"),
              }}
              errorState={!!errors.novaposhtaCityInputNoApiCities}
            />
            {errors.novaposhtaCityInputNoApiCities && (
              <FieldErrorMessage
                className={styles.errorMessage}
                message={
                  errors.novaposhtaCityInputNoApiCities.message as string
                }
              />
            )}
          </div>
          <div className={styles.warehouseTextInputWrapper}>
            <TextInput
              className={styles.warehouseTextInput}
              label={"Номер відділення або поштомату"}
              inputProps={{
                required: true,
                ...register("novaposhtaWarehouseInputNoApiCities"),
              }}
              errorState={!!errors.novaposhtaWarehouseInputNoApiCities}
            />
            {errors.novaposhtaWarehouseInputNoApiCities && (
              <FieldErrorMessage
                className={styles.errorMessage}
                message={
                  errors.novaposhtaWarehouseInputNoApiCities.message as string
                }
              />
            )}
          </div>
        </>
      ) : (
        <>
          <div id={"citySelectWrapper"}>
            <Controller
              control={control}
              name={"novaposhtaCitySelect"}
              defaultValue={cities[selectedCity ?? 0]}
              render={({ field: { onChange, ...field } }) => (
                <SearchSelect
                  label={"Місто"}
                  required
                  className={styles.citySearchSelect}
                  openOnFocus
                  autoHighlight
                  disableListWrap
                  disableClearable
                  options={cities}
                  value={field.value}
                  onChange={async (event, newValue) => {
                    onChange(newValue);
                    await handleCityChange(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                      }}
                    />
                  )}
                />
              )}
            />
          </div>
          {warehousesNotFound ? (
            <p className={styles.noWarehousesText}>
              <strong>
                На&nbsp;даний момент у&nbsp;вашому місті немає жодного
                доступного відділення.
              </strong>{" "}
              Виберіть кур&apos;єрську доставку, і&nbsp;ми спробуємо знайти
              оптимальний варіант, як&nbsp;вам отримати замовлення. Ви також
              можете вибрати інше місто, якщо&nbsp;зможете забрати там посилку.
            </p>
          ) : (
            <>
              {warehousesNotAvailable ? (
                <div>
                  <TextInput
                    className={styles.warehouseTextInput}
                    label={"Номер відділення або поштомату"}
                    inputProps={{
                      required: true,
                      ...register("novaposhtaWarehouseInputNoApiWarehouses"),
                    }}
                    errorState={
                      !!errors.novaposhtaWarehouseInputNoApiWarehouses
                    }
                  />
                  {errors.novaposhtaWarehouseInputNoApiWarehouses && (
                    <FieldErrorMessage
                      className={styles.errorMessage}
                      message={
                        errors.novaposhtaWarehouseInputNoApiWarehouses
                          .message as string
                      }
                    />
                  )}
                </div>
              ) : (
                <Controller
                  control={control}
                  name={"novaposhtaWarehouseSelect"}
                  defaultValue={
                    warehousesLoading
                      ? (null as unknown as NovaposhtaWarehouseWithLabel)
                      : warehouses[selectedWarehouse]
                  }
                  render={({ field: { onChange, ...field } }) => (
                    <SearchSelect
                      label={"Відділення або поштомат"}
                      required
                      className={styles.warehouseSearchSelect}
                      openOnFocus
                      autoHighlight
                      disableListWrap
                      disableClearable
                      options={warehouses}
                      value={field.value}
                      onChange={(event, newValue) => {
                        onChange(newValue);
                        handleWarehouseChange(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <React.Fragment>
                                {warehousesLoading ? (
                                  <div className={styles.spinner}>
                                    <CircularProgress
                                      color="darkGrey"
                                      size={20}
                                    />
                                  </div>
                                ) : null}
                                {params.InputProps.endAdornment}
                              </React.Fragment>
                            ),
                          }}
                        />
                      )}
                    />
                  )}
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
