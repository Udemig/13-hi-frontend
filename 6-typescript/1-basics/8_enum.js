/*
 ! Enum (Numaralandırma)
 * Belirli değerle kümesi
 * Benzer kategorideki değerleri bir arada tutmak için kullanılır
  
 * İsimlendirme:
 * İlk harfi büyük olur
 * Çoğul takısı kullanılmaz
 * Months X | Month ✔︎
*/
// Örnek - 1
// Trafik ışığının aşamasının verilerini tutalım
// klasik js yöntemi
var color = {
    red: 0,
    yellow: 1,
    green: 2,
};
// typescript enum yöntemi
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
// Enum kullandığımız seneryoda enum'ı bir tip olarak istediğimiz yerde kullanabiliyoruz
// renk değişkenin tipini color enum'ı olarak tanımladık
var renk;
// renk değişkenin tipi color enum'ı olduğu için değer ataması yaparken sadece enum'ın değerlerini kullanabiliyoruz
renk = Color.red;
renk = Color.green;
renk = Color.yellow;
// renk = "mor"; //!hata
// Örnek - 2
var Days;
(function (Days) {
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thursday"] = 4] = "thursday";
    Days[Days["friday"] = 5] = "friday";
    Days[Days["saturday"] = 6] = "saturday";
    Days[Days["sunday"] = 7] = "sunday";
})(Days || (Days = {}));
var day1 = Days.monday;
var day2 = Days[5];
console.log(day1); // 1
console.log(day2); // friday
// Örnek - 3
// Bir kargo sitesi yazıyoruz ve kullanıcılara sıklıkla kargo durumunu bildirmek gerekiyor.
// Bu durumda kargo aşamalarını js'te bir nesneye atar ordan çağırırdık, ts'de ise enum kullanarak daha okunaklı ve anlaşılır bir kod yazabiliriz
var Status;
(function (Status) {
    Status["pending"] = "Beklemede";
    Status["proccessing"] = "\u0130\u015Fleniyor";
    Status["delivered"] = "Teslim Edildi";
    Status["cancelled"] = "\u0130ptal Edildi";
})(Status || (Status = {}));
// artık ahmet'in kargo durumunun alabileceği değerleri kısıtlamak Status enum'ını kullanabiliriz.
var ahmedin_kargo_durumu;
// değer ataması yaparken enum'un değerlerinin dışarısına çı ka ma yız
ahmedin_kargo_durumu = Status.delivered;
ahmedin_kargo_durumu = Status.cancelled;
// ahmedin_kargo_durumu = "yakında gelir";//!hata: enumda olmayan bir değer
console.log(ahmedin_kargo_durumu);
