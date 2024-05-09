import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
  name: "amount",
  initialState: {
    products: [],
    totalPrice: 0,
    productData: [],
    checkoutAmount: 0,
  },
  reducers: {
    addCart(state: any, action: any) {
      if (action.payload) {
        if (state.productData.length > 0) {
          let sameProduct: any = state.productData.find(
            (item: any) => item.brand === action.payload.brand
          );
          if (sameProduct) {
            if (sameProduct.repeat) {
              state.totalPrice += Number(action.payload.price);
              sameProduct.repeat = sameProduct.repeat + 1;
              localStorage.setItem(
                "totalPrice",
                JSON.stringify(state.totalPrice)
              );
              localStorage.setItem(
                "products",
                JSON.stringify(state.productData)
              );
            } else {
              sameProduct.repeat = 2;
              state.totalPrice += Number(action.payload.price);
              localStorage.setItem(
                "totalPrice",
                JSON.stringify(state.totalPrice)
              );
              localStorage.setItem(
                "products",
                JSON.stringify(state.productData)
              );
            }
          } else {
            state.productData.push(action.payload);
            state.totalPrice += Number(action.payload.price);
            localStorage.setItem(
              "totalPrice",
              JSON.stringify(state.totalPrice)
            );
            localStorage.setItem("products", JSON.stringify(state.productData));
          }
        } else {
          state.productData.push(action.payload);
          state.totalPrice += Number(action.payload.price);
          localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
          localStorage.setItem("products", JSON.stringify(state.productData));
        }
      }
    },
    pushProducts(state: any, action: any) {
      if (action.payload) {
        state.products = action.payload;
      }
    },
    decreaseProduct(state: any, action: any) {
      if (action.payload) {
        if (state.productData.length > 0) {
          let selectedProduct: any = state.productData.find(
            (item: any) => item.id === action.payload.id
          );
          if (selectedProduct) {
            if (selectedProduct.repeat && selectedProduct.repeat > 1) {
              state.totalPrice -= Number(action.payload.price);
              selectedProduct.repeat = selectedProduct.repeat - 1;
              localStorage.setItem(
                "totalPrice",
                JSON.stringify(state.totalPrice)
              );
              localStorage.setItem(
                "products",
                JSON.stringify(state.productData)
              );
            } else {
              state.productData = state.productData.filter(
                (item: any) => item.id !== selectedProduct.id
              );
              state.totalPrice -= Number(action.payload.price);
              localStorage.setItem(
                "totalPrice",
                JSON.stringify(state.totalPrice)
              );
              localStorage.setItem(
                "products",
                JSON.stringify(state.productData)
              );
            }
          }
        }
      }
    },
    checkout(state: any) {
      state.checkoutAmount = state.totalPrice;
      localStorage.setItem("totalPrice", JSON.stringify(0));
      localStorage.setItem("checkout", JSON.stringify(state.totalPrice));
      localStorage.setItem("products", JSON.stringify([]));
      state.productData = [];
      state.totalPrice = 0;
    },
    updateProductData(state: any, action: any) {
      if (action.payload) {
        state.productData = action.payload;
      }
    },
    updateTotalPrice(state: any, action: any) {
      if (action.payload) {
        state.totalPrice = action.payload;
      }
    },
    updateCheckoutPrice(state: any, action: any) {
      if (action.payload) {
        state.checkoutAmount = action.payload;
      }
    },
  },
});

export const amountActions = amountSlice.actions;

export default amountSlice;
