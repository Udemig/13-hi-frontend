import type { CarsResponse } from "../types";

// Asenkron fonksiyonların return tipi Promise olmalıdır.
export const fetchCars = async (): Promise<CarsResponse> => {
  let url = `${import.meta.env.VITE_API_URL}/records?limit=20`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
};
