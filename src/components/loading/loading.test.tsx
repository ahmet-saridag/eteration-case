import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import LoadingComponent from "@/components/loading/loading.component";

const mockStore = configureStore([]);

describe("Loading Component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({});
  });

  test("renders loading with correct information", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <LoadingComponent />
        </Provider>
      </BrowserRouter>
    );
  });
});
