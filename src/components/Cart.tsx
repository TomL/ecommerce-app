import { ShopCartItem } from "../data";
import { shopCart, shopCartItems, removeFromShopCart } from "../signals";
import { DeleteIcon } from "./Icons";

export default function Cart() {
  return (
    <>
      <div class="h-16 w-full border-b border-lightgray ">
        <p class="p-6 font-bold">Cart</p>
      </div>
      <div class="flex flex-col px-6 pb-8">
        {shopCart.value.length > 0 ? (
          <>
            <div class="my-6 space-y-6">
              {shopCartItems.value.map((shopCartItem, index) => (
                <CartItem
                  cartItem={shopCartItem}
                  index={index}
                  key={shopCartItem.product.id}
                />
              ))}
            </div>
            <button
              class=" h-14 w-full cursor-pointer rounded-xl bg-orange font-bold text-white"
              title="Checkout"
              type="submit"
            >
              Checkout
            </button>
          </>
        ) : (
          <div class="flex h-40 items-center justify-center">
            <p class="font-bold text-darkgrayishblue">Your cart is empty.</p>
          </div>
        )}
      </div>
    </>
  );
}

function CartItem({
  cartItem,
  index,
}: {
  cartItem: ShopCartItem;
  index: number;
}) {
  return (
    <div class="flex h-12 items-center justify-between">
      <img
        class="h-12 w-12 rounded"
        src={cartItem.product.images[0].urlThumb}
        alt={cartItem.product.images[0].altText}
        height="48px"
        width="48px"
      />
      <div class="text-darkgrayishblue">
        <span>{cartItem.product.name}</span>
        <div class="flex justify-between">
          <span>
            {cartItem.product.currentPrice.toFixed(2)} x {cartItem.quantity}
          </span>
          <span class="font-bold text-verydarkblue">
            ${(cartItem.product.currentPrice * cartItem.quantity).toFixed(2)}
          </span>
        </div>
      </div>
      <DeleteIcon
        class="cursor-pointer fill-grayishblue"
        onClick={() => removeFromShopCart(index)}
      />
    </div>
  );
}
