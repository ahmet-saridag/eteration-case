import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import ProductDetailComponent from "./product-detail-layout.component";

const mockStore = configureStore([]);

describe("Product Detail Layout", () => {
  let store: any;

  beforeEach(async () => {
    store = mockStore({
      amount: {
        products: [],
        productData: [],
      },
      filters: {
        filters: {
          searchText: "",
          sortFilterNumber: 0,
          models: [],
          brands: [],
        },
      },
    });
  });

  test("renders product detail layout data with correct information", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductDetailComponent />
        </Provider>
      </BrowserRouter>
    );
  });
});
