import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./APISlice";
const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
export default store;
