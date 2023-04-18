import React, { useState } from "react";
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
  const { id = uuid(), required = false } = inputProps || {};

  const inputClasses = classnames(className, styles.inputWrapper);
  const labelClasses = classnames(styles.label, {
    [styles.labelInputFocused]: focused,
  });

  return (
    <div className={inputClasses}>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
          {required && <span className={styles.starRequired}> *</span>}
        </label>
      )}
      <input
        {...{ inputProps, id }}
        type="text"
        className={styles.input}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

export default TextInput;
