import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { IconButton, TextField } from "@mui/material";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

function CartItem() {
  const [amount, setAmount] = useState("1");

  function handleAmountOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value: number | string = e.target.value;

    if (value !== "") {
      value = parseInt(value);

      if (isNaN(value) || value < 1) {
        value = "1";
      }
    }

    setAmount(value.toString());
  }

  function handleAmountOnBlur(e: React.FocusEvent<HTMLInputElement>) {
    let value = e.target.value;

    if (value === "") {
      value = "1";
    }

    setAmount(value);
  }

  function handleAmountIncrease() {
    setAmount((prevAmount) => {
      const numericValue = parseInt(prevAmount);

      if (isNaN(numericValue)) {
        return "2";
      }

      return (numericValue + 1).toString();
    });
  }

  function handleAmountDecrease() {
    setAmount((prevAmount) => {
      return (parseInt(prevAmount) - 1).toString();
    });
  }

  return (
    <div className={styles.cartItemWrapper}>
      <Image
        className={styles.itemImg}
        src="/kgs-kit.jpg"
        alt="cart item"
        width={3436}
        height={1730}
        sizes="100vw,
               (min-width: 700px) 50vw,
               (min-width: 1200px) 255px"
      />

      <div className={styles.itemInfoWrapper}>
        <h3 className={styles.itemName}>Комплект приборов «KGS»</h3>
        <p className={styles.itemDescr}>Cредний по стоимости вариант.</p>
      </div>

      <div className={styles.amountWrapper}>
        <p className={styles.amountCaption}>Количество</p>
        <div className={styles.amountControlElements}>
          <IconButton
            className={styles.amountMinusBtn}
            disabled={amount === "1" || amount === ""}
            onClick={handleAmountDecrease}
            color="blue"
          >
            <RemoveRoundedIcon />
          </IconButton>
          <TextField
            value={amount}
            onChange={handleAmountOnChange}
            onBlur={handleAmountOnBlur}
            className={styles.amountInput}
          />
          <IconButton
            className={styles.amountPlusBtn}
            onClick={handleAmountIncrease}
            color="blue"
          >
            <AddRoundedIcon />
          </IconButton>
        </div>
      </div>

      <div className={styles.priceWrapper}>
        <p className={styles.priceCaption}>Сумма</p>
        <p className={styles.price}>4900 ₴</p>
      </div>

      <div className={styles.removeItemOuterWrapper}>
        <div className={styles.removeItemInnerWrapper}>
          <DeleteOutlineRoundedIcon className={styles.removeItemIcon} />
          <p className={styles.removeItemText}>Удалить</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
