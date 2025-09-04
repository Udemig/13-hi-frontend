/*
 * Union Types (Birleşmiş Tipler)
 * Bir değişkenin alabileceği birden fazla farklı türde veri varsa kullanılır
  
 * Örn: Bir şehir değişkeni var ama şehir ismi(string) yoksa şehir plakası(number) mı belli değil
 * Bu tarz durumlarda hem string hem number alabileceğini söylemeliyiz
 */

// Örnek - 1
let city: string | number;

city = "İzmir";
city = 35;

// Örnek - 2
type IOS = {
  iosVersion: number;
  airdropStatus: boolean;
  model: string;
};

type Android = {
  androidVersion: string;
  googlePlayVersion: number;
  model: string;
};

// değişkenin türü hem ios hemde android olabilir
let phone: IOS | Android;

phone = {
  iosVersion: 15.6,
  airdropStatus: true,
  model: "15 Pro Max",
};

phone = {
  androidVersion: "marshmellow",
  googlePlayVersion: 13.0,
  model: "Galaxy S22",
};

// Union Types'ı nesneler ile kullandığımızda:
type AType = { key1: string; key2: string };
type BType = { key3: number; key4: number };

// değişkenin tipini union types ile tanımlayalım
let example: AType | BType;

// hata vermemesi için ya a tipinin bütün özelliklerini tanımlamalıyız
example = { key1: "x", key2: "y" };

// ya b tipinin bütün özelliklerini tanımlamalıyız
example = { key3: 1, key4: 2 };

// yada her iki tipin bütün özelliklerini tanımlarız
example = { key1: "x", key2: "y", key3: 1, key4: 2 };
