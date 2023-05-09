import React from "react";
import "react-phone-input-2/lib/material.css";
import styles from "./styles.module.scss";
import TextInput from "@/components/elements/TextInput";
import PhoneNumberInput from "@/components/elements/PhoneNumberInput";
import { Controller, useFormContext } from "react-hook-form";
import FieldErrorMessage from "@/components/elements/FieldErrorMessage";

function ContactInfo() {
  const {
    register,
    control,
    formState: { errors, submitCount },
    setValue,
    trigger,
  } = useFormContext();

  return (
    <section className={styles.contactInfoSection}>
      <h2 className={styles.heading}>Контактные данные получателя заказа</h2>
      <div className={styles.fullNameInputsWrapper}>
        <div className={styles.userDataInputWrapper}>
          <TextInput
            className={styles.userDataInput}
            label="Имя"
            inputProps={{
              required: true,
              ...register("firstName"),
            }}
            errorState={!!errors.firstName}
          />
          {errors.firstName && (
            <FieldErrorMessage
              className={styles.errorMessage}
              message={errors.firstName.message as string}
            />
          )}
        </div>
        <div>
          <TextInput
            className={styles.userDataInput}
            label="Фамилия"
            inputProps={{
              required: true,
              ...register("lastName"),
            }}
            errorState={!!errors.lastName}
          />
          {errors.lastName && (
            <FieldErrorMessage
              className={styles.errorMessage}
              message={errors.lastName.message as string}
            />
          )}
        </div>
      </div>
      <div className={styles.phoneNumberEmailInputsWrapper}>
        <div className={styles.userDataInputWrapper}>
          <Controller
            control={control}
            name="phoneNumber"
            defaultValue=""
            render={({ field: { ref, ...field } }) => {
              console.log("field", field);

              return (
                <PhoneNumberInput
                  {...field}
                  label="Номер телефона"
                  innerSearchComponentProps={{
                    country: "ua",
                    countryCodeEditable: false,
                    enableSearch: true,
                    searchPlaceholder: "Поиск",
                    onChange: (value, data, e, formattedValue) => {
                      const shouldValidate = submitCount > 0;
                      setValue(
                        "phoneNumber",
                        { data, formattedValue },
                        {
                          shouldValidate,
                        }
                      );
                    },
                    onBlur: () => {
                      trigger("phoneNumber");
                    },
                  }}
                  inputProps={{ ref, required: true }}
                  errorState={!!errors.phoneNumber}
                />
              );
            }}
          />
          {errors.phoneNumber && (
            <FieldErrorMessage
              className={styles.errorMessage}
              message={errors.phoneNumber.message as string}
            />
          )}
        </div>

        <div>
          <TextInput
            className={styles.userDataInput}
            label="Электронная почта"
            inputProps={{
              required: true,
              type: "email",
              ...register("email"),
            }}
            errorState={!!errors.email}
          />
          {errors.email && (
            <FieldErrorMessage
              className={styles.errorMessage}
              message={errors.email.message as string}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
