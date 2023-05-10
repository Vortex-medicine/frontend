import React from "react";
import styles from "./styles.module.scss";
import TextInput from "@/components/elements/TextInput";
import { useFormContext } from "react-hook-form";
import FieldErrorMessage from "@/components/elements/FieldErrorMessage";

function CourierOptionFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.courierOptionFieldsWrapper}>
      <div className={styles.input}>
        <TextInput
          label={"Місто"}
          inputProps={{ required: true, ...register("courierCityInput") }}
          errorState={!!errors.courierCityInput}
        />
        {errors.courierCityInput && (
          <FieldErrorMessage
            className={styles.errorMessage}
            message={errors.courierCityInput.message as string}
          />
        )}
      </div>

      <div className={styles.input}>
        <TextInput
          label={"Адреса"}
          inputProps={{ required: true, ...register("courierAddressInput") }}
          errorState={!!errors.courierAddressInput}
        />
        {errors.courierAddressInput && (
          <FieldErrorMessage
            className={styles.errorMessage}
            message={errors.courierAddressInput.message as string}
          />
        )}
      </div>

      <div className={styles.input}>
        <TextInput
          className={styles.zipInput}
          label={"Поштовий індекс"}
          inputProps={{ required: true, ...register("courierZipInput") }}
          errorState={!!errors.courierZipInput}
        />
        {errors.courierZipInput && (
          <FieldErrorMessage
            className={styles.errorMessage}
            message={errors.courierZipInput.message as string}
          />
        )}
      </div>
    </div>
  );
}

export default CourierOptionFields;
