import { CartAction, CartState } from "@/types/cart";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import cartReducer from "./reducer";
import {
  loadCartFromLocalStorage,
  saveCartToLocalStorage,
} from "utils/local-storage";
import { setCartItems } from "utils/cart-actions";

const CartContext = createContext<CartState | null>(null);
const CartDispatchContext = createContext<Dispatch<CartAction> | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, {
    isOpened: false,
    items: [],
  });

  useEffect(() => {
    const initialCartItems = loadCartFromLocalStorage();
    setCartItems(dispatch, initialCartItems);
  }, []);

  useEffect(() => {
    saveCartToLocalStorage(cart.items);
  }, [cart.items]);

  const cartModalElement = useRef<HTMLDivElement>(null);

  return (
    <CartContext.Provider value={{ ...cart, modalElement: cartModalElement }}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("cart context is null");
  }

  return context;
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);

  if (!context) {
    throw new Error("cart dispatch context is null");
  }

  return context;
}
