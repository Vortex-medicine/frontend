import { CartItem } from "@/types/cart";
import { OrderItem, ProductData, ProductId } from "@/types/product";

export function getProductById(
  id: ProductId,
  allProducts: ProductData[]
): ProductData | null {
  const result = allProducts.find((product) => product.id === id);
  return result ? result : null;
}

export function getAllOrderItemsFromCart(
  cartItems: CartItem[],
  allProducts: ProductData[]
): OrderItem[] {
  const products: OrderItem[] = [];

  for (const item of cartItems) {
    const product = getProductById(item.productId, allProducts);

    if (!product) {
      console.log(`Product with id ${item.productId} not found`);
      continue;
    }

    products.push({
      productId: product.id,
      name: product.name,
      descr: product.descr,
      price: product.price,
      quantity: item.quantity,
    });
  }

  return products;
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

export function getCartItemsTotalPrice(
  cartItems: CartItem[],
  allProducts: ProductData[]
): number {
  const products = [];

  for (const item of cartItems) {
    const product = getProductById(item.productId, allProducts);

    if (!product) {
      console.log(`Product with id ${item.productId} not found`);
      continue;
    }

    products.push({ ...product, quantity: item.quantity });
  }

  return products.reduce((acc, item) => acc + item.quantity * item.price, 0);
}
