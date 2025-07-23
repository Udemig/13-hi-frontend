import api from "../../api";
import ACTION_TYPES from "./actionTypes";

// Asenkron Thunk Aksiyonu
// Fonksiyon içerisinde fonksiyon return ederiz
// İçerideki fonksiyon asenkron olabilir ve dispatch parametresi alır
export const getRestaurants = () => (dispatch) => {
  dispatch({ type: ACTION_TYPES.REST_LOADING });

  api
    .get("/restaurants")
    .then((res) => dispatch({ type: ACTION_TYPES.REST_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: ACTION_TYPES.REST_ERROR, payload: err.message }));
};
