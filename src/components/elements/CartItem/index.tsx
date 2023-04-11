import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { IconButton, TextField } from "@mui/material";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import classnames from "classnames";
import { CART_ITEM_MAX_AMOUNT } from "@/constants/common";
import { CartItem } from "@/types/cart";
import { getProductById } from "utils/product";
import { useCartDispatch } from "@/context/cart/Context";
import { removeCartItem, updateCartItemQuantity } from "utils/cart-actions";

interface CartItemProps {
  productData: CartItem;
  className?: string;
}

function CartItem({
  productData: { productId, quantity },
  className = "",
}: CartItemProps): JSX.Element {
  const [localQuantity, setLocalQuantity] = useState(quantity.toString());
  const cartDispatch = useCartDispatch();

  const product = getProductById(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  useEffect(() => {
    setLocalQuantity(quantity.toString());
  }, [quantity]);

  function handleAmountOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value: number | string = e.target.value;

    if (value !== "") {
      value = parseInt(value);

      if (value > CART_ITEM_MAX_AMOUNT) {
        value = CART_ITEM_MAX_AMOUNT;
      }

      if (isNaN(value) || value < 1) {
        value = 1;
      }

      updateCartItemQuantity(cartDispatch, productId, value);
    } else {
      setLocalQuantity(value.toString());
    }
  }

  function handleAmountOnBlur(e: React.FocusEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value === "") {
      updateCartItemQuantity(cartDispatch, productId, 1);
      setLocalQuantity("1");
    }
  }

  function handleAmountIncrease() {
    const numericValue = parseInt(localQuantity);

    if (isNaN(numericValue)) {
      updateCartItemQuantity(cartDispatch, productId, 2);
      return;
    }

    updateCartItemQuantity(cartDispatch, productId, numericValue + 1);
  }

  function handleAmountDecrease() {
    updateCartItemQuantity(
      cartDispatch,
      productId,
      parseInt(localQuantity) - 1
    );
  }

  function handleItemDelete() {
    removeCartItem(cartDispatch, productId);
  }

  const cartItemClasses = classnames(styles.cartItemWrapper, className);

  return (
    <div className={cartItemClasses}>
      <Image
        className={styles.itemImg}
        src={product.img.path}
        alt="cart item"
        width={product.img.width}
        height={product.img.height}
        sizes="100vw,
               (min-width: 700px) 50vw,
               (min-width: 1200px) 255px"
      />

      <div className={styles.itemInfoWrapper}>
        <h3 className={styles.itemName}>{product.name}</h3>
        <p className={styles.itemDescr}>{product.descr}</p>
      </div>

      <div className={styles.amountWrapper}>
        <p className={styles.amountCaption}>Количество</p>
        <div className={styles.amountControlElements}>
          <IconButton
            className={styles.amountMinusBtn}
            disabled={localQuantity === "1" || localQuantity === ""}
            onClick={handleAmountDecrease}
            color="blue"
          >
            <RemoveRoundedIcon />
          </IconButton>
          <TextField
            value={localQuantity}
            onChange={handleAmountOnChange}
            onBlur={handleAmountOnBlur}
            className={styles.amountInput}
          />
          <IconButton
            className={styles.amountPlusBtn}
            disabled={localQuantity === CART_ITEM_MAX_AMOUNT.toString()}
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
          {localQuantity === ""
            ? product.price
            : product.price * parseInt(localQuantity)}{" "}
          ₴
        </p>
      </div>

      <div className={styles.removeItemOuterWrapper}>
        <div
          onClick={handleItemDelete}
          className={styles.removeItemInnerWrapper}
        >
          <DeleteOutlineRoundedIcon className={styles.removeItemIcon} />
          <p className={styles.removeItemText}>Удалить</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
