/*
 * Asenkron olup değer return eden fonksiyonlarda return tipi doğrudan yazılamaz.
 * Asenkron olupta değer döndüren fonksiyonlarda return edilen değerin tipini Promise<T> tipine generic olarak göndeririz.
 */

type Quote = {
  id: number;
  quote: string;
  author: string;
};

type QuoteResponse = {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
};

const fetchUsers = async (): Promise<QuoteResponse> => {
  const res = await fetch("https://dummyjson.com/quotes");

  return await res.json();
};
