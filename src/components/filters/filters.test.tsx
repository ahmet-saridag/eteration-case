import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import FiltersComponent from "./filters.component";
import { BrowserRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("FiltersComponent", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      amount: {
        products: [
          { id: 1, brand: "Brand 1", model: "Model 1" },
          { id: 2, brand: "Brand 2", model: "Model 2" },
        ],
        productData: [],
      },
    });
  });

  test("renders filters with correct information", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FiltersComponent />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("Sort By")).toBeInTheDocument();
    expect(screen.getByText("Brands")).toBeInTheDocument();
    expect(screen.getByText("Model")).toBeInTheDocument();
    expect(screen.getAllByRole("checkbox").length).toBe(4);
  });
});
