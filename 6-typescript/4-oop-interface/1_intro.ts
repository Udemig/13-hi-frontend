/*
 ! Interface
 * Bir nesnenin tipini tanımlamaya yarar
 * Nesnenin hangi tipte özellik ve methodlara sahip olucağını ifade eder.
  
 * Type Aliases | Abstract Class | Interface
 
 ? Abstract Class vs Interface
 * Abstract class'lar aynı anda bir class'ı miras alabilir
 * Interface'ler tek seferde birden fazla interface'i miras alabiliyor.
  
 ? Type Aliases vs Interface
 * **Nesne Tipi Tanımlama Açısından** aralarında hiçbir fark yoktur.
 * Type'ların kullanımı daha esnektir sadece nesne değil fonksiyon / array / tuple / literal gibi farklı tipleri tanımlayabilir.
 * Interface'ler ise sadece nesne tipi tanımlamak için kullanılır
*/

// type
type User = {
  name: string;
  age: number;
  isMarried: boolean;
};

// interface
interface IUser {
  name: string;
  age: number;
  isMarried: boolean;
}

const kisi: IUser = {
  name: "Ali",
  age: 20,
  isMarried: true,
};

// Not: interface ile sadece nesne tipi tanımlanabilir
// ama type ile farklı değişkenlerin tipi tanımlanabilir

type Dizi = number[];
type Fonksiyon = () => void;
type Literal = "a" | "b" | "c";
interface INesne {}
