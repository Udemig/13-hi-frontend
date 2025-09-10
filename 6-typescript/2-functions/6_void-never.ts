/*
 ! Void Type
 * Sadece fonksiyon return tiplerinde kullanabiliriz.
 * Bu fonksiyon herhangi bir değer return etmiyecek anlamına gelir
*/

const func1 = (): string => {
  return "selam";
};

const func2 = (): number => {
  return 45;
};

const func = (): void => {
  return;
};

/*
 ! Never Type
 * Sadece fonksiyonların return tipi için kullanılır.
 * FOnksiyon hata fırlatıyorsa return tipi olarak never kullanılır.
 * Fonksiyon hiçbir zaman göreviğni tamamlayamaz durumunu ifade eder
*/

const log = (message?: string): never | string => {
  if (!message) {
    throw new Error("Fonksiyona mesaj sağlanmadı");
  } else {
    return "Mesaj alındı";
  }
};

log("404 hatası");
log();
