import React, { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss";
import Radio from "@/components/elements/Radio";

function Delivery() {
  const [selectedDeliveryOption, setSelectedDeliveryOption] =
    useState("novaposhta");

  function handleRadioOnChange(e: ChangeEvent<HTMLInputElement>) {
    setSelectedDeliveryOption(e.target.value);
  }

  return (
    <section className={styles.deliverySection}>
      <h2 className={styles.heading}>Доставка</h2>
      <div className={styles.ukraineSubgroup}>
        <p className={styles.radioSubgroupLabel}>По Украине</p>
        <div className={styles.novaposhtaOptionWrapper}>
          <Radio
            className={styles.radio}
            label="Самовывоз с Новой Почты"
            inputProps={{
              checked: selectedDeliveryOption === "novaposhta",
              value: "novaposhta",
              onChange: handleRadioOnChange,
            }}
          />
          <div className={styles.novaposhtaOptionFieldsWrapper}></div>
        </div>
        <Radio
          className={styles.radio}
          label="Курьер на ваш адрес"
          inputProps={{
            checked: selectedDeliveryOption === "courier",
            value: "courier",
            onChange: handleRadioOnChange,
          }}
        />
      </div>
      <div className={styles.worldwideSubgroup}>
        <p className={styles.radioSubgroupLabel}>или</p>
        <Radio
          className={styles.radio}
          label="По миру"
          inputProps={{
            checked: selectedDeliveryOption === "worldwide",
            value: "worldwide",
            onChange: handleRadioOnChange,
          }}
        />
      </div>
    </section>
  );
}

export default Delivery;
