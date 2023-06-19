import { configureStore } from "@reduxjs/toolkit";

import StudentReducer from "./slices/StudentSlice";

const store = configureStore({
  reducer: {
    student: StudentReducer,
  },
});

export default store;
