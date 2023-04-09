import {configureStore} from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import isLoggedInSliceReducer from "./slices/loginSucessSlice";

export const store = configureStore({
 reducer: {
   search: searchReducer,
   isLoggedInReducer: isLoggedInSliceReducer
 }
})