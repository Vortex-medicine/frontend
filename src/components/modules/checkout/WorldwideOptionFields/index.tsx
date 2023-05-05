import React from "react";
import styles from "./styles.module.scss";
import TextInput from "@/components/elements/TextInput";
import CountrySelect from "@/components/elements/CountrySelect";

function WorldwideOptionFields() {
  return (
    <div className={styles.worldwideOptionFieldsWrapper}>
      <CountrySelect
        label={"Страна"}
        required
        className={styles.countrySelect}
      />
      <TextInput
        label={"Город"}
        inputProps={{ required: true }}
        className={styles.cityInput}
      />
      <TextInput
        label={"Адрес"}
        inputProps={{ required: true }}
        className={styles.addressInput}
      />
      <TextInput
        label={"Почтовый индекс"}
        inputProps={{ required: true }}
        className={styles.zipInput}
      />
    </div>
  );
}

export default WorldwideOptionFields;
