import { DetailedHTMLProps, InputHTMLAttributes, Ref } from "react";
import styles from "./styles.module.scss";
import classnames from "classnames";

interface RadioProps {
  className?: string;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label?: string;
  wrapperRef?: Ref<HTMLLabelElement>;
  radioIconRef?: Ref<HTMLSpanElement>;
  labelTextRef?: Ref<HTMLSpanElement>;
}

function Radio({
  className,
  inputProps,
  label,
  wrapperRef,
  radioIconRef,
  labelTextRef,
}: RadioProps): JSX.Element {
  const labeledWrapperClasses = classnames(styles.labeledWrapper, className);

  return (
    <label
      ref={wrapperRef}
      className={classnames(labeledWrapperClasses, "radio-wrapper")}
    >
      <input {...inputProps} className={styles.radioInput} type="radio" />
      <span
        ref={radioIconRef}
        className={classnames(styles.customRadioOuterPart, "radio-icon")}
      >
        <span className={styles.customRadioInnerPart} />
      </span>
      {label && (
        <span className={classnames(styles.labelText, "radio-label-text")}>
          <span ref={labelTextRef}>{label}</span>
        </span>
      )}
    </label>
  );
}

export default Radio;
