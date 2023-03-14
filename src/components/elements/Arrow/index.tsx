import React, { forwardRef } from "react";
import styles from "./styles.module.scss";
import { ClassName } from "@/types/common";
import classnames from "classnames";

type ArrowType = "vertical" | "horizontal";

interface ArrowProps {
  type: ArrowType;
  className?: ClassName;
}

const Arrow = forwardRef<HTMLDivElement, ArrowProps>(function Arrow(
  { type, className = "" },
  ref
): JSX.Element {
  let arrowTypeClass;

  switch (type) {
    case "vertical":
      arrowTypeClass = styles.arrowVertical;
      break;
    case "horizontal":
      arrowTypeClass = styles.arrowHorizontal;
      break;
    default:
      const exhaustiveCheck: never = type;
      arrowTypeClass = exhaustiveCheck;
  }

  const arrowClassNames = classnames(className, styles.arrow, arrowTypeClass);

  return <div ref={ref} className={arrowClassNames}></div>;
});

export default Arrow;
