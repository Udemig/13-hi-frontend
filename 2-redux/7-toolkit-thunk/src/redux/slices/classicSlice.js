import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: null,
  data: null,
};

const classicSlice = createSlice({
  name: "classic",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    setData: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
  },
});

export const { setLoading, setError, setData } = classicSlice.actions;
export default classicSlice.reducer;
