import { ACTION_TYPES } from "./actionTypes";

/*
 * Aksiyonları dispatch ederken her seferinde
 * dispatch({ type: ACTION_TYPES.ADD_TODO, payload: newTodo });
 * yukarıdaki ifadeyi yazmak kod tekrarına sebep olur
 * bunu önlemek amacıyla aksiyon nesnesnini oluşturucak bir fonksiyon yazabiliriz
 */

// Aksiyon oluşturan fonksiyon
const addTodo = (payload) => ({ type: ACTION_TYPES.ADD_TODO, payload });
const deleteTodo = (payload) => ({ type: ACTION_TYPES.DELETE_TODO, payload });
const toggleTodo = (payload) => ({ type: ACTION_TYPES.TOGGLE_TODO, payload });
const updateTodo = (payload) => ({ type: ACTION_TYPES.UPDATE_TODO, payload });
const setTodos = (payload) => ({ type: ACTION_TYPES.SET_TODOS, payload });

export { addTodo, deleteTodo, toggleTodo, updateTodo, setTodos };
