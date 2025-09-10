/*
 ! Constructor (Yapıcı)
 * Construcor methodu oluşturulan nesnenin değerlerini dışarıdan almaya yarar
 * Constructar sayesinde bir class'tan oluşturulan bütün nesneler biribinin kopyası lazım.
 * Constructor new anahtar kelimesi ile class'ı çağırdığımızda çalışan ilk koddur.
 * Constructor ile class'a gelen parametrelere erişebiliriz
*/
var Person = /** @class */ (function () {
    // constructor (yapıcı)
    function Person(newName, newSurname, newAge) {
        this.name = newName;
        this.surname = newSurname;
        this.age = newAge;
    }
    // methods
    Person.prototype.speak = function () {
        console.log("Merhaba benim adım: " + this.name);
    };
    return Person;
}());
var person1 = new Person("Ahmet", "Yıldız", 67);
var person2 = new Person("Ayşe", "Kaya", 24);
console.log(person1);
console.log(person2);
