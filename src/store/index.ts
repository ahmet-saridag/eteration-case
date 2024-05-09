import { configureStore } from "@reduxjs/toolkit";

import amountSlice from "./amount-slice";

const store = configureStore({
  reducer: { amount: amountSlice.reducer },
});

export default store;
