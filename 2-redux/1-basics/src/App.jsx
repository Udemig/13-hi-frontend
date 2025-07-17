import { useEffect } from "react";
import Form from "./components/form";
import List from "./components/list";
import api from "./api";
import { useDispatch } from "react-redux";
import { setTodos } from "./redux/actions/todoActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // api'dan toddo verilerini al
    api
      .get("/todos")
      // setTodos aksiyonun dispatch ederek
      // reducerdaki state'in güncellenmesini sağlar
      .then((res) => dispatch(setTodos(res.data)));
  }, []);

  return (
    <div className="h-screen container p-10">
      <h1 className="text-center text-2xl font-bold">
        <span className="text-yellow-600">REDUX</span> CRUD
      </h1>

      <Form />

      <List />
    </div>
  );
};

export default App;
