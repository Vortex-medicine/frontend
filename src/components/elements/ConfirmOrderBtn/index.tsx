import React from "react";
import { CircularProgress } from "@mui/material";
import classnames from "classnames";
import styles from "./styles.module.scss";

interface ConfirmOrderBtnProps {
  handleSubmit: () => void;
  loading?: boolean;
}

function ConfirmOrderBtn({
  handleSubmit,
  loading,
}: ConfirmOrderBtnProps): JSX.Element {
  return (
    <button
      className={classnames(styles.confirmOrderBtn, {
        [styles.confirmOrderBtnLoading]: loading,
      })}
      onClick={handleSubmit}
    >
      <p className={styles.text}>Підтвердити замовлення</p>
      {loading && <CircularProgress className={styles.spinner} size={25} />}
    </button>
  );
}

export default ConfirmOrderBtn;
