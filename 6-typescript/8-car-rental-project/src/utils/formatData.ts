import type { Car } from "../types";

type ReturnType = Array<[string, string | number | null]>;

const formatData = (car: Car): ReturnType => {
  // nesne içerisinden kabul ettiğimiz alanları belirle
  const accepted = [
    "make",
    "model",
    "year",
    "fueltype",
    "cylinders",
    "drive",
    "trany",
    "vclass",
    "tcharger",
    "startstop",
    "co2",
    "displ",
    "atvtype",
  ];

  // nesneyi diziye çevir
  const arr = Object.entries(car).filter(([key]) => accepted.includes(key));

  return arr;
};

export default formatData;
