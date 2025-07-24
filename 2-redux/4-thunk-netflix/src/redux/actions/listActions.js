import api from "../../utils/api";
import ACTION_TYPES from "./actionTypes";

// redux thunk asenkron aksiyonu
const toggleWatchList = (movie, isAdd) => (dispatch) => {
  // api'a gönderilicek body
  const body = {
    media_type: "movie",
    media_id: movie.id,
    watchlist: isAdd,
  };

  // api isteği at
  api
    .post(`account/19719088/watchlist`, body)
    // istek başarılı olursa reducer'a haber ver
    .then(() => {
      // ekleme/çıkarma durumuna göre:
      isAdd
        ? dispatch({ type: ACTION_TYPES.ADD_TO_LIST, payload: movie })
        : dispatch({ type: ACTION_TYPES.REMOVE_FROM_LIST, payload: movie });
    });
};

// redux thunk asenkron aksiyonu
const getWatchList = () => (dispatch) => {
  // reducer'a haber ver
  dispatch({ type: ACTION_TYPES.LIST_LOADING });

  // api'dan kullanıcının izleme listesini al
  api
    .get(`/account/19719088/watchlist/movies`)
    // reducer'a haber ver
    .then((res) => dispatch({ type: ACTION_TYPES.LIST_SUCCESS, payload: res.data.results }))
    // reducer'a haber ver
    .catch((err) => dispatch({ type: ACTION_TYPES.LIST_ERROR, payload: err.message }));
};

export { toggleWatchList, getWatchList };
