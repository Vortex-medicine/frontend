import React, { useState, FocusEvent } from "react";
import styles from "./styles.module.scss";
import { v1 as uuid } from "uuid";
import classnames from "classnames";

interface TextInputProps {
  label?: string;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  className?: string;
}

function TextInput({ inputProps, label, className = "" }: TextInputProps) {
  const [focused, setFocused] = useState(false);
  const {
    id = uuid(),
    required = false,
    className: inputClassName,
    onFocus,
    onBlur,
  } = inputProps || {};

  const inputWrapperClasses = classnames(className, styles.inputWrapper);
  const inputClasses = classnames(styles.input, inputClassName);
  const labelClasses = classnames(styles.label, {
    [styles.labelInputFocused]: focused,
  });

  function handleInputOnFocus(event: FocusEvent<HTMLInputElement>) {
    setFocused(true);
    onFocus?.(event);
  }

  function handleInputOnBlur(event: FocusEvent<HTMLInputElement>) {
    setFocused(false);
    onBlur?.(event);
  }

  return (
    <div className={inputWrapperClasses}>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
          {required && <span className={styles.starRequired}> *</span>}
        </label>
      )}
      <input
        type="text"
        {...{ ...inputProps, id }}
        className={inputClasses}
        required={required}
        onFocus={handleInputOnFocus}
        onBlur={handleInputOnBlur}
      />
    </div>
  );
}

export default TextInput;
