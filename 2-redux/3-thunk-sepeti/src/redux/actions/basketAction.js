import ACTION_TYPES from "./actionTypes";
import api from "../../api/index";

// sepetteki ürünleri alıp reducer'a aktar
export const getBasket = () => (dispatch) => {
  dispatch({ type: ACTION_TYPES.BASKET_LOADING });

  api
    .get("/cart")
    .then((res) => dispatch({ type: ACTION_TYPES.BASKET_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: ACTION_TYPES.BASKET_ERROR, payload: err.message }));
};

// sepette olamayan bir ürünü ekle
export const createItem = (product) => (dispatch) => {
  // 1) sepete kaydedilecek veriyi hazırla
  const newItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantId: product.restaurantId,
    amount: 1,
  };

  // 2) api'a sepete ekleme için istek at
  api
    .post("/cart", newItem)
    // 3) isteğin başarılı olursa reducer'a haber gönder
    .then((res) => dispatch({ type: ACTION_TYPES.CREATE_ITEM, payload: res.data }))
    .catch(() => alert("bir sorun oluştu"));
};

// ürünün miktarını arttır
export const updateItem = (id, newAmount) => (dispatch) => {
  // api'a güncelleme isteği at
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    // istek başarılı olursa reducer'a haber ver
    .then((res) => dispatch({ type: ACTION_TYPES.UPDATE_ITEM, payload: res.data }))
    .catch(() => alert("bir sorun oluştu"));
};

// ürünü sepettek kaldır
export const removeItem = (id) => (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then(() => dispatch({ type: ACTION_TYPES.REMOVE_ITEM, payload: id }))
    .catch(() => alert("üzgünüz bir sorun oluştu"));
};
