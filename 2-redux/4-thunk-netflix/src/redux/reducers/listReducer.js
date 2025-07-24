import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  error: null,
  list: [],
};

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // yüklenirken
    case ACTION_TYPES.LIST_LOADING:
      return { ...state, isLoading: true };

    // hata durumunda
    case ACTION_TYPES.LIST_ERROR:
      return { ...state, isLoading: false, error: payload };

    // veri geldiğinde
    case ACTION_TYPES.LIST_SUCCESS:
      return { ...state, isLoading: false, error: null, list: payload };

    // izleme listesine ekle
    case ACTION_TYPES.ADD_TO_LIST:
      const updated = state.list.concat(payload);

      return { ...state, list: updated };

    // izleme listesine çıkar
    case ACTION_TYPES.REMOVE_FROM_LIST:
      const filtred = state.list.filter((i) => i.id !== payload.id);

      return { ...state, list: filtred };

    default:
      return state;
  }
};

export default listReducer;
