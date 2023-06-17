import { CartIcon, CloseIcon } from "./Icons";
import Nav from "./Nav";
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
            <button
              type="button"
              title="Open menu"
              aria-label="Open menu"
              class="inline desktop:hidden"
              onClick={onClickedMenu}
            >
              <img
                class="h-4 w-4"
                height="16"
                width="16"
                src="images/icon-menu.svg"
                alt="Menu icon"
              />
            </button>
            <a title="Home page" href="#">
              <img
                class="icon-pointer"
                src="images/logo.svg"
                height="20"
                width="138"
                alt="Sneaker Company logo"
              />
            </a>
          </div>
          <nav
            class={
              "fixed -left-16 top-0 z-30 h-full w-2/3 bg-white p-6 transition-all duration-1000 desktop:visible desktop:static desktop:block desktop:h-auto desktop:p-0 desktop:opacity-100 " +
              (isMenuShown.value
                ? "visible opacity-100"
                : "invisible opacity-0")
            }
          >
            <button
              type="button"
              title="Close menu"
              aria-label="Close menu"
              class="mb-12 block desktop:hidden"
              onClick={onClickedMenu}
            >
              <CloseIcon class="fill-darkgrayishblue" />
            </button>
            <Nav />
          </nav>
        </div>
        <div class="float-right flex flex-row items-center space-x-8">
          <button
            type="button"
            class="relative"
            onClick={onClickedCart}
            title="Shopping cart"
            aria-label="Shopping cart"
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
          <button
            type="button"
            class="relative"
            title="User profile"
            aria-label="User profile"
          >
            <img
              class="h-7 w-7 rounded-full border-2 border-white hover:border-orange desktop:h-12 desktop:w-12"
              src="images/image-avatar.png"
              height="50"
              width="50"
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
