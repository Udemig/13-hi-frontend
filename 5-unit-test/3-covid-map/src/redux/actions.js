import { createAsyncThunk } from "@reduxjs/toolkit";
import { detailApi } from "../utils/api";
import axios from "axios";

export const getDetails = createAsyncThunk("covid/getDetails", async (country) => {
  // ülke covid verilerini almak için api isteğini hazırla
  const req1 = detailApi.get("/statistics", { params: { country } });

  // ülke detay verilerinialmak için api  isteğini hazırla
  const req2 = axios.get(`https://restcountries.com/v3.1/name/${country}`);

  // Promise.all: birden fazla api isteğini ayın anda atmamıza yarıyor
  // sırayla attığımız seneryodaki zaman kaybını telafi ediyor
  const [res1, res2] = await Promise.all([req1, req2]);

  // api'dan gelen verileri değişkene aktar
  const covidData = res1.data.response[0];
  const countryData = res2.data[0];

  // ihtiyacımız olan verileri al
  const payload = {
    country: covidData.country,
    continent: covidData.continent,
    day: covidData.day,
    cases: covidData.cases.total,
    deaths: covidData.deaths.total,
    tests: covidData.tests.total,
    population: covidData.population,
    flag: countryData.flags,
    capital: countryData.capital[0],
    currency: Object.entries(countryData.currencies)[0][1].name,
  };

  // aksiyonun payload'ını return et
  return payload;
});
