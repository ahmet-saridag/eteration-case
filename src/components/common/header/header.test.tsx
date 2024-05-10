import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Header from "./header.component";
import { BrowserRouter } from "react-router-dom";
import { filtersActions } from "../../../store/filters-slice";

const mockStore = configureStore([]);

describe("Header", () => {
  let store: any;

  beforeEach(async () => {
    store = mockStore({
      amount: {
        checkoutAmount: 100,
      },
    });
  });

  test("renders header data with correct information", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("Eteration")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    expect(screen.getByText("100₺")).toBeInTheDocument();
    expect(screen.getByText("Ahmet")).toBeInTheDocument();
    expect(screen.getByText("Ahmet")).toBeInTheDocument();
    expect(screen.getByText("Eteration")).toBeInTheDocument();
  });

  test("updates search text when input is changed", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "test" } });

    // Search input'un değiştiğinde doğru Redux action'ının dispatch edildiğini kontrol et
    expect(store.getActions()).toContainEqual(
      // @ts-ignore
      filtersActions.updateSearchText("test")
    );
  });
});
