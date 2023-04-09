import {configureStore} from "@reduxjs/toolkit";
import filterSliceReducer from "./slices/fliterSlice";

export const store = configureStore({
 reducer: {
   eventsFilter: filterSliceReducer
 }
})