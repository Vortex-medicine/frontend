import { RefObject } from "react";
import { ProductId } from "./product";

export type ProductQuantity = number;

export interface CartItem {
  productId: ProductId;
  quantity: ProductQuantity;
}

export interface CartState {
  isOpened: boolean;
  modalElement?: RefObject<HTMLDivElement>;
  items: CartItem[];
}

export type CartAction =
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }
  | { type: "SET_CART_ITEMS"; payload: CartItem[] }
  | { type: "UPATE_ITEM_QUANTITY"; payload: CartItem }
  | { type: "ADD_ITEM"; payload: ProductId }
  | { type: "REMOVE_ITEM"; payload: ProductId };
