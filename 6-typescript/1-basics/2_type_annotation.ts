/*
 ! Type Annotation
 * Javascript'te değişkenin türünü belirleme gibi bir özellik söz konusu değildir.
 * Fakat typescript'te tanımladığımız değişkenlerin tiplerini biz belirleyebiliyoruz.
 * Bu sayede değer ataması yaparken belirlenen tip kısıtlaması dışarısına çıkamıyoruz.
 * Bu olay kodda oluşabilecek hataların daha erken tespit edilmesini sağlar.
*/

let foo: number = 10;

foo = 35;

/*
 * Javascript'te bulunan veri tipleri:
 * string
 * number
 * boolean
 * null
 * undefined
 * object
 * array
 * function
 * symbol (pek kullanılmayan)
 * bigint (pek kullanılmayan)
 */

let value1: string = "udemig";
let value2: number = 45;
let value3: boolean = true;
let value4: null = null;
let value5: undefined = undefined;
let value6: object = {};
let value7: Function = () => {};
let value8: symbol = Symbol("123");
let value9: bigint = 10n;

/*
 * Type Inferance
 * Eğer bir değişkenin tipini belirtmezsek typescript kendisi değişken atadığımız değere göre tipi belirler.
 * Bu özelliği mümkünse hiç kullanmazsak daha iyi. (Bazen olması gereke nazaran yanlış tip belirleyebiliyor)
 */

let value10 = "ahmet";
let value11 = 43534;

//! Javascript'te veri türleri ikiye ayrılır:

/*
 * 1) Primitive Types
 * Değer üzerinde saklanır ve kopyalanır.
 * Hafızada sabit bir alan kaplar.
 * Bellekte değişkenin kendisi saklanır.
 * Bir değişkene farklı bir değişkenin değeri atanırsa, kopyası alınır ve yeni değişkende değişiklik yapmak orjinalini etkilemez
 * string,number,boolean,null,undefined,symbol,bigint
 */

let x = 10;
let y = x; // x'in değeri y'ye kopyalınır
y = 20;

console.log(x); // 10

/*
 * 2) Non-Primitive (Reference) Types
 * Referan üzerinden saklanır ve değerleri değiştirilebilir.
 * Bellekte değişkenin referansı tutulur.
 * Bir değişkene farklı bir değişkenin değeri atanırsa,...
 * object,array,function,class ..
 */

let obj1 = { name: "Furkan" };
let obj2 = obj1;
obj2.name = "Ahmet";

console.log(obj1);
