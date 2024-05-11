import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import ProductDetail from "./product-detail.page";

const mockStore = configureStore([]);

describe("Product Detail Page", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      amount: {
        products: [],
        productData: [],
      },
      filters: {
        filters: {
          models: [],
          brands: [],
        },
      },
    });
  });

  test("renders product detail with correct information", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductDetail />
        </Provider>
      </BrowserRouter>
    );
  });
});
