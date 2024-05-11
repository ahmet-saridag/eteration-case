import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import MainLayoutComponent from "@/components/common/layout/main-layout/main-layout.component";
import { BrowserRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("Mail Layout", () => {
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

  test("renders main layout data with correct information", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MainLayoutComponent />
        </Provider>
      </BrowserRouter>
    );
  });
});
