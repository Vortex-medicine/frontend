import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Radio from "@/components/elements/Radio";
import NovaposhtaOptionFields from "../NovaposhtaOptionFields";
import CourierOptionFields from "@/components/modules/checkout/CourierOptionFields";
import WorldwideOptionFields from "@/components/modules/checkout/WorldwideOptionFields";
import classnames from "classnames";

function Delivery() {
  const [selectedDeliveryOption, setSelectedDeliveryOption] =
    useState("novaposhta");

  const novaposhtaOptionContentWrapperElem = useRef<HTMLDivElement | null>(
    null
  );
  const courierOptionContentWrapperElem = useRef<HTMLDivElement | null>(null);
  const worldwideOptionContentWrapperElem = useRef<HTMLDivElement | null>(null);

  const novaposhtaRadioWrapperElem = useRef(null);
  const novaposhtaRadioIconElem = useRef(null);
  const novaposhtaRadioLabelElem = useRef(null);

  const courierRadioWrapperElem = useRef(null);
  const courierRadioIconElem = useRef(null);
  const courierRadioLabelElem = useRef(null);

  const worldwideRadioWrapperElem = useRef(null);
  const worldwideRadioIconElem = useRef(null);
  const worldwideRadioLabelElem = useRef(null);

  const [warehousesNotFound, setWarehousesNotFound] = useState(false);
  const [warehousesNotAvailable, setWarehousesNotAvailable] = useState(false);

  useEffect(() => {
    function resizeSingleRadio(
      wrapperElem: HTMLLabelElement,
      iconElem: HTMLSpanElement,
      labelElem: HTMLSpanElement
    ) {
      wrapperElem.style.width = `auto`;

      const iconMargin = parseFloat(getComputedStyle(iconElem).marginRight);
      const iconElemWidth = iconElem.getBoundingClientRect().width;
      const labelElemWidth = labelElem.getBoundingClientRect().width;

      const radioContentWidth = iconMargin + iconElemWidth + labelElemWidth;
      wrapperElem.style.width = `${radioContentWidth}px`;
    }

    function resizeRadios() {
      if (
        novaposhtaRadioWrapperElem.current &&
        novaposhtaRadioIconElem.current &&
        novaposhtaRadioLabelElem.current
      ) {
        resizeSingleRadio(
          novaposhtaRadioWrapperElem.current,
          novaposhtaRadioIconElem.current,
          novaposhtaRadioLabelElem.current
        );
      }

      if (
        courierRadioWrapperElem.current &&
        courierRadioIconElem.current &&
        courierRadioLabelElem.current
      ) {
        resizeSingleRadio(
          courierRadioWrapperElem.current,
          courierRadioIconElem.current,
          courierRadioLabelElem.current
        );
      }

      if (
        worldwideRadioWrapperElem.current &&
        worldwideRadioIconElem.current &&
        worldwideRadioLabelElem.current
      ) {
        resizeSingleRadio(
          worldwideRadioWrapperElem.current,
          worldwideRadioIconElem.current,
          worldwideRadioLabelElem.current
        );
      }
    }

    resizeRadios();

    window.addEventListener("resize", resizeRadios);
    return () => window.removeEventListener("resize", resizeRadios);
  }, [
    novaposhtaRadioWrapperElem,
    novaposhtaRadioIconElem,
    novaposhtaRadioLabelElem,
    courierRadioWrapperElem,
    courierRadioIconElem,
    courierRadioLabelElem,
    worldwideRadioWrapperElem,
    worldwideRadioIconElem,
    worldwideRadioLabelElem,
  ]);

  function handleRadioOnChange(e: ChangeEvent<HTMLInputElement>) {
    setSelectedDeliveryOption(e.target.value);
  }

  const [maxHeights, setMaxHeights] = useState({
    novaposhta: "0px",
    courier: "0px",
    worldwide: "0px",
  });

  useEffect(() => {
    const newMaxHeights = {
      novaposhta:
        selectedDeliveryOption === "novaposhta" &&
        novaposhtaOptionContentWrapperElem.current
          ? `${novaposhtaOptionContentWrapperElem.current.scrollHeight}px`
          : "0px",
      courier:
        selectedDeliveryOption === "courier" &&
        courierOptionContentWrapperElem.current
          ? `${courierOptionContentWrapperElem.current.scrollHeight}px`
          : "0px",
      worldwide:
        selectedDeliveryOption === "worldwide" &&
        worldwideOptionContentWrapperElem.current
          ? `${worldwideOptionContentWrapperElem.current.scrollHeight}px`
          : "0px",
    };

    setMaxHeights(newMaxHeights);
  }, [
    selectedDeliveryOption,
    novaposhtaOptionContentWrapperElem,
    courierOptionContentWrapperElem,
    worldwideOptionContentWrapperElem,
    warehousesNotFound,
    warehousesNotAvailable,
  ]);

  return (
    <section className={styles.deliverySection}>
      <h2 className={styles.heading}>Доставка</h2>
      <div className={styles.ukraineSubgroup}>
        <p
          className={classnames(
            styles.radioSubgroupLabel,
            styles.ukraineSubgroupLabel
          )}
        >
          По Украине
        </p>
        <div
          className={classnames(
            styles.novaposhtaOptionWrapper,
            styles.optionWrapper,
            {
              [styles.optionWrapperOpened]:
                selectedDeliveryOption === "novaposhta",
            }
          )}
        >
          <div className={styles.radioWrapper}>
            <Radio
              className={styles.radio}
              label={"Самовывоз с\u00A0Новой Почты"}
              inputProps={{
                checked: selectedDeliveryOption === "novaposhta",
                value: "novaposhta",
                onChange: handleRadioOnChange,
              }}
              wrapperRef={novaposhtaRadioWrapperElem}
              radioIconRef={novaposhtaRadioIconElem}
              labelTextRef={novaposhtaRadioLabelElem}
            />
          </div>
          <div
            ref={novaposhtaOptionContentWrapperElem}
            className={styles.optionContentWrapper}
            style={{
              maxHeight: maxHeights.novaposhta,
            }}
          >
            <NovaposhtaOptionFields
              setWarehousesNotFound={setWarehousesNotFound}
              setWarehousesNotAvailable={setWarehousesNotAvailable}
              warehousesNotFound={warehousesNotFound}
              warehousesNotAvailable={warehousesNotAvailable}
            />
          </div>
        </div>
        <div
          className={classnames(
            styles.courierOptionWrapper,
            styles.optionWrapper,
            {
              [styles.optionWrapperOpened]:
                selectedDeliveryOption === "courier",
            }
          )}
        >
          <div className={styles.radioWrapper}>
            <Radio
              className={styles.radio}
              label={"Курьер на\u00A0ваш адрес"}
              inputProps={{
                checked: selectedDeliveryOption === "courier",
                value: "courier",
                onChange: handleRadioOnChange,
              }}
              wrapperRef={courierRadioWrapperElem}
              radioIconRef={courierRadioIconElem}
              labelTextRef={courierRadioLabelElem}
            />
          </div>
          <div
            className={styles.optionContentWrapper}
            ref={courierOptionContentWrapperElem}
            style={{
              maxHeight: maxHeights.courier,
            }}
          >
            <CourierOptionFields />
          </div>
        </div>
      </div>
      <div className={styles.worldwideSubgroup}>
        <p
          className={classnames(
            styles.radioSubgroupLabel,
            styles.worldwideSubgroupLabel
          )}
        >
          или
        </p>
        <div
          className={classnames(
            styles.worldwideOptionWrapper,
            styles.optionWrapper,
            {
              [styles.optionWrapperOpened]:
                selectedDeliveryOption === "worldwide",
            }
          )}
        >
          <div className={styles.radioWrapper}>
            <Radio
              className={styles.radio}
              label={"По\u00A0миру"}
              inputProps={{
                checked: selectedDeliveryOption === "worldwide",
                value: "worldwide",
                onChange: handleRadioOnChange,
              }}
              wrapperRef={worldwideRadioWrapperElem}
              radioIconRef={worldwideRadioIconElem}
              labelTextRef={worldwideRadioLabelElem}
            />
          </div>
          <div
            className={styles.optionContentWrapper}
            ref={worldwideOptionContentWrapperElem}
            style={{
              maxHeight: maxHeights.worldwide,
            }}
          >
            <WorldwideOptionFields />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delivery;
