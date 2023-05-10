import React, { forwardRef } from "react";
import styles from "./styles.module.scss";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useCartDispatch } from "@/context/cart/Context";
import { openCart } from "utils/cart-actions";
import Container from "../Container";
import { CustomContentProps, useSnackbar } from "notistack";

const AddToCartSuccessAlert = forwardRef<HTMLDivElement, CustomContentProps>(
  function AddToCartSuccessAlert({ id }, ref): JSX.Element {
    const cartDispatch = useCartDispatch();
    const { closeSnackbar } = useSnackbar();

    return (
      <Container ref={ref}>
        <div className={styles.alertWrapper}>
          <div className={styles.messageWrapper}>
            <CheckCircleOutlineRoundedIcon className={styles.successIcon} />
            <p className={styles.message}>Товар додано до&nbsp;кошика!</p>
          </div>
          <button
            className={styles.openCartBtn}
            onClick={() => openCart(cartDispatch)}
          >
            Відкрити
          </button>
          <button className={styles.closeBtn} onClick={() => closeSnackbar(id)}>
            <CloseRoundedIcon />
          </button>
        </div>
      </Container>
    );
  }
);

export default AddToCartSuccessAlert;
