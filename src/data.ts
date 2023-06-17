export type ProductImage = {
  urlFull: string;
  urlThumb: string;
  altText: string;
};

export type Product = {
  id: number;
  company: string;
  name: string;
  description: string;
  currentPrice: number;
  previousPrice: number;
  images: ProductImage[];
};

export interface ShopCartItem {
  product: Product;
  quantity: number;
}

export const product: Product = {
  id: 1,
  company: "Sneaker Company",
  name: "Fall Limited Edition sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. \
          Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  currentPrice: 125.0,
  previousPrice: 250.0,
  images: [
    {
      urlFull: "images/image-product-1.jpg",
      urlThumb: "images/image-product-1-thumbnail.jpg",
      altText: "image of Fall Limited Edition sneakers",
    },
    {
      urlFull: "images/image-product-2.jpg",
      urlThumb: "images/image-product-2-thumbnail.jpg",
      altText: "image of Fall Limited Edition sneakers",
    },
    {
      urlFull: "images/image-product-3.jpg",
      urlThumb: "images/image-product-3-thumbnail.jpg",
      altText: "image of Fall Limited Edition sneakers",
    },
    {
      urlFull: "images/image-product-4.jpg",
      urlThumb: "images/image-product-4-thumbnail.jpg",
      altText: "image of Fall Limited Edition sneakers",
    },
  ],
};
