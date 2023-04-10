import { CartAction, CartState } from "@/types/cart";
import produce from "immer";

const cartReducer = produce((draft: CartState, action: CartAction): void => {
  switch (action.type) {
    case "OPEN_CART": {
      draft.isOpened = true;
      break;
    }
    case "CLOSE_CART": {
      draft.isOpened = false;
      break;
    }
    case "SET_CART_ITEMS": {
      draft.items = action.payload;
      break;
    }
    case "UPATE_ITEM_QUANTITY": {
      const { productId, quantity } = action.payload;

      const itemIndex = draft.items.findIndex(
        (item) => item.productId === productId
      );

      if (itemIndex !== -1) {
        draft.items[itemIndex].quantity = quantity;
      }

      break;
    }
    case "ADD_ITEM": {
      const productId = action.payload;

      const itemIndex = draft.items.findIndex(
        (item) => item.productId === productId
      );

      if (itemIndex === -1) {
        draft.items.push({ productId, quantity: 1 });
      }

      break;
    }
    case "REMOVE_ITEM": {
      const productId = action.payload;

      const itemIndex = draft.items.findIndex(
        (item) => item.productId === productId
      );

      if (itemIndex !== -1) {
        draft.items.splice(itemIndex, 1);
      }

      break;
    }
    default: {
      const exhaustiveCheck: never = action;
      throw new Error(`Unhandled cart action type: ${exhaustiveCheck}`);
    }
  }
});

export default cartReducer;
