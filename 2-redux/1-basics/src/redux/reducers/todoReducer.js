/* 
 ! Reducer Fonkiyonu
 * State'i tutan ve yöneten fonksiyon
 * Tutucağı state'in ilk değerini inital state olarak tanımlarız
 * Tuttuğu state'in güncel değerini ve dispatch edilen action'u parametre olarak alır
 * Reducer fonksiyonundan return edilen değer, reducer'ın tuttuğu state'in son hali olur 
 * Fonksiyon içerisinde gelen aksiyona göre state'in nasıl değişeceğine karar veririz
 */

import { ACTION_TYPES } from "../actions/actionTypes";

const initialState = {
  todos: [],
  category: [],
  filters: {},
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_TODOS:
      return { ...state, todos: action.payload };

    case ACTION_TYPES.ADD_TODO:
      // yeni todoyu todos dizisine ekle
      const newTodos = state.todos.concat(action.payload);
      // state'in yeni değerini return et
      return { ...state, todos: newTodos };

    case ACTION_TYPES.DELETE_TODO:
      const filtredTodos = state.todos.filter((todo) => todo.id !== action.payload);

      return { ...state, todos: filtredTodos };

    case ACTION_TYPES.TOGGLE_TODO:
      // state içerisindeki todos dizisini dön action payload'ı ile gelen id değerine karşılık gelen elemanın isDone değerini tersine çevir dizideki diğer elemanları koruyoruz
      const toggledTodos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );

      return { ...state, todos: toggledTodos };

    case ACTION_TYPES.UPDATE_TODO:
      const updatedTodos = state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo));

      return { ...state, todos: updatedTodos };

    default:
      return state;
  }
};

export default todoReducer;
