import { configureStore } from "@reduxjs/toolkit";
import MessageReducer from "../reducers/messageReducer";

export const store = configureStore({
  reducer: { preview: MessageReducer },
});

// import { createStore } from "redux";
// export const store = createStore(MessageReducer);
