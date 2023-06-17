import { Product, ProductImage } from "../data";
import { CloseIcon, NextIcon, PreviousIcon } from "./Icons";
import { useSignal } from "@preact/signals";

export default function Album({ product }: { product: Product }) {
  const firstImage = product.images[0];

  const modalShown = useSignal(false);
  const showModal = () => {
    modalShown.value = !modalShown.value;
  };

  const currentImage = useSignal(firstImage);
  const changeImage = (image: ProductImage) => {
    currentImage.value = image;
  };
  return (
    <>
      <AlbumViewer
        images={product.images}
        currentImage={currentImage.value}
        changeImage={changeImage}
        showModal={showModal}
      />

      <div
        class={
          "invisible fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-blacktransparent " +
          (modalShown.value ? "desktop:visible" : "")
        }
        onClick={showModal}
      >
        <AlbumModal
          images={product.images}
          currentImage={currentImage.value}
          changeImage={changeImage}
          showModal={showModal}
        />
      </div>
    </>
  );
}

function AlbumModal({
  images,
  currentImage,
  showModal,
  changeImage,
}: {
  images: ProductImage[];
  currentImage: ProductImage;
  showModal: () => void;
  changeImage: (image: ProductImage) => void;
}) {
  return (
    <>
      <div onClick={(e) => e.stopPropagation()}>
        <div class="my-6 flex flex-row justify-end">
          <CloseIcon
            class="h-5 w-5 cursor-pointer fill-white hover:fill-orange"
            onClick={showModal}
          />
        </div>
        <a
          class="absolute right-8 top-6 text-5xl font-bold text-white"
          href="javascript:void(0)"
        ></a>
        <AlbumViewer
          isModal={true}
          images={images}
          currentImage={currentImage}
          changeImage={changeImage}
        />
      </div>
    </>
  );
}

function AlbumViewer({
  images,
  currentImage,
  isModal = false,
  changeImage,
  showModal,
}: {
  images: ProductImage[];
  currentImage: ProductImage;
  isModal?: boolean;
  changeImage: (image: ProductImage) => void;
  showModal?: () => void;
}) {
  const nextImage = () => {
    let nextIndex = images.indexOf(currentImage) + 1;
    if (nextIndex > images.length - 1) nextIndex = 0;
    changeImage(images[nextIndex]);
  };

  const prevImage = () => {
    let prevIndex = images.indexOf(currentImage) - 1;
    if (prevIndex < 0) prevIndex = images.length - 1;
    changeImage(images[prevIndex]);
  };
  return (
    <>
      <img
        class={
          "max-h-[34.375rem] object-cover desktop:rounded-2xl " +
          (isModal ? "max-w-[34.375rem]" : "w-full cursor-pointer")
        }
        src={currentImage.urlFull}
        alt={currentImage.altText}
        height="550px"
        width="550px"
        onClick={showModal}
      />
      <div
        class={
          "absolute flex w-full flex-row justify-between px-4 desktop:-mx-7 desktop:w-[calc(34.375rem+3.5rem)] desktop:px-0 " +
          (isModal ? "desktop:top-[calc(50%-3.5rem)]" : "desktop:invisible")
        }
      >
        <div
          class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white stroke-black hover:stroke-orange desktop:h-14 desktop:w-14"
          onClick={prevImage}
        >
          <PreviousIcon />
        </div>
        <div
          class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white stroke-black hover:stroke-orange desktop:h-14 desktop:w-14"
          onClick={nextImage}
        >
          <NextIcon />
        </div>
      </div>
      <div class="mt-8 hidden flex-row justify-between desktop:flex">
        {images.map((image) => (
          <ImageThumb
            key={image.urlThumb}
            image={image}
            isCurrent={image == currentImage}
            changeImage={changeImage}
          />
        ))}
      </div>
    </>
  );
}

function ImageThumb({
  image,
  isCurrent,
  changeImage,
}: {
  image: ProductImage;
  isCurrent: boolean;
  changeImage: (image: ProductImage) => void;
}) {
  return (
    <div class="rounded-lg bg-white/100">
      <img
        class={
          "cursor-pointer rounded-lg hover:opacity-50 " +
          (isCurrent && "border-2 border-orange opacity-70")
        }
        src={image.urlThumb}
        height="88px"
        width="88px"
        alt={image.altText}
        onClick={() => changeImage(image)}
      />
    </div>
  );
}
