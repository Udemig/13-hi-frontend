import { Order, Product, User } from "@/types";

const API_URL = "http://localhost:4000";

// bütün siparişleri getir
const getOrders = async (): Promise<Order[]> => {
  const res = await fetch(`${API_URL}/orders`);

  return res.json();
};

// bütün ürünleri getir
const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}/products`);

  return res.json();
};
// bir ürünü getir
const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${API_URL}/products/${id}`);

  return res.json();
};

// bir ürünü kaldır
const deleteProduct = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};

// bir ürün oluştur
const createProduct = async (
  productData: Omit<Product, "id">
): Promise<Product> => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });

  return res.json();
};

// bir ürünü güncelle
const updateProduct = async (
  id: string,
  productData: Omit<Product, "id">
): Promise<Product> => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });

  return res.json();
};

// kullanıcıları getir
const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${API_URL}/users`);

  return res.json();
};

// bir kullanıcıyı getir
const getUser = async (id: string): Promise<User> => {
  const res = await fetch(`${API_URL}/users/${id}`);

  return res.json();
};

// bir kullanıcıyı banla
const banUser = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};

export {
  getOrders,
  getProducts,
  deleteProduct,
  getProduct,
  createProduct,
  updateProduct,
  getUsers,
  getUser,
  banUser,
};
