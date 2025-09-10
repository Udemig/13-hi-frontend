/*
 ! Type Guards
 * Type guards'ın amacı belirli türdeki değerleri kontrol etmek ve bu türe özgü işlemler gerçekleştirmek için kullanılır.
 * 2 farklı type guard tekniği vardır:
 * 1. typeOf:
 * 2. instanceOf:
*/

// 1) typeof ile typeguard tekniğini uygulayalım
function log(input: string | number) {
  if (typeof input === "string") {
    input.trim();
  } else {
    input.toFixed(2);
  }
}

log("selamlar");
log(1231);

// Örnek - 1
const formatUserInput = (input: string | number): string => {
  if (typeof input === "string") {
    // string ise boşlukları temizle ve büyük harfe çevir
    return input.trim().toUpperCase();
  } else {
    // numbrt ise para formatına çevir
    return `${input.toLocaleString()} TL`;
  }
};

console.log(formatUserInput("ahmet")); // AHMET
console.log(formatUserInput(987000)); // 987,000 TR

// Örnek
const getUserAge = (input: string | number): number => {
  if (typeof input === "string") {
    // input string ise parseInt ile sayıya çevir NAN kontrolü yap
    const age = parseInt(input);
    return isNaN(age) ? 0 : age;
  } else {
    // input sayı ise direkt yaşı döndür
    return input;
  }
};

console.log(getUserAge("99")); // 99
console.log(getUserAge(55)); // 55
console.log(getUserAge("abc")); // 0

// instanceof nedir?
// bir nesnenin hangi class'tan meydana geldiğini kontrol etmemizi sağlayan operatördür
class Bird {}
class Rabbit {}

const tavsan = new Rabbit();

console.log("Tavşan nesnesi Bird class'ından oluşturulan bir örnek mi?", tavsan instanceof Bird);
console.log("Tavşan nesnesi Rabbit class'ından oluşturulan bir örnek mi?", tavsan instanceof Rabbit);

// intanceOf operatörü ile typeguard tekniği uygulayalım
class Cat {
  name: string = "Tekir";

  meow(): void {
    console.log("🐈🐈🐈 miyav miyav");
  }
}

class Dog {
  name: string = "Karabaş";

  bark(): void {
    console.log("🐶🐶🐶 hav hav");
  }
}

function makeSound(animal: Cat | Dog): void {
  console.log(animal.name);

  if (animal instanceof Cat) {
    // animal parametresi Cat class'ından oluşturulmuş bir örnekse:
    animal.meow();
  } else {
    // animal parametresi Dog class'ından oluşturulmuş bir örnekse:
    animal.bark();
  }
}

makeSound(new Cat());
makeSound(new Dog());

// Gerçek Proje Örneği - Error Handling
class NetworkError {
  name: string;
  message: string;

  constructor(message: string) {
    this.name = "Network Error";
    this.message = message;
  }
}
class ValidationError {
  name: string;
  message: string;

  constructor(message: string) {
    this.name = "Validation Error";
    this.message = message;
  }
}

function handleError(error: NetworkError | ValidationError | Error): void {
  if (error instanceof NetworkError) {
    console.log("🛜 Ağ Hatası: ", error.message);
  } else if (error instanceof ValidationError) {
    console.log("⚠️ Doğrulama Hatası: ", error.message);
  } else {
    console.log("❌ Genel Hata: ", error.message);
  }
}

handleError(new NetworkError("Ağ bağlantısı kesildi"));
handleError(new ValidationError("Doğrulama kaynaklı hata"));
handleError(new Error("Genel Hata"));
