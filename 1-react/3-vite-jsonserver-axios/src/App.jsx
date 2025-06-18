import { useEffect, useState } from "react";
import api from "./utils/api";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

const App = () => {
  const [todos, setTodos] = useState([]);

  // Component'ın ekrana basılma anında çalışır
  useEffect(() => {
    // API'dan todo verilerini al ve state'e aktar
    api.get("/todos").then((res) => setTodos(res.data));
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>TODO APP</h1>
        <p>Pratik için basit todo uygulaması</p>
      </header>

      {/* Yeni Todo ekleme formu */}
      <Form />

      {/* Todo'ları listele */}
      <div className="items-list">
        {todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
