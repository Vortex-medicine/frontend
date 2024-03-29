import { CartAction, CartItem } from "@/types/cart";
import { ProductId, ProductQuantity } from "@/types/product";
import { Dispatch } from "react";

export function openCart(dispatch: Dispatch<CartAction>) {
  console.log("openCart");
  dispatch({ type: "OPEN_CART" });
}

export function closeCart(dispatch: Dispatch<CartAction>) {
  dispatch({ type: "CLOSE_CART" });
}

export function setCartItems(
  dispatch: Dispatch<CartAction>,
  cartItems: CartItem[]
) {
  dispatch({ type: "SET_CART_ITEMS", payload: cartItems });
}

export function updateCartItemQuantity(
  dispatch: Dispatch<CartAction>,
  productId: ProductId,
  quantity: ProductQuantity
) {
  dispatch({
    type: "UPDATE_ITEM_QUANTITY",
    payload: { productId, quantity },
  });
}

export function addCartItem(
  dispatch: Dispatch<CartAction>,
  productId: ProductId
) {
  dispatch({ type: "ADD_ITEM", payload: productId });
}

export function removeCartItem(
  dispatch: Dispatch<CartAction>,
  productId: ProductId
) {
  dispatch({ type: "REMOVE_ITEM", payload: productId });
}

export function setOrderIsConfirmed(
  dispatch: Dispatch<CartAction>,
  isConfirmed: boolean
) {
  dispatch({ type: "SET_ORDER_IS_CONFIRMED", payload: isConfirmed });
}
