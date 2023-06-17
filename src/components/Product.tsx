import { ComponentChildren } from "preact";
import { Product } from "../data";
import Album from "./Album";
import ProductDetail from "./ProductDetail";

export default function ProductView({ product }: { product: Product }) {
  return (
    <ProductContainer>
      <div class="flex w-full flex-col justify-center desktop:w-[27.8125rem]">
        <Album product={product} />
      </div>
      <div class="m-6 flex flex-col justify-center space-y-8 desktop:m-0 desktop:w-[27.8125rem]">
        <ProductDetail product={product} />
      </div>
    </ProductContainer>
  );
}

function ProductContainer({ children }: { children: ComponentChildren }) {
  return (
    <div class="">
      <div class="flex columns-2 flex-wrap justify-between desktop:mx-12 desktop:my-24">
        {children}
      </div>
    </div>
  );
}
