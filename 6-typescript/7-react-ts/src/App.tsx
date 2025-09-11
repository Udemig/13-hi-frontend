import { useRef, useState } from "react";

const App = () => {
  // state tanımlarken state'de tutulan verinin tipini generic ile tanımlamalıyız
  const [count, setCount] = useState<number>(0);

  // ref tanımlarken referansı tutulacak elementin tipini generic ile tanımlamalıyız
  const buttonRef = useRef<HTMLButtonElement>(null);

  // getElement methodları ile element seçilirse as operatörü ile element tipini belirleriz
  const x = document.getElementById("search") as HTMLInputElement;

  return (
    <div>
      <input id="search" type="text" />

      <button ref={buttonRef}>Yenile</button>

      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;
