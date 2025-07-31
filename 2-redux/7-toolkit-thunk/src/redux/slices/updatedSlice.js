import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/*
 * createAsynThunk ile asenkron bir thunk akyisonu oluşturucaz
 * api isteğini attıktan sonra api'dan gelen cevaba bağlı olarak reducer'a otomatik haber gönder
 * api isteği atıldğı anda pending aksiyonu dispatch eder
 * api isteği başarılı olursa fulfilled aksiyonu dispatch eder
 * api isteği başarısız olursa rejected aksiyonu dispatch eder
 */
export const getUsers = createAsyncThunk("updated/getUsers", async () => {
  // api isteğini at
  const res = await axios.get("https://dummyjson.com/users");

  // fulfilled anı için aksiyonun payload değerini return ediyoruz
  return res.data.users;
});

const initialState = {
  isLoading: true,
  error: null,
  data: null,
};

const updatedSlice = createSlice({
  name: "updated",
  initialState,
  // senkron aksiyonlar için kullanırız
  reducers: {},
  // asenkron aksiyonlar için kullanırız
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
  },
});

export default updatedSlice.reducer;
