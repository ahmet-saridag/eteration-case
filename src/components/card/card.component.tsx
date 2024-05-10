import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { amountActions } from "../../store/amount-slice";
import { useParams } from "react-router-dom";

function CardComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const { pageId }: any = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state: any) => state.amount.products);
  const filters = useSelector((state: any) => state.filters.filters);

  const getPageData = () => {
    const startIndex = pageId ? (pageId - 1) * 12 : (currentPage - 1) * 12;
    const endIndex = startIndex + 12;
    setPageData(products.slice(startIndex, endIndex));
  };

  useEffect(() => {
    getPageData();
    if (filters.searchText !== undefined && filters.searchText !== "") {
      if (pageData.length > 0) {
        const filteredData = pageData.filter((item: any) => {
          return item.brand
            .toLowerCase()
            .includes(filters.searchText.toLowerCase());
        });
        setPageData(filteredData);
      }
    }
    if (filters.sortFilterNumber && filters.sortFilterNumber !== 0) {
      let dateChangedData: any = pageData.map((s: any) => {
        return {
          createdAt: new Date(s.createdAt),
          brand: s.brand,
          price: s.price,
          id: s.id,
          image: s.image,
          model: s.model,
          description: s.description,
          name: s.name,
        };
      });

      if (filters.sortFilterNumber === 1) {
        dateChangedData = dateChangedData.sort((a: any, b: any) => {
          return a.createdAt - b.createdAt;
        });
        setPageData(dateChangedData);
      }
      if (filters.sortFilterNumber === 2) {
        dateChangedData = dateChangedData.sort((a: any, b: any) => {
          return b.createdAt - a.createdAt;
        });
        setPageData(dateChangedData);
      }
      if (filters.sortFilterNumber === 3) {
        dateChangedData = dateChangedData.sort((a: any, b: any) => {
          return b.price - a.price;
        });
        setPageData(dateChangedData);
      }
      if (filters.sortFilterNumber === 4) {
        dateChangedData = dateChangedData.sort((a: any, b: any) => {
          return a.price - b.price;
        });
        setPageData(dateChangedData);
      }
    }
    if (filters.models.length > 0) {
      console.log(filters.models);
    }
    if (filters.brands.length > 0) {
      console.log(filters.brands);
    }
  }, [filters, pageId, currentPage, products]);

  const addToCart = (product: any) => {
    if (product) {
      dispatch(amountActions.addCart(product));
    }
  };

  if (pageData) {
    return (
      <>
        {pageData.map((product: any) => {
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
