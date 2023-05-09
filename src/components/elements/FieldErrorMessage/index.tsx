import React from "react";
import styles from "./styles.module.scss";
import { ClassName } from "@/types/common";
import classnames from "classnames";

interface FieldErrorMessageProps {
  message: string;
  className?: ClassName;
}

function FieldErrorMessage({
  message,
  className,
}: FieldErrorMessageProps): JSX.Element {
  return (
    <p className={classnames(styles.errorMessage, className)}>{message}</p>
  );
}

export default FieldErrorMessage;
