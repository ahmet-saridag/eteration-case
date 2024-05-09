// import { useState } from "react";
// import searchIcon from "../../assets/search.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { environment } from "../../configs/environment.ts";
import { getProducts } from "../../services/http.ts";
import { useDispatch } from "react-redux";
import { amountActions } from "../../store/amount-slice.ts";

function ProductDetailComponent() {
  const { productId } = useParams();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState({ message: "" });
  const [productDetail, setProductDetail]: any = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProducts() {
      setIsFetching(true);
      try {
        const products = await getProducts(environment.API_KEY);
        const findProductDetail: any = products.find(
          (item: any) => item.id === productId
        );
        if (findProductDetail) {
          setProductDetail(findProductDetail);
        }
        setIsFetching(false);
      } catch (error: any) {
        setError({
          message:
            error.message ||
            "Could not fetch products, please try again later.",
        });
        setIsFetching(false);
      }
    }

    fetchProducts();
  }, []);

  const addToCart = (product: any) => {
    if (product) {
      dispatch(amountActions.addCart(product));
    }
  };

  if (isFetching) {
    return (
      <div className="home">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error.message !== "") {
    return (
      <h1 className="text-red-500 text-center">
        Ürün detayı bulunamadı lütfen ana sayfaya dönün !!!
      </h1>
    );
  }

  if (productDetail) {
    return (
      <>
        <div className="product-detail__card">
          <div className="product-detail__card-image">
            <img
              src={productDetail.image}
              className="w-full h-full object-cover"
              alt={productDetail.brand}
            />
          </div>
          <div className="product-detail__card-content">
            <h3 className="product-detail__card-title">
              {productDetail.brand}
            </h3>
            <h2 className="product-detail__card-subtitle">
              {productDetail.price}₺
            </h2>
            <button
              className="product-detail__card-button"
              onClick={() => addToCart(productDetail)}
            >
              Add to Cart
            </button>
            <p className="product-detail__card-text">
              {productDetail.description}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default ProductDetailComponent;
