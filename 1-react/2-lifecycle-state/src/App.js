import Counter from "./components/counter";
import Lamb from "./components/lamb";
import BuyList from "./components/buy-list";
import FunctionComp from "./diffrence/function-comp";
import ClassComp from "./diffrence/class-comp";
import { useState } from "react";
import UserList from "./components/user-list";
import RecipePicker from "./components/recipe-picker";
import CountDown from "./components/countdown";
import Test from "./components/test";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  console.log("Component ekrana geldi");

  return (
    <div>
      <Counter />

      <Lamb />

      <BuyList />

      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Gizle" : "Göster"}</button>

      {isOpen && (
        <>
          <FunctionComp title="Function Component" />

          <ClassComp title="Class Component" />
        </>
      )}

      <UserList />
      <RecipePicker />

      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Gizle" : "Göster"}</button>

      {isOpen && (
        <div>
          <CountDown />
        </div>
      )}

      <div className="flex">
        <Test />
      </div>
    </div>
  );
};

export default App;
