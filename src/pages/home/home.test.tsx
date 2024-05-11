import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import Home from "@/pages/home/home.page";

const mockStore = configureStore([]);

describe("Home Page", () => {
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

  test("renders home page with correct information", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // Ürünlerin yüklenip yüklenmediğini kontrol etmek için
    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
  });
});
