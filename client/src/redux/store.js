import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counterslice";

export default configureStore({
  reducer: { counter: counterReducer },
});
