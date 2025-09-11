class Sorter<T> {
  constructor(private data: T[]) {}

  sortData(): T[] {
    return this.data.sort();
  }
}

const arr1 = new Sorter<string>(["b", "c", "a", "d"]);
const arr2 = new Sorter<number>([1, 2, 4, 5, 3, 9]);

console.log(arr1.sortData());
console.log(arr2.sortData());
