import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { initialTasks } from "../../utils/constants";

const taskSlice = createSlice({
  name: "task",
  initialState: { tasks: initialTasks },
  reducers: {
    addTask: (state, action) => {
      // gelen taske id değeri ekle
      action.payload.id = v4();

      // task dizisine yeni taski ekle
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      // silinecek elemanın dizideki index'ini öğren
      const index = state.tasks.findIndex((i) => i.id === action.payload);

      // diziden indexi bilenen taski kaldır
      state.tasks.splice(index, 1);
    },

    updateTask: (state, action) => {
      // düzenlenicek elemanın dizideki index'ini öğren
      const index = state.tasks.findIndex((i) => i.id === action.payload.id);

      // sırasını bulduğumuz elemanı güncelle
      state.tasks.splice(index, 1, action.payload);
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
