import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: ""
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filters.name;

export default filtersSlice.reducer;

export const { changeFilter } = filtersSlice.actions;
