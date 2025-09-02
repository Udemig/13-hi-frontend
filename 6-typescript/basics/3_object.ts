/*
 ! Object
 * Normal şartlarda ts'de bir object type'ı mevcuttur.
 * Ama object type'ı ucu çok açık olan bit tip olduğu için kullanmayı pek tercih etmiyoruz.
 * Biz genelde daha spesifik bir şekilde özellikleri ve tipi belirli olan nesnelerle çalışırız.
*/

// nesne tipi tanımlamanın yanlış yolu
let data: object;

data = {};
data = [];
data = () => {};
data = new Date();

// nesne tipi tanımlamanın doğru yolu
let student: {
  id: number;
  firstName: string;
  lastName: string;
  isGraduated: boolean;
};

// belirlediğimiz tipe göre nesnenin değerlerini atamamız gerekiyor.
student = {
  id: 123,
  firstName: "Ahmet",
  lastName: "Yılmaz",
  isGraduated: true,
};
