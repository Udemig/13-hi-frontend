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
var yoklama = function (teacher) {
    var students = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        students[_i - 1] = arguments[_i];
    }
    console.log(teacher + " öğretmen yoklama alıyor");
    console.log("----------------------------------");
    students.forEach(function (student) { return console.log(student + " burdaaa!"); });
    console.log(students.length + " öğrenci var");
};
yoklama("merve", "ali", "mehmet", "fatma", "ayşe", "furkan", "hamza");
