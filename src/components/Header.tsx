import { CartIcon, CloseIcon } from "./Icons";
import Nav from "./nav";
import Cart from "./Cart";
import { shopCartCount, shopCart } from "../signals";
import { useSignal } from "@preact/signals";

export default function Header() {
  const isMenuShown = useSignal(false);
  const isCartShown = useSignal(false);

  const onClickedMenu = () => {
    isMenuShown.value = !isMenuShown.value;
  };
  const onClickedCart = () => {
    isCartShown.value = !isCartShown.value;
  };

  return (
    <>
      <header class="flex flex-wrap items-center justify-between border-b border-lightgray px-6 desktop:px-0">
        <div class="my-6 flex flex-row items-center space-x-16 desktop:my-0">
          <div class="flex items-center space-x-4">
            <a class="inline desktop:hidden" href="#" onClick={onClickedMenu}>
              <img
                class="h-4 w-4"
                height="16px"
                width="16px"
                src="images/icon-menu.svg"
                alt="Menu icon"
              />
            </a>
            <a href="#">
              <img
                class="icon-pointer"
                src="images/logo.svg"
                height="20px"
                width="137.5px"
                alt="Sneaker Company logo"
              />
            </a>
          </div>
          <div
            class={
              "fixed -left-16 top-0 z-30 h-full w-2/3 bg-white p-6 transition-all duration-1000 desktop:visible desktop:static desktop:block desktop:h-auto desktop:p-0 desktop:opacity-100 " +
              (isMenuShown.value
                ? "visible opacity-100"
                : "invisible opacity-0")
            }
          >
            <a
              class="mb-12 block desktop:hidden"
              href="#"
              onClick={onClickedMenu}
            >
              <CloseIcon class="fill-darkgrayishblue" />
            </a>
            <Nav />
          </div>
        </div>
        <div class="float-right flex flex-row items-center space-x-8">
          <button
            class="relative cursor-pointer"
            onClick={onClickedCart}
            aria-label="Shopping Cart"
          >
            <CartIcon class="fill-darkgrayishblue hover:fill-orange" />
            <span
              class={
                "absolute -right-2 -top-2 h-4 w-5 rounded-md bg-orange text-center text-xs font-bold text-white transition-opacity duration-1000 " +
                (shopCart.value.length > 0
                  ? "visible opacity-100"
                  : "invisible opacity-0")
              }
            >
              {shopCartCount}
            </span>
          </button>
          <button class="relative cursor-pointer" aria-label="User Profile">
            <img
              class="h-7 w-7 rounded-full border-2 border-white hover:border-orange desktop:h-12 desktop:w-12"
              src="images/image-avatar.png"
              height="50px"
              width="50px"
              alt="Avatar image"
            />
          </button>
        </div>
      </header>
      <div
        class={
          "absolute right-0 z-10 m-2 w-[360px] rounded-xl bg-white shadow-cart-shadow transition-all duration-1000 " +
          (isCartShown.value ? "visible opacity-100" : "invisible opacity-0")
        }
      >
        <Cart />
      </div>
    </>
  );
}
