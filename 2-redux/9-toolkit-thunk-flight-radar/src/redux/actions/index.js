import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { params } from "../../utils/constants";

// tr üzerindeki uçuş verilerini getirir
const getFlights = createAsyncThunk("flights/getFlights", async () => {
  // api isteğini at
  const res = await api.get("/flights/list-in-boundary", { params });

  // api'dan gelen veriyi formatla
  // dizi içerisindeki dizileri nesnelere çevirelim
  // [[],[],[],[]]     >     [{},{},{},{}]
  const formatted = res.data.aircraft.map((i) => ({
    flightId: i[0],
    callsign: i[1],
    lat: i[2],
    lon: i[3],
    direction: i[4],
    altitude: i[5],
    speed: i[6],
  }));

  // payload'ı return et
  return formatted;
});

// bir uçuşun detay verilerini getirir
const getDetails = createAsyncThunk("detail/getDetails", async (flight) => {
  // api isteği at
  const res = await api.get(`/flights/detail`, { params: { flight } });

  // aksiyonun payload'ını belirle
  return res.data;
});

export { getFlights, getDetails };
