// import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { amountActions } from "../../store/amount-slice";

function CardComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state: any) => state.amount.products);

  const addToCart = (product: any) => {
    if (product) {
      dispatch(amountActions.addCart(product));
    }
  };

  if (products) {
    return (
      <>
        {products.map((product: any) => {
          return (
            <div
              key={product.id}
              className="card lg:col-span-3 md:col-span-6 col-span-12"
            >
              <div
                className="card__image cursor-pointer"
                onClick={() => navigate("/" + product.id)}
              >
                <img
                  className="h-full w-full object-cover"
                  src={product.image}
                  alt={product.brand}
                />
              </div>
              <h3
                className="card__title cursor-pointer"
                onClick={() => navigate("/" + product.id)}
              >
                {product.price}₺
              </h3>
              <h2
                className="card__subtitle cursor-pointer"
                onClick={() => navigate("/" + product.id)}
              >
                {product.brand}
              </h2>
              <button
                onClick={() => addToCart(product)}
                className="card__button"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </>
    );
  }
}

export default CardComponent;
