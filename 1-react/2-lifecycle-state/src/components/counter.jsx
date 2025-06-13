import { useState } from "react";

const Counter = () => {
  /*
   * React'da arayüz'de değişime sebep olucak bütün veriler state'de tutulur

   * useState parametre olarak tutucağmız verinin başlangıç değerini alır
   * useState fonksiyonunu çağırınca geriye bir dizi içerisinde:
   * [stateDegeri, stateGuncellemeFonksiyonu] return eder
   * bu veriye ve methoda daha rahat erişebilmek array destructring yöntemini kullanırız
   
   * Oluşturulan state'in değeri sadece setState methoduyla değiştirelebilir
  
   * State'in değeri her değiştiğinde gerçekleşen güncellemenin arayüze yansıması için react otomatik olarak component'ı tekrar render eder
   */
  const [stateDegeri, stateGuncelle] = useState(0); //initialState

  // olay anında çalışıcak fonksiyonu component içerisinde tanımladık
  const handleDec = () => {
    stateGuncelle(stateDegeri - 1);
  };

  // arttırma anında çalışıcak fonksiyon
  const handleInc = () => {
    // setState methodu 1. kullanım
    // aynı fonksiyon içerisinde 1 kere state güncellenicekse bu yöntem
    stateGuncelle(stateDegeri + 1); // 0 + 1 = 1
    stateGuncelle(stateDegeri + 1); // 0 + 1 = 1
    stateGuncelle(stateDegeri + 1); // 0 + 1 = 1

    // setState methodu 2. kullanım
    // aynı fonksiyon içerisinde 1den fazşa state güncellenicekse bu:
    stateGuncelle((oncekiDeger) => oncekiDeger + 1); // 0 + 1 = 1
    stateGuncelle((oncekiDeger) => oncekiDeger + 1); // 1 + 1 = 2
    stateGuncelle((oncekiDeger) => oncekiDeger + 1); // 2 + 1 = 3
  };

  return (
    <div className="counter">
      <button onClick={handleDec}>Azalt</button>
      <h2>{stateDegeri}</h2>
      <button onClick={handleInc}>Arttır</button>
    </div>
  );
};

export default Counter;
