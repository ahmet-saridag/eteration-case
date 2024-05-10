import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CheckoutComponent from "./checkout.component";
import { BrowserRouter } from "react-router-dom";
import { amountActions } from "../../store/amount-slice";

const mockStore = configureStore([]);

describe("Checkout component products data initalizing.", () => {
  let store: any;

  beforeEach(async () => {
    store = mockStore({
      amount: {
        productData: [
          { id: 1, brand: "Product 1", price: 10, repeat: 1 },
          { id: 2, brand: "Product 2", price: 20, repeat: 2 },
        ],
        totalPrice: 50,
        checkoutPrice: 50,
      },
    });
  });

  test("renders checkout products data with correct information", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CheckoutComponent />
        </Provider>
      </BrowserRouter>
    );

    const decreaseButton = screen.getAllByText("-")[0]; // İlk decrease buttonunu al
    fireEvent.click(decreaseButton);

    // Decrease button'un tıklandığında doğru dispatch işleminin yapıldığını kontrol et
    expect(store.getActions()).toContainEqual(
      // @ts-ignore
      amountActions.decreaseProduct({
        id: 1,
        brand: "Product 1",
        price: 10,
        repeat: 1,
      })
    );

    expect(screen.getByText("Total Price:")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });
});
