import React, { useEffect, useRef } from "react";
import { ClassName, Href, Text } from "@/types/common";
import Image from "next/image";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface TelegramButtonProps {
  text: Text;
  href: Href;
  className?: ClassName;
}

function TelegramButton({
  text,
  href,
  className = "",
}: TelegramButtonProps): JSX.Element {
  const anchorElement = useRef<HTMLAnchorElement>(null);
  const contentWrapperElement = useRef<HTMLSpanElement>(null);
  const textSpanElement = useRef<HTMLSpanElement>(null);
  const imageElement = useRef<HTMLImageElement>(null);

  useEffect(() => {
    function placeContent() {
      if (!anchorElement.current) {
        throw new Error("anchorElement is not defined");
      }

      if (!contentWrapperElement.current) {
        throw new Error("contentWrapperElement is not defined");
      }

      if (!textSpanElement.current) {
        throw new Error("textSpanElement is not defined");
      }

      if (!imageElement.current) {
        throw new Error("imageElement is not defined");
      }

      contentWrapperElement.current.style.marginLeft = `0px`;

      const anchorLeftPadding = parseFloat(
        getComputedStyle(anchorElement.current).getPropertyValue("padding-left")
      );
      const anchorWidth = anchorElement.current.offsetWidth;

      const imageWidth = imageElement.current.offsetWidth;
      const textSpanWidth = textSpanElement.current.offsetWidth;

      const contentWrapperGap = parseFloat(
        getComputedStyle(contentWrapperElement.current).getPropertyValue("gap")
      );

      const marginLeftValue =
        (anchorWidth - (imageWidth + contentWrapperGap + textSpanWidth)) / 2 -
        anchorLeftPadding;

      contentWrapperElement.current.style.marginLeft = `${marginLeftValue}px`;
    }

    placeContent();

    window.addEventListener("resize", placeContent);

    return () => window.removeEventListener("resize", placeContent);
  }, []);

  const buttonClasses = classNames(styles.button, className);

  return (
    <a
      ref={anchorElement}
      href={href}
      target="_blank"
      rel="noreferrer"
      className={buttonClasses}
    >
      <span ref={contentWrapperElement} className={styles.buttonContentWrapper}>
        <Image
          ref={imageElement}
          className={styles.icon}
          src="/tg-icon.png"
          alt="telegram icon"
          width={27}
          height={22}
          quality={100}
        />
        <span className={styles.text}>
          <span ref={textSpanElement}>{text}</span>
        </span>
      </span>
    </a>
  );
}

export default TelegramButton;
