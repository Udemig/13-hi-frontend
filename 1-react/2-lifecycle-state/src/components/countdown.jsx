import { useEffect, useState } from "react";

const CountDown = () => {
  const [count, setCount] = useState(30);

  useEffect(() => {
    // Her saniye sayaç state'ini 1 eksilt
    const id = setInterval(() => {
      // Eğer 0'dan büyükse 1 eksilt değilse 0'a eşit
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // componentWillUnmount: sayacı temizle
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>Geri Sayım: {count}</h1>
    </div>
  );
};

export default CountDown;
