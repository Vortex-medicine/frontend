import { DoneRounded } from "@mui/icons-material";
import React from "react";
import styles from "./styles.module.scss";
import { ClassName } from "@/types/common";
import classNames from "classnames";

interface AddToCardButtonProps {
  presentInCart: boolean;
  className?: ClassName;
}

function AddToCartButton({
  presentInCart,
  className = "",
}: AddToCardButtonProps): JSX.Element {
  const buttonClasses = classNames(styles.button, className);

  return (
    <button className={buttonClasses}>
      <span>
        {presentInCart ? "В\u00A0корзине" : "Добавить в\u00A0корзину"}
      </span>
      {presentInCart && <DoneRounded className={styles.doneIcon} />}
    </button>
  );
}

export default AddToCartButton;
