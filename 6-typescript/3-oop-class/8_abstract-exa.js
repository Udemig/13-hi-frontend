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
var MusicPlayer = /** @class */ (function () {
    function MusicPlayer(apiUrl) {
        this.apiUrl = apiUrl;
    }
    MusicPlayer.prototype.getMusic = function () {
        console.log(this.apiUrl + " müzik çekiliyor...");
    };
    return MusicPlayer;
}());
// Soyut sınıfı miras alan sınıf
var Spotify = /** @class */ (function (_super) {
    __extends(Spotify, _super);
    function Spotify() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spotify.prototype.playMusic = function (name) {
        console.log(name + " müziği spotify'da çalıyor...");
    };
    return Spotify;
}(MusicPlayer));
// Soyut sınıfı miras alan sınıf
var AppleMusic = /** @class */ (function (_super) {
    __extends(AppleMusic, _super);
    function AppleMusic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppleMusic.prototype.playMusic = function (name) {
        console.log(name + " müziği apple music'den çalıyor...");
    };
    return AppleMusic;
}(MusicPlayer));
var spotify = new Spotify("https://spotify.api.com");
var appleMusic = new AppleMusic("https://api.music.com");
spotify.getMusic();
appleMusic.getMusic();
spotify.playMusic("yüz yüze");
appleMusic.playMusic("yüz yüze");
