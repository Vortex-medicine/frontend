import React from "react";
import styles from "./styles.module.scss";
import { ClassName, Href, Text } from "@/types/common";
import classNames from "classnames";

interface DefaultButtonProps {
  text: Text;
  href?: Href;
  className?: ClassName;
}

type Ref = HTMLAnchorElement;

const DefaultButton = React.forwardRef<Ref, DefaultButtonProps>(
  function DefaultButton({ text, href, className = "" }, ref): JSX.Element {
    const buttonClasses = classNames(styles.button, className);

    return (
      <a className={buttonClasses} href={href} ref={ref}>
        <span>{text}</span>
      </a>
    );
  }
);

export default DefaultButton;
