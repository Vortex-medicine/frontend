import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import classnames from "classnames";

interface RadioProps {
  className?: string;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label?: string;
}

function Radio({ className, inputProps, label }: RadioProps): JSX.Element {
  const labeledWrapperClasses = classnames(styles.labeledWrapper, className);

  return (
    <label className={labeledWrapperClasses}>
      <input {...inputProps} className={styles.radioInput} type="radio" />
      <span className={styles.customRadioOuterPart}>
        <span className={styles.customRadioInnerPart} />
      </span>
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
}

export default Radio;
