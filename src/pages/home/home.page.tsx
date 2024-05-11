import { useEffect, useState } from "react";
import MainLayoutComponent from "../../components/common/layout/main-layout/main-layout.component.tsx";
import { environment } from "../../configs/environment";
import { getProducts } from "../../services/http.ts";
import { useDispatch } from "react-redux";
import { amountActions } from "../../store/amount-slice";
import LoadingComponent from "../../components/loading/loading.component.tsx";

function Home() {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState({ message: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProducts() {
      setIsFetching(true);

      try {
        const products = await getProducts(environment.API_KEY);
        dispatch(amountActions.pushProducts(products));
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

  if (isFetching) {
    return (
      <div className="home">
        <LoadingComponent />
      </div>
    );
  }

  if (error.message !== "") {
    return (
      <div className="home">
        <h1 className="text-red-500 text-center h-full mt-10">
          Ürünler bulunamadi lütfen tekrar yenileyin sayfayi !!!
          <LoadingComponent />
        </h1>
      </div>
    );
  }

  return (
    <div className="home">
      <MainLayoutComponent />
    </div>
  );
}

export default Home;
