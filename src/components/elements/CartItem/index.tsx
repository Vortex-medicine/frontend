import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { IconButton, TextField } from "@mui/material";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import classnames from "classnames";
import { CART_ITEM_MAX_AMOUNT } from "@/constants/common";
import { ProductData } from "@/types/product";

interface CartItemProps {
  productData: ProductData;
  className?: string;
}

function CartItem({
  productData: { productName, productDescr, productPrice, productImg },
  className = "",
}: CartItemProps): JSX.Element {
  const [amount, setAmount] = useState("1");

  function handleAmountOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value: number | string = e.target.value;

    if (value !== "") {
      value = parseInt(value);

      if (value > CART_ITEM_MAX_AMOUNT) {
        value = CART_ITEM_MAX_AMOUNT;
      }

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

  const cartItemClasses = classnames(styles.cartItemWrapper, className);

  return (
    <div className={cartItemClasses}>
      <Image
        className={styles.itemImg}
        src={productImg.path}
        alt="cart item"
        width={productImg.width}
        height={productImg.height}
        sizes="100vw,
               (min-width: 700px) 50vw,
               (min-width: 1200px) 255px"
      />

      <div className={styles.itemInfoWrapper}>
        <h3 className={styles.itemName}>{productName}</h3>
        <p className={styles.itemDescr}>{productDescr}</p>
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
            disabled={amount === CART_ITEM_MAX_AMOUNT.toString()}
            onClick={handleAmountIncrease}
            color="blue"
          >
            <AddRoundedIcon />
          </IconButton>
        </div>
      </div>

      <div className={styles.priceWrapper}>
        <p className={styles.priceCaption}>Сумма</p>
        <p className={styles.price}>
          {amount === "" ? productPrice : productPrice * parseInt(amount)} ₴
        </p>
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
