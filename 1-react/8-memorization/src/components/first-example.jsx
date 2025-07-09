import { useState, useMemo } from "react";

const FirstExample = () => {
  const [count, setCount] = useState(0);

  /*
   * Bir react bileşini her render olduğunda içersindeki fonksiyon / yapılan hesaplamalar tekrar çalışır.
   * Eğerki bu hesaplama kapsamlıysa her render sırasında tekrar tekrar yapılması aşırı bellek / işlemci tüketiminden dolayı performans sorunlarına yol açar
   * Bu sorunları çözmek için hesaplmayı useMemo() içerisinde yaparız
   * useMemo() hesaplamayı yapar ardından hesaplama sonucunu önbellek / cache 'e aktarır
   * Devamında component her render olduğunda hesaplamayı baştan yapmak yerine daha önce yapıp cache'e attığı sonucu kullanır
   */

  // useMemo() olmadan                          useMemo() ile
  // 56 x 25 > 60sn de hesapladık               56 x 25 > 60sn de hesapladık ve önbelleğe aktardık
  // 56 x 25 > 60sn de hesapladık               56 x 25 > 1sn de önbellekteki cevabı getirdik

  const formattedArray = useMemo(() => {
    // örn: bu 10k elemanlı dizi api'dan gelmiş olsun
    const array = new Array(10000000).fill("Udemig");
    // dizi istediğimiz formatta olmadığı için elemanları güncelledik"
    return array.map((item) => item + " Akademi");
  }, []);

  return (
    <div>
      <h1>{formattedArray[0]}</h1>

      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default FirstExample;
