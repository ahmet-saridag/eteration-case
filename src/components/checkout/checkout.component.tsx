import { useSelector, useDispatch } from "react-redux";
import { amountActions } from "@/store/amount-slice";
import { useEffect } from "react";

function CheckoutComponent() {
  const dispatch = useDispatch();

  let productItems = useSelector((state: any) => state.amount.productData);
  let totalPrice = useSelector((state: any) => state.amount.totalPrice);

  useEffect(() => {
    // @ts-ignore
    const localProductData = JSON.parse(localStorage.getItem("products"));
    // @ts-ignore
    const localTotalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    // @ts-ignore
    const localCheckoutPrice = JSON.parse(localStorage.getItem("checkout"));

    if (localProductData && localProductData.length > 0) {
      dispatch(amountActions.updateProductData(localProductData));
      productItems = localProductData;
    }
    if (localTotalPrice) {
      dispatch(amountActions.updateTotalPrice(localTotalPrice));
      totalPrice = localTotalPrice;
    }
    if (localCheckoutPrice) {
      dispatch(amountActions.updateCheckoutPrice(localCheckoutPrice));
    }
  }, []);

  const decreaseProductAmount = (productItem: any) => {
    if (productItem) {
      dispatch(amountActions.decreaseProduct(productItem));
    }
  };

  const increaseProductAmount = (productItem: any) => {
    if (productItem) {
      dispatch(amountActions.addCart(productItem));
    }
  };

  return (
    <>
      <div className="checkout">
        <div className="filters__title">Cart</div>
        <div className="filters__card">
          {productItems.map((productItem: any) => {
            return (
              <div key={productItem.id} className="checkout__brands mt-2">
                <div className="checkout__brands-left">
                  <div className="checkout__brands-title">
                    {productItem.brand}
                  </div>
                  <div className="checkout__brands-subtitle">
                    {productItem.price}₺
                  </div>
                </div>
                <div className="checkout__brands-right">
                  <button
                    onClick={() => decreaseProductAmount(productItem)}
                    className="checkout__brands-grey"
                  >
                    -
                  </button>
                  <button className="checkout__brands-blue">
                    {productItem.repeat ? productItem.repeat : 1}
                  </button>
                  <button
                    onClick={() => increaseProductAmount(productItem)}
                    className="checkout__brands-grey"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="filters__title mt-10">Checkout</div>
        <div className="filters__card">
          <h3 className="checkout__total-price">
            Total Price: <span>{totalPrice}₺</span>
          </h3>
          <button
            onClick={() => dispatch(amountActions.checkout())}
            className="checkout__button"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default CheckoutComponent;
