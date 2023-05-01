import React from "react";
import "react-phone-input-2/lib/material.css";
import styles from "./styles.module.scss";
import TextInput from "@/components/elements/TextInput";
import PhoneNumberInput from "@/components/elements/PhoneNumberInput";

function ContactInfo() {
  return (
    <section className={styles.contactInfoSection}>
      <h2 className={styles.heading}>Контактные данные получателя заказа</h2>
      <div className={styles.fullNameInputsWrapper}>
        <TextInput
          className={styles.userDataInput}
          label="Имя"
          inputProps={{ required: true }}
        />
        <TextInput
          className={styles.userDataInput}
          label="Фамилия"
          inputProps={{ required: true }}
        />
      </div>
      <div className={styles.phoneNumberEmailInputsWrapper}>
        <PhoneNumberInput
          label="Номер телефона"
          innerSearchComponentProps={{
            country: "ua",
            countryCodeEditable: false,
            enableSearch: true,
            searchPlaceholder: "Поиск",
          }}
          inputProps={{ required: true }}
        />
        <TextInput
          className={styles.userDataInput}
          label="Электронная почта"
          inputProps={{ required: true, type: "email" }}
        />
      </div>
    </section>
  );
}

export default ContactInfo;
