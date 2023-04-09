import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const isLoggedInSlice = createSlice({
  name: 'isLoggedInStatus',
  initialState,
  reducers: {
    setIsLoggedIn: (state,action) => {
      state.isLoggedIn = action.payload
    },
  },
});

export const {setIsLoggedIn} = isLoggedInSlice.actions;
export default isLoggedInSlice.reducer;
// export const filterText = (state) => state.eventsFilter.filterText
