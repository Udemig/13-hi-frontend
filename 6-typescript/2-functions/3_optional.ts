/* 
 ! Optional Param
 * Normal şartlarda fonksiyonu çağırabilememiz için parametrelerin tamamında değer göndermemiz gerekir.
 * Bazı dırımlarda bazı parametrelerin zorunlu olmasını istemeyebilriz.
 
 * Tanım:
 * (a:string,b?:number) => bu kullanımda a parametresi zorunlu b ise isteğe bağlıdır
 * Eğer opsiyonel parametreye değer göndermezsek undefined olarak kabul eder.
 !!! Opsiyonel olan bir parametrenin ardından zorunlu bir parametre gelemez
*/

// Fonksiyonlarda opsiyonel parametre
function exaFunc(par1: number, par2?: string, par3?: boolean) {
  console.log("1.parametre", par1);
  console.log("1.parametre", par2);
  console.log("1.parametre", par3);
}

exaFunc(1, "selam", true);
exaFunc(1, "selam");
exaFunc(1);
exaFunc(1, undefined, true);

// Kullanım Örneği
const karsilama = (isim: string, zaman?: string): string => {
  if (zaman) {
    return `İyi ${zaman} ${isim}`;
  }

  return `Merhaba ${isim}`;
};

console.log(karsilama("Ahmet", "Akşamlar"));
console.log(karsilama("Ali"));

// Opsiyonel değerleri nesnelerde de kullanabiliyoruz
type User = {
  name: string;
  surname: string;
  age?: number;
};

let user1: User = {
  name: "Ahmet",
  surname: "Yılmaz",
  age: 20,
};

let user2: User = {
  name: "Mehmet",
  surname: "Kara",
};
