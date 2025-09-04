/*
 ! Rest Param
 * Parametre listesinin belirsiz veya sınırsız olduğu durumlarda kullanılır.

 * Özellikleri
 * Bir parametreyi res parametre yapmak için "..." operatörünü kullanırız
 * Bir rest parametrenin ardından normal parametre tanımlanamaz
 * Sebebi ise rest parametrenin kaç değer alıcağının belli olmaması
 * Res parametrenin aldığı değerle en son dizi haline getirilir
*/

// Örnek - Yoklama
const yoklama = (teacher: string, ...students: string[]) => {
  console.log(teacher + " öğretmen yoklama alıyor");
  console.log("----------------------------------");
  students.forEach((student) => console.log(student + " burdaaa!"));
  console.log(students.length + " öğrenci var");
};

yoklama("merve", "ali", "mehmet", "fatma", "ayşe", "furkan", "hamza");

/*
 ! Challange
 * İstenildiği kadar sayıyı parametre olarak alan bir fonksiyon yazınız
 * parametre olarak aldığı ilk 2 sayıyı çarpsın
 * ilk 2 sayı dışında gelen bütün sayıları toplasın
 * toplam ve çarpım değerlerini bir nesne içerisinde return etsin
 
 * hesapla(2,3,4,5,6) ====> {carpim:6,toplam:15}
 kopya: toplam için reduce kullanın: sayilar.reduce((toplam,sayi) => toplam + sayi,0)  
*/

// cevap - 1
const hesapla1 = (...sayılar: number[]) => {
  const çarpım = sayılar[0] * sayılar[1];

  const topla = sayılar.slice(2).reduce((toplama, sayı) => toplama + sayı, 0);

  return { çarpım, topla };
};

console.log(hesapla1(2, 3, 4, 5, 6));
