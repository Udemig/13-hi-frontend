// Ürün Tipi
export interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  origin: string;
  isOrganic: boolean;
  description: string;
  nutritionalValue: string;
  expiryDays: number;
  photo: string;
  __v: 0;
}

// Sepet Tipi
export interface Basket {
  _id: string;
  userId: string;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
  items: {
    grocery: Product;
    quantity: number;
    price: number;
    name: string;
    _id: string;
  }[];
  __v: 0;
}

// API Response Tipleri
export type ProductsRes = Promise<{ groceries: Product[] }>;
export type ProductRes = Promise<{ grocery: Product }>;
export type BasketRes = Promise<{ cart: Basket }>;
