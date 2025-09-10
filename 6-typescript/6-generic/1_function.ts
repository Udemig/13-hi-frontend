/*
 ! Generic
 * Bir fonksiyon'un, type'ın, class'ın, interface'in içerisindeki bazı tipleri dinamik olarak dışarıdan gelen değere bağlı değişmesini sağlar
 * Bu durumda generic özelliği kullanarak dışarıdan parametre olarak tip alabiliyoruz
*/

// Yazıcağımız fonksiyon
// 1) Number dizisi gelirse rastgele bir number döndürmeli
// 2) String dizisi gelirse rastgele bir string döndürmeli

// Union Type kullanmaya çalışırsak: OLMAZ
const getRandomElement = (array: number[] | string[]): number | string => {
  const i = Math.round(Math.random() * array.length);

  return "sabit string döndürmesine rağmen union type kullandığım için hata almıyorum";
};

// Union yöntemiyle olmadığı için eğer generic kullanmazsa 2 ayrı fonksiyon yazmak zorunda kalırız
const getRandomString = (array: string[]): string => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

const getRandomNumber = (array: number[]): number => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

const getRandomBoolean = (array: boolean[]): boolean => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

// Generic yardımıyla yapmaya çalışalım:
const getRandomElement2 = <TypeParam>(array: TypeParam[]): TypeParam => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

// Generic değer alan bir fonksiyonu kullanırken generic tipi belirtmek için <> içerisinde tip göndeririz
const x = getRandomElement2<number>([1, 2, 3, 4, 5, 6]);
const y = getRandomElement2<string>(["a", "b", "c", "d"]);
const z = getRandomElement2<boolean>([true, false, true]);

// react projesinde nerde kullanılabilir
// useState<string>("")
// axios.get<User>("/user")
