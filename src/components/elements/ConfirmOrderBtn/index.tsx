import React from "react";
import styles from "@/components/modules/checkout/ConfirmationSidebar/styles.module.scss";
import { CircularProgress } from "@mui/material";

type ConfirmOrderBtnVariant = "default" | "loading" | "error";

interface ConfirmOrderBtnProps {
  handleSubmit: () => void;
  variant: ConfirmOrderBtnVariant;
}

function ConfirmOrderBtn({
  handleSubmit,
  variant,
}: ConfirmOrderBtnProps): JSX.Element {
  return (
    <button className={styles.confirmOrderBtn} onClick={handleSubmit}>
      <p>Подтвердить заказ</p>
      {variant === "loading" && <CircularProgress />}
    </button>
  );
}

export default ConfirmOrderBtn;
