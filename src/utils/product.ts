import { ALL_PRODUCTS } from "@/constants/products";
import { CartItem } from "@/types/cart";
import { ProductData, ProductId } from "@/types/product";

export function getProductById(id: ProductId): ProductData | null {
  const result = ALL_PRODUCTS.find((product) => product.id === id);
  return result ? result : null;
}

export function productIsPresentInCart(
  cartItems: CartItem[],
  productId: ProductId
): boolean {
  return cartItems.some((item) => item.productId === productId);
}

export function getCartItemsTotalQuantity(cartItems: CartItem[]): number {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
}

export function getCartItemsTotalPrice(cartItems: CartItem[]): number {
  const products = [];

  for (const item of cartItems) {
    const product = getProductById(item.productId);

    if (!product) {
      console.log(`Product with id ${item.productId} not found`);
      continue;
    }

    products.push({ ...product, quantity: item.quantity });
  }

  return products.reduce((acc, item) => acc + item.quantity * item.price, 0);
}
