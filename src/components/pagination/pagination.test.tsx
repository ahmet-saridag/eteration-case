import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import PaginationComponent from "./pagination.component";

const mockStore = configureStore([]);

describe("Pagination Component", () => {
  test("renders pagination buttons with correct page numbers", () => {
    const initialState = {
      amount: {
        products: new Array(50).fill(null),
      },
    };
    const store = mockStore(initialState);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <PaginationComponent />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getAllByRole("link").length).toBe(5);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("disables previous button on first page", () => {
    const initialState = {
      amount: {
        products: new Array(50).fill(null),
      },
    };
    const store = mockStore(initialState);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <PaginationComponent />
        </Provider>
      </BrowserRouter>
    );

    const prevButton = screen.getByRole("button", { name: "Previous" });
    expect(prevButton).toBeDisabled();
  });
});
