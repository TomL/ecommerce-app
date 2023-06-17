import { Product } from "../data";
import { CartIcon, MinusIcon, PlusIcon } from "./Icons";
import { addToShopCart } from "../signals";
import { useRef } from "preact/hooks";

export default function ProductDetail({ product }: { product: Product }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const clickedAddToCart = () => {
    if (inputRef && inputRef.current) {
      addToShopCart(product, parseInt(inputRef.current.value));
    }
  };

  const clickedDecQuantity = () => {
    if (inputRef && inputRef.current) {
      const newValue = Math.max(1, parseInt(inputRef.current.value) - 1);
      inputRef.current.value = newValue.toString();
    }
  };

  const clickedIncQuantity = () => {
    if (inputRef && inputRef.current) {
      const newValue = Math.min(99, parseInt(inputRef.current.value) + 1);
      inputRef.current.value = newValue.toString();
    }
  };

  const percentOff = (
    (product.currentPrice / product.previousPrice) *
    100
  ).toFixed();
  return (
    <>
      <div class="space-y-4">
        <p class="text-[0.8125rem] font-bold uppercase tracking-[.125rem] text-orange">
          {product.company}
        </p>
        <h1 class="text-[2.75rem] font-bold capitalize leading-10 text-verydarkblue">
          {product.name}
        </h1>
      </div>

      <div class="space-y-4">
        <p class="text-darkgrayishblue ">{product.description}</p>

        <div class="flex justify-between desktop:flex-col desktop:space-y-2.5">
          <div class="flex items-center">
            <span class="text-3xl font-bold text-verydarkblue">
              ${product.currentPrice.toFixed(2)}
            </span>
            <span class="mx-4 inline rounded-md bg-paleorange p-1 font-bold text-orange">
              {percentOff}%
            </span>
          </div>
          <p class="flex items-center font-bold text-grayishblue line-through">
            ${product.previousPrice.toFixed(2)}
          </p>
        </div>
      </div>

      <div class="flex flex-col space-y-4 desktop:flex-row desktop:space-x-4 desktop:space-y-0">
        <div class="flex h-14 w-full flex-row rounded-xl bg-lightgrayishblue desktop:w-36">
          <button
            class="h-full w-20 cursor-pointer outline-none"
            title="minus"
            type="button"
            onClick={clickedDecQuantity}
            aria-label="Previous image"
          >
            <MinusIcon class="m-auto" />
          </button>
          <input
            type="number"
            ref={inputRef}
            class="w-full bg-lightgrayishblue text-center font-bold outline-none"
            value="1"
            label="quantity"
            aria-label="quantity"
          ></input>
          <button
            class="h-full w-20 cursor-pointer outline-none"
            title="plus"
            type="button"
            onClick={clickedIncQuantity}
            aria-label="Next image"
          >
            <PlusIcon class="m-auto" />
          </button>
        </div>
        <button
          class="flex h-14 w-full flex-row items-center justify-center space-x-4 rounded-xl bg-orange font-bold text-white shadow-orange-button-shadow hover:opacity-75 desktop:shadow-none"
          title="Add to cart"
          type="submit"
          onClick={clickedAddToCart}
        >
          <CartIcon class="fill-white" />
          <span>Add to cart</span>
        </button>
      </div>
    </>
  );
}
