/*
 ! Erişim Belirteçleri
 * Class elemanları il veri tutucağımız zaman bu bilgilerim class'ın dışarısından erişilebilir olup olmama durumunu belirlememizi sağlar

 * Erişim Belirteçleri
 * public: class'ın dışarısından erişileblir
 * protected: class'ın dışarısında erişilemez
 * private: class'ın dışarısından ve hatta class'ı miras alan class'lar tarafından erişilemez
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
// Oluşturduğumuz Class
var House = /** @class */ (function () {
    function House() {
        this.address = "İstanbul";
        this.price = 9874000;
        this.owner = "Ahmet";
    }
    House.prototype.tanim = function () {
        console.log("".concat(this.address, " ").concat(this.price, " ").concat(this.owner));
    };
    return House;
}());
// Miras Alan Class
var Villa = /** @class */ (function (_super) {
    __extends(Villa, _super);
    function Villa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Villa.prototype.tanim = function () {
        console.log("".concat(this.address, " ").concat(this.price));
    };
    return Villa;
}(House));
// Class'ın Örneği (Dışarısı)
var ev = new House();
console.log(ev.address);
// console.log(ev.price); //! HATA
// console.log(ev.owner); //! HATA
/*
 * Not: Erişim belirteçleri ts'in bütün özelliklerinde olduğu gibi kodu js'e derlediğimizde ortadan kaybolur.
 * Yani sadece geliştirme aşamasında kullanılır
 */
