import { useState, useEffect } from "react";

const FunctionComp = (props) => {
  const [count, setCount] = useState(0);
  /*
   * useEffect 2 paramatre alır
   * Bu parametreleri nasıl gönderdiğimiz useEffectin hangi yaşam döngüsü anını izleyeceiğini belirler
   * 1.param: çalışıcak olan fonksiyon
   * 2.param: bağımlılık dizisi (dependency array)
   */

  // Bileşenin ekrana gelme anını izle (componentDidMount)
  useEffect(() => {
    console.log("Bileşen ekrana geldi");
  }, []);

  // Bileşenin güncellenme anını izle (componentDidUpdate)
  // count state'i bağımlılık dizisinde olduğu için bu state her değiştiğinde fonksiyon çalışır
  useEffect(() => {
    console.log("Bileşen güncellendi", count);
  }, [count]);

  // Bileşenin ekrandan ayrılma anını izle (componentWillUnMount)
  useEffect(() => {
    return () => console.log("Bileşen Gitti");
  }, []);

  return (
    <div>
      <h3 className="title">{props.title}</h3>

      <div className="counter">
        <button onClick={() => setCount(count - 1)}>-</button>

        <p>{count}</p>

        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default FunctionComp;
