import { useReducer } from "react";
import todoReducer, { intialState } from "../../reducers/todoReducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, intialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();

    // yazı yoksa hata gönder
    if (!text) return alert("Lütfen içerik giriniz");

    // state'e yeni todoyu ekliyecek askiyonu dispatch et
    dispatch({ type: "CREATE", payload: text });
  };

  return (
    <div>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>Değiş</button>

      <div>
        <h1>TEMA: {state?.theme}</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="todo...." />
        <button>Gönder</button>
      </form>

      <ul>
        {state.todos.map((item) => (
          <li>
            <span>{item.text}</span>
            <button onClick={() => dispatch({ type: "DELETE", payload: item.id })}>sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
