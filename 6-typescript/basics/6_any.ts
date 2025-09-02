/*
 ! Any Type
 * Bir değğişkene any type atadığımız zaman typescript tip kontrolünü kapatır.
 * Any type atanmış bir değişkene her türlü tipte değer atayabiliriz.
 * Otomatik tamamlama, editör desteği, tip kısıtlaması devre dışı kalır
 * Any type'ı kullanmak genelde kötü bir fikirdir.
 * Any type'ı ancak aciliyeti olan durumlarda "geçici" olarak kullanılır 
*/

let foo: any;

foo = 14213;

foo = "selam";

foo = true;

foo = {};

foo = [];

foo = () => {};

foo = new Date();

foo = null;

foo = undefined;

foo = Symbol("123");

foo = BigInt(123);

foo = new Error("hata");

foo = new Promise((resolve, reject) => {});
