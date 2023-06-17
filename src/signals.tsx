import { signal, computed } from "@preact/signals";
import { ShopCartItem, Product } from "./data";

const shoppingCartList: ShopCartItem[] = [];
export const shopCart = signal(shoppingCartList); //the default state

//derived state based on whether a user exists
export const shopCartItems = computed(() => {
  return shopCart.value;
});

export const shopCartCount = computed(() => {
  return shopCart.value.length;
});

export const shopCartHasItems = computed(() => {
  return true;
});

export const newItem = signal<ShopCartItem | null>(null);

export function addToShopCart(product: Product, quantity: number) {
  var foundIndex = shopCart.value.findIndex((i) => i.product == product);
  if (foundIndex > -1) {
    shopCart.value[foundIndex].quantity += quantity;
    shopCart.value = [...shopCart.value];
  } else {
    shopCart.value = [...shopCart.value, { product, quantity }];
  }
}

export function removeFromShopCart(index: number) {
  shopCart.value.splice(index, 1);
  shopCart.value = [...shopCart.value];
}
