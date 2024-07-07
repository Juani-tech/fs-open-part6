import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterReducer";
import anecodteReducer from "./reducers/anecdoteReducer";

const store = configureStore({
  reducer: {
    anecdotes: anecodteReducer,
    filter: filterReducer,
  },
});

console.log(`state: ${store.getState()}`);

export default store;
