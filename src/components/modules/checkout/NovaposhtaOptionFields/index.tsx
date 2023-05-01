import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useCheckout } from "@/context/checkout/Context";
import { TextField } from "@mui/material";
import { NovaposhtaWarehouse, UkrainianCity } from "@/types/checkout";
import SearchSelectMenuList from "@/components/elements/SearchSelectMenuList";
import SearchSelect from "@/components/elements/SearchSelect";

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

  const [selectedCity, setSelectedCity] = useState<
    UkrainianCityWithLabel | undefined
  >(labeledDefaultSelectedCity);

  const [selectedWarehouse, setSelectedWarehouse] = useState<
    NovaposhtaWarehouseWithLabel | undefined
  >(labeledDefaultWarehouses[0]);

  return (
    <div className={styles.novaposhtaFieldsWrapper}>
      <SearchSelect
        disableClearable
        renderInput={(params) => <TextField {...params} />}
        options={labeledUkrainianCities}
        renderOption={(props, option, state) =>
          [props, option, state.index] as React.ReactNode
        }
        ListboxComponent={SearchSelectMenuList}
        value={selectedCity}
        getOptionLabel={(option) => option.label}
        onChange={(event, newValue) => {
          setSelectedCity(newValue);
        }}
      />
      <SearchSelect
        open
        disableClearable
        renderInput={(params) => <TextField {...params} />}
        options={labeledDefaultWarehouses}
        renderOption={(props, option, state) =>
          [props, option, state.index] as React.ReactNode
        }
        ListboxComponent={SearchSelectMenuList}
        getOptionLabel={(option) => option.label}
        value={selectedWarehouse}
        onChange={(event, newValue) => {
          setSelectedWarehouse(newValue);
        }}
      />
    </div>
  );
}

export default NovaposhtaOptionFields;
