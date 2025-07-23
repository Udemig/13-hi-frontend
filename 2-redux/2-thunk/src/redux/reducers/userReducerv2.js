// başlangıç state'i
const initialState = {
  isLoading: true,
  error: null,
  users: [],
};

const userReducerv2 = (state = initialState, action) => {
  switch (action.type) {
    case "USERS2_LOADING":
      return { ...state, isLoading: true };

    case "USERS2_ERROR":
      return { ...state, isLoading: false, error: action.payload };

    case "USERS2_SUCCESS":
      return { ...state, isLoading: false, error: null, users: action.payload };

    default:
      return state;
  }
};

export default userReducerv2;
