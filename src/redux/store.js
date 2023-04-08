import {configureStore} from "@reduxjs/toolkit";
import {filterSlice} from "./slices/fliterSlice";

export const store = configureStore({
 reducer: {
   eventsFilter: filterSlice
 }
})