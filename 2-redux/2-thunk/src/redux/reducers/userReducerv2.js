const initialState = {
  isLoading: true,
  error: null,
  users: [],
};

const userReducerv2 = (state = initialState, action) => {
  switch (action.type) {
    case "x":
      return state;

    default:
      return state;
  }
};

export default userReducerv2;
