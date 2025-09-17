import type { CarsResponse } from "../types";

// Asenkron fonksiyonların return tipi Promise olmalıdır.
export const fetchCars = async (make: string, model: string, year: string, page: string): Promise<CarsResponse> => {
  let url = `${import.meta.env.VITE_API_URL}/records?`;

  if (make) {
    url += `refine=make:"${make}"&`;
  }

  if (model) {
    url += `refine=model:"${model}"&`;
  }

  if (year) {
    url += `refine=year:"${year}"&`;
  }

  // page: 1     2     3     4     5
  // offset: 0    10    20    30    40
  const limit = 10;
  const offset = (Number(page) - 1) * limit;

  url += `limit=${limit}&`;
  url += `offset=${offset}&`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
};
