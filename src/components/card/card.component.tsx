import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { amountActions } from "../../store/amount-slice";
import { useParams } from "react-router-dom";

function CardComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const { pageId }: any = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state: any) => state.amount.products);
  const filters = useSelector((state: any) => state.filters.filters);

  const getPageData = () => {
    const startIndex = pageId ? (pageId - 1) * 12 : (currentPage - 1) * 12;
    const endIndex = startIndex + 12;
    let selectedPageData = products.slice(startIndex, endIndex);
    setPageData(selectedPageData);
  };

  useEffect(() => {
    getPageData();
  }, [pageId, currentPage]);

  useEffect(() => {
    const filteredData = pageData.filter((item: any) => {
      return item.brand
        .toLowerCase()
        .includes(filters.searchText.toLowerCase());
    });
    setFilteredData(filteredData);
  }, [filters.searchText]);

  useEffect(() => {
    if (filters.sortFilterNumber && filters.sortFilterNumber !== 0) {
      const comparators = [
        // @ts-ignore
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt), // 1: Eskiye göre yeniden
        // @ts-ignore
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt), // 2: Yeniye göre yeniden
        (a: any, b: any) => b.price - a.price, // 3: Fiyata göre azalan
        (a: any, b: any) => a.price - b.price, // 4: Fiyata göre artan
      ];

      const comparator = comparators[filters.sortFilterNumber - 1];

      const dateChangedData = [...pageData].sort(comparator);
      setFilteredData(dateChangedData);
    }
  }, [filters.sortFilterNumber]);

  useEffect(() => {
    const commonElements = pageData.filter((item: any) => {
      return filters.models.some((arr1Item: any) => {
        return item.model === arr1Item.value;
      });
    });
    setFilteredData(commonElements);
  }, [filters.models]);

  useEffect(() => {
    const commonElements = pageData.filter((item: any) => {
      return filters.brands.some((arr1Item: any) => {
        return item.brand === arr1Item.value;
      });
    });
    setFilteredData(commonElements);
  }, [filters.brands]);

  const addToCart = (product: any) => {
    if (product) {
      dispatch(amountActions.addCart(product));
    }
  };

  const dataType = filteredData.length > 0 ? filteredData : pageData;

  if (dataType) {
    return (
      <>
        {dataType.map((product: any) => {
          return (
            <div
              key={product.id}
              className="card lg:col-span-3 md:col-span-6 col-span-12"
            >
              <div
                className="card__image cursor-pointer"
                onClick={() => navigate("/product/" + product.id)}
              >
                <img
                  className="h-full w-full object-cover"
                  src={product.image}
                  alt={product.brand}
                />
              </div>
              <h3
                className="card__title cursor-pointer"
                onClick={() => navigate("/product/" + product.id)}
              >
                {product.price}₺
              </h3>
              <h2
                className="card__subtitle cursor-pointer"
                onClick={() => navigate("/product/" + product.id)}
              >
                {product.brand} / {product.model}
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
