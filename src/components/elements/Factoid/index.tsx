import React from "react";
import styles from "./styles.module.scss";
import { ClassName } from "@/types/common";
import classNames from "classnames";

interface FactoidProps {
  text: string;
  className?: ClassName;
}

function Factoid({ text, className }: FactoidProps) {
  const factoidClasses = classNames(styles.factoid, className);

  return (
    <div className={factoidClasses}>
      <div className={styles.factoidCircle} />
      <p>{text}</p>
    </div>
  );
}

export default Factoid;
