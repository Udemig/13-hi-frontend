// başlangıç state'i
export const intialState = {
  todos: [],
  theme: "dark",
};

// Reducer fonksiyonu
const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      // -todo nesnesi oluştur
      const newTodo = { text: action.payload, id: new Date().getTime() };

      // -yeni todo nesnesini diziyi ekle
      const updatedTodos = state.todos.concat(newTodo);

      // state'in yeni halini retun et
      return { ...state, todos: updatedTodos };

    case "DELETE":
      // aksiyonun payload'ı ile gelen id'li elemanı diziden kaldır
      const filtredTodos = state.todos.filter((item) => item.id !== action.payload);

      // state'in yeni değerini return et
      return { ...state, todos: filtredTodos };

    case "TOGGLE_THEME":
      // yeni temayı belirle
      const newTheme = state.theme === "dark" ? "light" : "dark";

      // state'in yeni değerini return et
      return { ...state, theme: newTheme };
    default:
      return state;
  }
};

export default todoReducer;
