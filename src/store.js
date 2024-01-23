import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./features/carsSlice";

export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});
