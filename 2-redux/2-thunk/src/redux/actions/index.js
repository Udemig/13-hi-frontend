import axios from "axios";

// redux thunk aksiyonu
// iki fonksiyonu iç içe yazarak tanımlarız
// içerideki fonksiyon asenkron olabilir ve dispatch'i parametre olarak alır
export const getUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "USERS2_LOADING" });

    axios
      .get("https://dummyjson.com/users")
      // api'dan veri geldiğini reducer'a haber ver
      .then((res) => dispatch({ type: "USERS2_SUCCESS", payload: res.data.users }))
      // api'dan hata geldiğini reducer'a haber ver
      .catch((err) => dispatch({ type: "USERS2_ERROR", payload: err.message }));
  };
};
