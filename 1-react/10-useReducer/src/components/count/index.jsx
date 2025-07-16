import { useReducer } from "react";
import counterReducer from "../../reducers/counterReducer";

const Counter = () => {
  /*
   * useReducer hooku parametre olarak iki şey alır
   * 1) reducer fonksiyonu:
   * * parametre olarak state'in güncel değerini ve dispatch edilen action'ı alır ardından state'in yeni değerini return eder
   * 2) initial state:
   * * state'in ilk değeri
   
   * useReducer'u çağırdığımızda geriye dizi içierisinde iki değer döndürür
   * 1) state'in güncel değeri
   * 2) action'u reducer'a aktarmaya yarayan dispatch methodu 
   */
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>Sayaç: {state}</h1>

      <div>
        <button onClick={() => dispatch({ type: "SIFIRLA" })}>Sıfırla</button>
        <button onClick={() => dispatch({ type: "ARTTIR" })}>Arttır</button>
        <button onClick={() => dispatch({ type: "AZALT" })}>Azalt</button>
      </div>
    </div>
  );
};

export default Counter;
