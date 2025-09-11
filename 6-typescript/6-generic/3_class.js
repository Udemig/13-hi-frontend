var Sorter = /** @class */ (function () {
    function Sorter(data) {
        this.data = data;
    }
    Sorter.prototype.sortData = function () {
        return this.data.sort();
    };
    return Sorter;
}());
var arr1 = new Sorter(["b", "c", "a", "d"]);
var arr2 = new Sorter([1, 2, 4, 5, 3, 9]);
console.log(arr1.sortData());
console.log(arr2.sortData());
