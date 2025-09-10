/*
 * Fonksiyonlarda olduğu gibi generic yapısını yeniden kullanılabilir type ve interface'ler oluşturmak için kullanabiliriz
 */

type ArrayType<T> = {
  items: T[];
  addItem: (newItem: T) => void;
  getItem: (index: number) => T;
};

const array1: ArrayType<number> = {
  items: [1, 2, 3, 4, 5],
  addItem: (newItem) => {
    array1.items.push(newItem);
  },
  getItem: (index) => {
    return array1.items[index];
  },
};

// İsimlendirme ve Interface
// Generic isimlendiriken tek harf kullanlur
// T: Type
// K: Key
// V: Value
// E: Element
// R: Return Type
// S: State

interface IPerson<T, K> {
  name: T;
  age: K;
  id: K;
  father: T;
  mother: T;
}

const foo: IPerson<string, number> = {
  name: "John",
  age: 20,
  id: 1,
  father: "John",
  mother: "Jane",
};

// Gerçek bir projede generic'in efektif kullanımı:
// api'dan 2 farklı cevap geldi ve bu cevapların tiplerini tanımlamak zorundayız
const apiResponse1 = {
  data: [
    {
      id: 1,
      name: "John",
      age: 20,
    },
  ],
  total: 60,
  skip: 0,
  limit: 15,
};

const apiResponse2 = {
  data: [
    {
      title: "Margarita Pizza",
      price: 100,
      cuisine: "Italian",
    },
  ],
  total: 60,
  skip: 0,
  limit: 15,
};

interface IUser {
  id: number;
  name: string;
  age: number;
}

interface IRecipe {
  title: string;
  price: number;
  cuisine: string;
}

interface APIResponse<T> {
  data: T[];
  total: number;
  skip: number;
  limit: number;
}

const userResponse: APIResponse<IUser> = apiResponse1;
const recipeResponse: APIResponse<IRecipe> = apiResponse2;
