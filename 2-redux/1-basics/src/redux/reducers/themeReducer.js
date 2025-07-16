const initialState = {
  theme: "dark",
  isDarkTheme: true,
  systemTheme: "light",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "X":
      return state;

    case "Y":
      return state;

    default:
      return state;
  }
};

export default themeReducer;
