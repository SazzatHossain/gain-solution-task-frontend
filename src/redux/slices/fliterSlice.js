import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  filterText: "",
};

export const filterSlice = createSlice({
  name: 'eventsFilter',
  initialState,
  reducers: {
    setFilter: (state,action) => {
      state.filter = action.payload
    },
  },
});

export const {setFilter} = filterSlice.actions;
export default filterSlice.reducer;
// export const filterText = (state) => state.eventsFilter.filterText
