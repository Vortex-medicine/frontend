import { CartItem } from "@/types/cart";

export function loadCartFromLocalStorage(): CartItem[] {
  try {
    const serializedCart = localStorage.getItem("cart");
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (error) {
    console.error("Error loading cart from local storage:", error);
    return [];
  }
}

export function saveCartToLocalStorage(cart: CartItem[]): void {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCart);
  } catch (error) {
    console.error("Error saving cart to local storage:", error);
  }
}
