import { useSelector } from "react-redux";
import Card from "../card";

const List = () => {
  // store'da tutulan verilere abone olmaya yarayan fonksiyon
  // useSelector hook'u parametre olarak bir fonksiyon al
  const { todos } = useSelector((store) => store.todoReducer);

  return (
    <div className="grid gap-10 mt-10">
      {todos.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
