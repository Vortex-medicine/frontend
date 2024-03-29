import { RefObject } from "react";
import { ProductId, ProductQuantity } from "./product";

export interface CartItem {
  productId: ProductId;
  quantity: ProductQuantity;
}

export interface CartState {
  isOpened: boolean;
  modalElement?: RefObject<HTMLDivElement>;
  items: CartItem[];
  itemsAreLoading: boolean;
  orderIsConfirmed: boolean;
}

export type CartAction =
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }
  | { type: "SET_CART_ITEMS"; payload: CartItem[] }
  | { type: "UPDATE_ITEM_QUANTITY"; payload: CartItem }
  | { type: "ADD_ITEM"; payload: ProductId }
  | { type: "REMOVE_ITEM"; payload: ProductId }
  | { type: "SET_ORDER_IS_CONFIRMED"; payload: boolean };
