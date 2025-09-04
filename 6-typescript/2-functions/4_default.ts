/*
 ! Default Params (Varsayılan Parametreler)
 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerinin undefined olmasını istemeyebiliriz.
 * Undefined olması yerine varsayılam bir değer sahip olmasını istersek bunu kullanırız
*/

// Örnek
function selamVer(isim: string = "Dünya") {
  console.log(`Merhaba ${isim}`);
}

selamVer("Furkan");
selamVer();

/*
 ! Challange
 * Ürünün kdv eklenmiş fiyatını hesaplayan fonksiyon yazınız
 * Fonksiyon 2 paramtre alsın: ürün fiyatı ve kdv oranı
 * 2. parametreye değer gönderilmediğinde kdv %18'den hesaplansın
 * ana fiyata kdv'yi ekleyip return etsin
  
 * hesapla(200,35) => 270
 * hesapla(200) => 236
*/

// Cevap
function hesapla(fiyat: number, kdvOrani: number = 18): number {
  let kdv = (fiyat * kdvOrani) / 100;
  return fiyat + kdv;
}

console.log(hesapla(200, 35));
console.log(hesapla(200));
