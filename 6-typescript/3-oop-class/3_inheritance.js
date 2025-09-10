/*
 ! Inheritance (Kalıtım / Miras)
 * Bir oop kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasına izin verir.
 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod orginizasyonunu güçlendirir.
 * Miras her zaman "ana sınıf"'tan türetilmiş olan "alt sınıf"'lar arası gerçekleşir.
 * Alt sınıf (derived class), bir üst sınıftan (parent class) özelliklerini ve methodlarını alır
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Parent Class (Ana Sınıf)
var GeometricShape = /** @class */ (function () {
    function GeometricShape(newName) {
        this.name = newName;
    }
    GeometricShape.prototype.list = function () {
        console.log("".concat(this.name, " isimli \u015Fekildir"));
    };
    return GeometricShape;
}());
// Derived Class (Alt Sınıf) - Constructor Yok
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sides = 4;
        _this.sidesLength = 58;
        return _this;
    }
    return Square;
}(GeometricShape));
var square = new Square("Kare");
console.log(square);
square.list();
// Derived Class (Alt Sınıf) - Constructor Var
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(newName, newRadius) {
        var _this = _super.call(this, newName) || this; // super anahtar kelimesi ile parent classs'ın constructor'ına değer gönderiyoruz
        _this.radius = newRadius;
        return _this;
    }
    return Circle;
}(GeometricShape));
// Parent
var Arac = /** @class */ (function () {
    function Arac(newMarka, newModel) {
        this.marka = newMarka;
        this.model = newModel;
    }
    Arac.prototype.calistir = function () {
        console.log("Araca giriş yapılıyor");
    };
    return Arac;
}());
// Derived Class
var Otomobil = /** @class */ (function (_super) {
    __extends(Otomobil, _super);
    function Otomobil(newMarka, newModel, newRenk, newYakitTipi) {
        var _this = _super.call(this, newMarka, newModel) || this;
        _this.renk = newRenk;
        _this.yakitTipi = newYakitTipi;
        return _this;
    }
    // yeni method ekle
    Otomobil.prototype.gazaBas = function () {
        console.log("Gaz açılıyor...");
    };
    // method override: miras olarak alınan methodu değiştirmek
    Otomobil.prototype.calistir = function () {
        _super.prototype.calistir.call(this); // üst sınıfın methodunu çağırdık
        console.log("Otomobil çalıştırıldı...");
    };
    return Otomobil;
}(Arac));
var bmw = new Otomobil("Bmw", "X5", "siyah", "benzin");
console.log(bmw);
bmw.calistir();
bmw.gazaBas();
// Bir class aynı anda birden fazla farklı class'ı miras alamaz.
// Ama miras alma olayı birden fazla kez gerçekleşebilir
var Human = /** @class */ (function () {
    function Human() {
        this.eyeColor = "";
    }
    return Human;
}());
var Father = /** @class */ (function (_super) {
    __extends(Father, _super);
    function Father() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.eyeColor = "Kahverengi";
        return _this;
    }
    return Father;
}(Human));
var Mother = /** @class */ (function (_super) {
    __extends(Mother, _super);
    function Mother() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.eyeColor = "Mavi";
        return _this;
    }
    return Mother;
}(Human));
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Father)); // hem anne hem baba class'ını miras alma şansımız yok
var child = new Child();
console.log(child);
