/*
 * Function Type
 * Typescript'de fonksiyonların tipini tanımlarken kastımız fonksiyonun aldığı parametlerin ve dönüş değerinin tipini tanımlarız
 */
// normal function
function add(a, b) {
    return a + b;
}
var x = add(12, 435);
console.log(x);
// arrow function
var add2 = function (a, b) {
    return a + b;
};
var y = add2(123, 234534);
console.log(y);
// örnek 1
// sayının pozitif olup olmadığını kontrol eden fonksiyon
var isPositive = function (sayi) {
    return sayi > 0 ? true : false;
};
console.log(isPositive(10));
console.log(isPositive(-20));
// örnek 2
// parametre olarak aldığı sayıların ortalamasını hesaplayan fonksiyon
var average = function (arr) {
    var toplam = arr.reduce(function (acc, sayi) { return acc + sayi; }, 0);
    return toplam / arr.length;
};
var result = average([1, 3, 45, 65, 88, 43]);
console.log(result);
