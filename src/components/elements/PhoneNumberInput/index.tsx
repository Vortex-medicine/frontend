import React, { useEffect, useState } from "react";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import styles from "./styles.module.scss";
import classnames from "classnames";
import { v1 as uuid } from "uuid";

interface PhoneNumberInputProps {
  label?: string;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  innerSearchComponentProps?: PhoneInputProps;
  defaultCountry?: string;
  searchPlaceholder?: string;
  className?: string;
}

function PhoneNumberInput({
  label,
  inputProps,
  innerSearchComponentProps,
  className = "",
}: PhoneNumberInputProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const { id = uuid(), required = false } = inputProps || {};

  useEffect(() => {
    function handleResize() {
      if (/Android|iPhone/i.test(navigator.userAgent)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const phoneInputContainerClasses = classnames(styles.phoneInput, {
    [styles.phoneInputMobile]: isMobile,
  });

  const inputWrapperClasses = classnames(className, styles.inputWrapper);
  const labelClasses = classnames(styles.label, {
    [styles.labelInputFocused]: isFocused,
  });

  return (
    <div className={inputWrapperClasses}>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
          {required && <span className={styles.starRequired}> *</span>}
        </label>
      )}
      <PhoneInput
        inputProps={{ ...inputProps, id }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...{
          ...innerSearchComponentProps,
          containerClass: classnames(
            phoneInputContainerClasses,
            innerSearchComponentProps?.containerClass
          ),
        }}
      />
    </div>
  );
}

export default PhoneNumberInput;
