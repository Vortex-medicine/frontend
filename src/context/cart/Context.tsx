import {
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

interface CartContextData {
  cartIsOpened: boolean;
  cartModalElement: RefObject<HTMLDivElement>;
  handleCartIsOpened: (isOpened: boolean) => void;
}

const CartContext = createContext<CartContextData | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartIsOpened, setCartIsOpened] = useState(false);

  function handleCartIsOpened(isOpened: boolean) {
    setCartIsOpened(isOpened);
  }

  return (
    <CartContext.Provider
      value={{
        cartIsOpened,
        handleCartIsOpened,
        cartModalElement: useRef<HTMLDivElement>(null),
      }}
    >
      {children}
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
