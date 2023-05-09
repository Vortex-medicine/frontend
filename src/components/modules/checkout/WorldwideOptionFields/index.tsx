import React from "react";
import styles from "./styles.module.scss";
import TextInput from "@/components/elements/TextInput";
import CountrySelect from "@/components/elements/CountrySelect";
import { Controller, useFormContext } from "react-hook-form";
import countries from "@/constants/countries";
import FieldErrorMessage from "@/components/elements/FieldErrorMessage";

function WorldwideOptionFields() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.worldwideOptionFieldsWrapper}>
      <Controller
        control={control}
        name="worldwideCountrySelect"
        defaultValue={countries.find((country) => country.label === "Poland")}
        render={({ field }) => (
          <CountrySelect
            label={"Страна"}
            required
            className={styles.countrySelect}
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />

      <div className={styles.cityInputWrapper}>
        <TextInput
          label={"Город"}
          inputProps={{ required: true, ...register("worldwideCityInput") }}
          className={styles.cityInput}
          errorState={!!errors.worldwideCityInput}
        />
        {errors.worldwideCityInput && (
          <FieldErrorMessage
            className={styles.errorMessage}
            message={errors.worldwideCityInput.message as string}
          />
        )}
      </div>

      <div className={styles.addressInputWrapper}>
        <TextInput
          label={"Адрес"}
          inputProps={{ required: true, ...register("worldwideAddressInput") }}
          className={styles.addressInput}
          errorState={!!errors.worldwideAddressInput}
        />
        {errors.worldwideAddressInput && (
          <FieldErrorMessage
            className={styles.errorMessage}
            message={errors.worldwideAddressInput.message as string}
          />
        )}
      </div>

      <div className={styles.zipInputWrapper}>
        <TextInput
          label={"Почтовый индекс"}
          inputProps={{ required: true, ...register("worldwideZipInput") }}
          className={styles.zipInput}
          errorState={!!errors.worldwideZipInput}
        />
        {errors.worldwideZipInput && (
          <FieldErrorMessage
            className={styles.errorMessage}
            message={errors.worldwideZipInput.message as string}
          />
        )}
      </div>
    </div>
  );
}

export default WorldwideOptionFields;
