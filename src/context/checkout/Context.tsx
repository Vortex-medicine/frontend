import { CheckoutProps } from "@/types/checkout";
import { createContext, useContext } from "react";

export const CheckoutContext = createContext<CheckoutProps | null>(null);

export function useCheckout() {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error("checkout context is null");
  }

  return context;
}
