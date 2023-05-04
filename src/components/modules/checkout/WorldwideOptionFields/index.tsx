import React from "react";
import styles from "./styles.module.scss";
import TextInput from "@/components/elements/TextInput";
import CountrySelect from "@/components/elements/CountrySelect";

function WorldwideOptionFields() {
  return (
    <div className={styles.worldwideOptionFieldsWrapper}>
      <CountrySelect />
      <TextInput label={"Город"} inputProps={{ required: true }} />
      <TextInput label={"Адрес"} inputProps={{ required: true }} />
      <TextInput label={"Почтовый индекс"} inputProps={{ required: true }} />
    </div>
  );
}

export default WorldwideOptionFields;
