import { useCallback, useState } from "react";
import Display from "./display";

const SecondExample = () => {
  const [name, setName] = useState();
  const [count, setCount] = useState(1);

  console.log("Example component'ı render oldu");

  /*
   * Component her render olduğunda bu fonksiyon yendien oluşturuluyor.
   * Bu fonksiyonu prop olarak gönderdiğimiz component React.memo() kullanıyor olsa bile her render sırasında farklı bir fonksiyon gönderdiğimiz için react.memo işlevini tamamen yitiriyo.
   * Yapmamız gereken her render sırasında yeniden fonksiyon oluşmasını useCallback hooku ile engellemek
   */

  const increase = useCallback(() => {
    setCount(() => count + 1);
  }, []);

  return (
    <div>
      <h1>React.Memo() Örneği</h1>

      <h1>İsminiz: {name}</h1>

      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Arttır</button>

      <Display count={count} increase={increase} />
    </div>
  );
};

export default SecondExample;
