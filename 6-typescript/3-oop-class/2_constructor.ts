/*
 ! Constructor (Yapıcı)
 * Construcor methodu oluşturulan nesnenin değerlerini dışarıdan almaya yarar
 * Constructar sayesinde bir class'tan oluşturulan bütün nesneler biribinin kopyası lazım.
 * Constructor new anahtar kelimesi ile class'ı çağırdığımızda çalışan ilk koddur.
 * Constructor ile class'a gelen parametrelere erişebiliriz 
*/

class Person {
  // properties (özellikleri)
  name: string;
  surname: string;
  age: number;

  // constructor (yapıcı)
  constructor(newName: string, newSurname: string, newAge: number) {
    this.name = newName;
    this.surname = newSurname;
    this.age = newAge;
  }

  // methods
  speak() {
    console.log("Merhaba benim adım: " + this.name);
  }
}

const person1 = new Person("Ahmet", "Yıldız", 67);
const person2 = new Person("Ayşe", "Kaya", 24);

console.log(person1);
console.log(person2);

/*
 ! Challange
 * Bir teknolojik / ev alatei için bir class oluşturun.
 * Bu class'tan oluşturduğunuz nesneler değerini parametre olarak almalı
 * Bu class en az 4 çzellik ve 1 method içermelidir.
 * Class'tan bir önek oluşturun (new ile)
*/

// Yanıt
class Tech {
  isSpinningDevice: boolean;
  weight: number;
  price: number;
  category: string;

  constructor(isSpinningDevice: boolean, weight: number, price: number, category: string) {
    this.isSpinningDevice = isSpinningDevice;
    this.category = category;
    this.price = price;
    this.weight = weight;
  }

  listAllFields(): void {
    console.log(
      `Device \nSpinning : ${this.isSpinningDevice}\nWeight : ${this.weight}\nPrice : ${this.price}\nCategory : ${this.category}`
    );
  }
}

const obj = new Tech(true, 24, 1400, `Gaming`);

obj.listAllFields();
