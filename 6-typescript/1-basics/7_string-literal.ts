/*
 ! String Literal Type
 * Bir metin tipini string olarak tanımlamak yerine eğerki alabileceği değer sayısı çok fazla değilse doğrudan bu değerleri yazarak tip değil değer kısıtlaması yapabiliriz.
 * Örn: Bir kullanıcı nesnesinin tipini tanımlamak istiyoruz.
 * Kullanıncın rolüne string yazmak "string" alabileceği 3-4 farklı değeri ifade edersek daha katı bir kısıtlama yapmış oluruz.
 */

// örnek - 1
let user: {
  id: number;
  name: string;
  accountType: "admin" | "user" | "guest";
  gender: "male" | "female";
};

user = {
  id: 1,
  name: "Ali",
  accountType: "admin",
  gender: "male",
};

// örnek - 2
let car: {
  make: string;
  model: string;
  gearbox: "manual" | "automatic";
  fuel: "benzin" | "dizel" | "elektrik";
  year: number;
  owner: any;
};

car = {
  make: "bmw",
  model: "m4",
  gearbox: "automatic",
  fuel: "benzin",
  year: 2025,
  owner: null,
};
