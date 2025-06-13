import Counter from "./components/counter";
import Lamb from "./components/lamb";
import BuyList from "./components/buy-list";
import FunctionComp from "./diffrence/function-comp";
import ClassComp from "./diffrence/class-comp";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1 className="title">React Hooks</h1>

      <Counter />

      <Lamb />

      <BuyList />

      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Gizle" : "Göster"}</button>

      {isOpen && (
        <div>
          <FunctionComp title="Function Component" />

          {/* <ClassComp title="Class Component" /> */}
        </div>
      )}
    </div>
  );
};

export default App;
