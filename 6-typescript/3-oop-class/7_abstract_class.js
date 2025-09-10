/*
 ! Abstract Class (Soyut Sınıf)
 * Abstract class'lar sınıflar için birebir şablon görevi görür.
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların ortak özelliklerini ve methodlarını belirtiriz.
 * Soyut sınıfların doğrudan örnekleri oluşturulamaz
 * Bundan dolayı soyut sınıflar normal sınıflar için tip tanımı görevi tanım.
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
// Soyut Sınıf
var Photo = /** @class */ (function () {
    // constructor
    function Photo(cameraMode, filter) {
    }
    // method: doğrudan miras alan sınıfa geçicek
    Photo.prototype.takePhoto = function () {
        console.log("Fotoğraf çekiliyor...");
    };
    return Photo;
}());
// soyut sınıfların doğrudan örneği alınamaz
// new Photo(); //!hata
// Soyut sınıfı miras alan bir child sınıf tanımlayım
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Instagram.prototype.sharePhoto = function (user) {
        console.log("Foto\u011Frafa instada ".concat(user, " ile payla\u015F\u0131ld\u0131"));
    };
    return Instagram;
}(Photo));
// Soyut sınıfı miras alan bir child sınıf tanımlayım
var Twitter = /** @class */ (function (_super) {
    __extends(Twitter, _super);
    function Twitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Twitter.prototype.sharePhoto = function (user) {
        console.log("Foto\u011Fraf tw'da ".concat(user, " ile payla\u015F\u0131ld\u0131"));
    };
    return Twitter;
}(Photo));
var insta = new Instagram("arka", "black/white");
var tw = new Twitter("arka", "black/white");
insta.takePhoto();
insta.sharePhoto("ahmet");
tw.takePhoto();
tw.sharePhoto("ali");
