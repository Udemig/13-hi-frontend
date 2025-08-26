import axios from "axios";

const totalApi = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "b782ffa092msh3d1773dc6125311p172512jsn961131e9b38c", // env
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  },
});

const detailApi = axios.create({
  baseURL: "https://covid-193.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "b782ffa092msh3d1773dc6125311p172512jsn961131e9b38c",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
});

export { totalApi, detailApi };
