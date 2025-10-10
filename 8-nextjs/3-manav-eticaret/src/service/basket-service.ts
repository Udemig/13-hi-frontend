import { BasketRes } from "@/types";

// api adresi
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const userId = process.env.NEXT_PUBLIC_USER_ID;

// sepete ürün ekle
const addToBasket = async (groceryId: string, amount: number) => {
  const res = await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    body: JSON.stringify({ userId, groceryId, amount }),
  });

  return res.json();
};

// sepetteki ürünleri al
const getBasket = async (): BasketRes => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`);
  return res.json();
};

export { addToBasket, getBasket };
