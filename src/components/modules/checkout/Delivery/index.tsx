import React, { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss";
import Radio from "@/components/elements/Radio";
import NovaposhtaOptionFields from "../NovaposhtaOptionFields";
import CourierOptionFields from "@/components/modules/checkout/CourierOptionFields";
import WorldwideOptionFields from "@/components/modules/checkout/WorldwideOptionFields";

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
          <NovaposhtaOptionFields />
        </div>
        <div className={styles.courierOptionWrapper}>
          <Radio
            className={styles.radio}
            label="Курьер на ваш адрес"
            inputProps={{
              checked: selectedDeliveryOption === "courier",
              value: "courier",
              onChange: handleRadioOnChange,
            }}
          />
          <CourierOptionFields />
        </div>
      </div>
      <div className={styles.worldwideSubgroup}>
        <p className={styles.radioSubgroupLabel}>или</p>
        <div className={styles.worldwideOptionWrapper}>
          <Radio
            className={styles.radio}
            label="По миру"
            inputProps={{
              checked: selectedDeliveryOption === "worldwide",
              value: "worldwide",
              onChange: handleRadioOnChange,
            }}
          />
          <WorldwideOptionFields />
        </div>
      </div>
    </section>
  );
}

export default Delivery;
