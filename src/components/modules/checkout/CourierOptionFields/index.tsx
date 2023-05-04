import React from "react";
import styles from "./styles.module.scss";
import TextInput from "@/components/elements/TextInput";
import classnames from "classnames";

function CourierOptionFields() {
  return (
    <div className={styles.courierOptionFieldsWrapper}>
      <TextInput
        className={styles.input}
        label={"Город"}
        inputProps={{ required: true }}
      />
      <TextInput
        className={styles.input}
        label={"Адрес"}
        inputProps={{ required: true }}
      />
      <TextInput
        className={classnames(styles.input, styles.zipInput)}
        label={"Почтовый индекс"}
        inputProps={{ required: true }}
      />
    </div>
  );
}

export default CourierOptionFields;
