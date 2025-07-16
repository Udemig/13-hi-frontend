/* 
 ! Reducer Fonkiyonu
 * State'i tutan ve yöneten fonksiyon
 * Tutucağı state'in ilk değerini inital state olarak tanımlarız
 * Tuttuğu state'in güncel değerini ve dispatch edilen action'u parametre olarak alır
 * Reducer fonksiyonundan return edilen değer, reducer'ın tuttuğu state'in son hali olur 
 * Fonksiyon içerisinde gelen aksiyona göre state'in nasıl değişeceğine karar veririz
 */

const initialState = {
  todos: [],
  category: [],
  filters: {},
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "X":
      return state;

    case "Y":
      return state;

    default:
      return state;
  }
};

export default todoReducer;
