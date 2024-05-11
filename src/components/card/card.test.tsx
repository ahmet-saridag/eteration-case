import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CardComponent from "@/components/card/card.component";
import { BrowserRouter } from "react-router-dom";
import { getProducts } from "@/services/http.ts";

const mockStore = configureStore([]);

describe("CardComponent", () => {
  let store: any;

  beforeEach(async () => {
    const products = await getProducts(
      "https://5fc9346b2af77700165ae514.mockapi.io/products"
    );
    store = mockStore({
      amount: {
        products: products,
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

  test("renders product cards with correct information", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CardComponent />
        </Provider>
      </BrowserRouter>
    );
  });
});
