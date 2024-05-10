import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filter",
  initialState: {
    filters: {
      searchText: "",
      sortFilterNumber: 0,
      brands: [],
      models: [],
    },
  },
  reducers: {
    updateSearchText(state: any, action: any) {
      if (action.payload !== undefined) {
        state.filters.searchText = action.payload;
      }
    },
    updateSortFilterNumber(state: any, action: any) {
      if (action.payload) {
        state.filters.sortFilterNumber = action.payload;
      }
    },
    updateCarType(state: any, action: any) {
      if (action.payload && action.payload.type === "model") {
        state.filters.models.push(action.payload);
      }
      if (action.payload && action.payload.type === "brand") {
        state.filters.brands.push(action.payload);
      }
    },
  },
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice;
