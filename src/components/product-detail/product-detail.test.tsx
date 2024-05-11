import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import ProductDetailComponent from "@/components/product-detail/product-detail.component";

const mockStore = configureStore([]);

describe("Product Detail Component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({});
  });

  test("renders product detail with correct information", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductDetailComponent />
        </Provider>
      </BrowserRouter>
    );
  });
});
