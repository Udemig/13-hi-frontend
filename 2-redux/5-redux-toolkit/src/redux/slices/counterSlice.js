/*
 * Hem reducer'ı hem aksiyon'ları hem de asiyon tiplerini tek noktada oluşturmamızı sağlar

 * Nasıl slice olıuştururuz?
 * import createSlice
 * name: slice ismi > strimg
 * intialState: state'in ilk değeri > object
 * reducers: aksiyonları ve görevlerini tanımladığımız fonksiyonlar
  
 ! NOT: Reducer içerisinde yazdığımız fonksiyonlarda klasik redux'tan farklı olarak state'i doğrudan güncelleyebiliyoruz 
*/

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 1, theme: "dark" },
  reducers: {
    increase: (state, action) => {
      state.count++;
    },

    decrease: (state, action) => {
      state.count--;
    },
  },
});

// component içerisinde tetikleyiceğim aksiyonları oluşturan fonksiyonlar slice tarafından otomatik olarak oluşturuldu
// component'larda dispatch edebilmek için export edelim
export const { increase, decrease } = counterSlice.actions;

// store'tanıtlması gereke reducer otomatik olarak slice tarafından oluştu
// store'a tanıtımak için export edelim
export default counterSlice.reducer;
