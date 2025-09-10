/*
 ! Void Type
 * Sadece fonksiyon return tiplerinde kullanabiliriz.
 * Bu fonksiyon herhangi bir değer return etmiyecek anlamına gelir
*/
var func = function () {
    return;
};
/*
 ! Never Type
 * Sadece fonksiyonların return tipi için kullanılır.
 * FOnksiyon hata fırlatıyorsa return tipi olarak never kullanılır.
 * Fonksiyon hiçbir zaman göreviğni tamamlayamaz durumunu ifade eder
*/
var log = function (message) {
    if (!message) {
        throw new Error("Fonksiyona mesaj sağlanmadı");
    }
    else {
        return "Mesaj alındı";
    }
};
log("404 hatası");
log();
