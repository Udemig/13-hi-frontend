/*
 ! Optional Param
 * Normal şartlarda fonksiyonu çağırabilememiz için parametrelerin tamamında değer göndermemiz gerekir.
 * Bazı dırımlarda bazı parametrelerin zorunlu olmasını istemeyebilriz.
 
 * Tanım:
 * (a:string,b?:number) => bu kullanımda a parametresi zorunlu b ise isteğe bağlıdır
 * Eğer opsiyonel parametreye değer göndermezsek undefined olarak kabul eder.
 !!! Opsiyonel olan bir parametrenin ardından zorunlu bir parametre gelemez
*/
// Fonksiyonlarda opsiyonel parametre
function exaFunc(par1, par2, par3) {
    console.log("1.parametre", par1);
    console.log("1.parametre", par2);
    console.log("1.parametre", par3);
}
exaFunc(1, "selam", true);
exaFunc(1, "selam");
exaFunc(1);
exaFunc(1, undefined, true);
// Kullanım Örneği
var karsilama = function (isim, zaman) {
    if (zaman) {
        return "\u0130yi ".concat(zaman, " ").concat(isim);
    }
    return "Merhaba ".concat(isim);
};
console.log(karsilama("Ahmet", "Akşamlar"));
console.log(karsilama("Ali"));
