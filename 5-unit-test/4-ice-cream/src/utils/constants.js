export const mockProducts = [
  {
    id: 1,
    name: "Bal Badem",
    price: 25,
    image: "/images/ice-2.png",
  },
  {
    id: 2,
    name: "Çikolata Fırtınası",
    price: 20,
    image: "/images/ice-1.png",
  },
  {
    id: 3,
    name: "Mango Serinliği",
    price: 28,
    image: "/images/ice-3.png",
  },
];

export const mockCart = {
  items: [
    {
      id: 123,
      productId: 1,
      name: "Bal Badem",
      price: 25,
      image: "/images/ice-2.png",
      quantity: 2,
      format: "cup",
    },
    {
      id: 1234,
      productId: 2,
      name: "Çikolata Fırtınası",
      price: 20,
      image: "/images/ice-1.png",
      quantity: 1,
      format: "cornet",
    },
  ],
  totalAmount: 70,
  totalItems: 3,
};

export const mockCartEmpty = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
};
