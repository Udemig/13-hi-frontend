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
const color = {
  red: 0,
  yellow: 1,
  green: 2,
};

// typescript enum yöntemi
enum Color {
  red,
  yellow,
  green,
}

// Enum kullandığımız seneryoda enum'ı bir tip olarak istediğimiz yerde kullanabiliyoruz
// renk değişkenin tipini color enum'ı olarak tanımladık
let renk: Color;

// renk değişkenin tipi color enum'ı olduğu için değer ataması yaparken sadece enum'ın değerlerini kullanabiliyoruz
renk = Color.red;
renk = Color.green;
renk = Color.yellow;
// renk = "mor"; //!hata

// Örnek - 2
enum Days {
  monday = 1,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

let day1 = Days.monday;
let day2 = Days[5];

console.log(day1); // 1
console.log(day2); // friday

// Örnek - 3
// Bir kargo sitesi yazıyoruz ve kullanıcılara sıklıkla kargo durumunu bildirmek gerekiyor.
// Bu durumda kargo aşamalarını js'te bir nesneye atar ordan çağırırdık, ts'de ise enum kullanarak daha okunaklı ve anlaşılır bir kod yazabiliriz

enum Status {
  pending = "Beklemede",
  proccessing = "İşleniyor",
  delivered = "Teslim Edildi",
  cancelled = "İptal Edildi",
}

// artık ahmet'in kargo durumunun alabileceği değerleri kısıtlamak Status enum'ını kullanabiliriz.
let ahmedin_kargo_durumu: Status;

// değer ataması yaparken enum'un değerlerinin dışarısına çı ka ma yız
ahmedin_kargo_durumu = Status.delivered;
ahmedin_kargo_durumu = Status.cancelled;
// ahmedin_kargo_durumu = "yakında gelir";//!hata: enumda olmayan bir değer

console.log(ahmedin_kargo_durumu);
