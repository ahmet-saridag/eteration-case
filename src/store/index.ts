import { configureStore } from "@reduxjs/toolkit";

import amountSlice from "./amount-slice";
import filtersSlice from "./filters-slice";

const store = configureStore({
  reducer: { amount: amountSlice.reducer, filters: filtersSlice.reducer },
});

export default store;
