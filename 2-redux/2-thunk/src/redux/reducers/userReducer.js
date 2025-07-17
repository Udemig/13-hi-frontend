const initialState = {
  isLoading: true,
  error: null,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "x":
      return state;

    default:
      return state;
  }
};

export default userReducer;
