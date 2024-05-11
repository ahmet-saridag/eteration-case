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

    removeCarType(state: any, action: any) {
      if (action.payload && action.payload.type === "model") {
        state.filters.models = state.filters.models.filter(
          (item: any) =>
            !(
              item.type === action.payload.type &&
              item.value === action.payload.value
            )
        );
      }
      if (action.payload && action.payload.type === "brand") {
        state.filters.brands = state.filters.brands.filter(
          (item: any) =>
            !(
              item.type === action.payload.type &&
              item.value === action.payload.value
            )
        );
      }
    },

    clearFiltersExceptOne(state: any, action: any) {
      if (action.payload) {
        console.log(action.payload);

        switch (action.payload) {
          case "model":
            state.filters.searchText = "";
            state.filters.sortFilterNumber = 0;
            state.filters.models = [];
            break;
          case "brand":
            state.filters.searchText = "";
            state.filters.sortFilterNumber = 0;
            state.filters.brands = [];
            break;
          case "number":
            state.filters.searchText = "";
            state.filters.models = [];
            state.filters.brands = [];
            break;
          case "search":
            state.filters.sortFilterNumber = 0;
            state.filters.models = [];
            state.filters.brands = [];
            break;
          default:
            break;
        }
      }
    },
  },
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice;
