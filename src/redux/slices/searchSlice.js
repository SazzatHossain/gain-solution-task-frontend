import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    eventFromDate: '',
    eventToDate: ''
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setFromDate: (state, action) => {
      state.query = action.payload;
    },
    setToDate: (state, action) => {
      state.query = action.payload;
    },

  },
});

export const { setQuery, setFromDate, setToDate, setResults } = searchSlice.actions;

export default searchSlice.reducer;
