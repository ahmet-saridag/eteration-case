// import { useState } from "react";
import searchIcon from "../../assets/search.svg";
import CheckoutComponent from "../checkout/checkout.component";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { filtersActions } from "../../store/filters-slice";

function FiltersComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const [uniqueBrands, setUniqueBrands] = useState([]);
  const [uniqueModels, setUniqueModels] = useState([]);

  const { pageId }: any = useParams();
  const dispatch = useDispatch();

  let products = useSelector((state: any) => state.amount.products);

  const getPageData = () => {
    const startIndex = pageId ? (pageId - 1) * 12 : (currentPage - 1) * 12;
    const endIndex = startIndex + 12;
    let perPageData = products.slice(startIndex, endIndex);

    const brands: any = [];
    const models: any = [];

    // Her bir öğeyi döngüyle geçerek her markayı bir defa alacak şekilde işlem yapma
    perPageData.forEach((obj: any) => {
      const brand: any = obj.brand;
      const model: any = obj.model;

      if (!brands.includes(brand)) {
        brands.push(brand);
      }
      if (!models.includes(model)) {
        models.push(model);
      }
    });
    // Her bir marka adı için, orijinal dizide ilk bulunan öğeyi alarak yeni bir dizi oluşturma
    const uniqueBrands = brands.map((brand: any) =>
      perPageData.find((obj: any) => obj.brand === brand)
    );
    const uniqueModels = models.map((model: any) =>
      perPageData.find((obj: any) => obj.model === model)
    );
    setUniqueBrands(uniqueBrands);
    setUniqueModels(uniqueModels);
  };

  const sortTypes = [
    { type: "Old to new", id: 1 },
    { type: "New to old", id: 2 },
    { type: "Price hight to low", id: 3 },
    { type: "Price low to High", id: 4 },
  ];

  const handleSortType = (type: string) => {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((button: any) => {
      if (button.id !== type) {
        button.checked = false;
      } else {
        const buttonElement: any = sortTypes.find(
          (typ: any) => typ.type === type
        );
        dispatch(filtersActions.updateSortFilterNumber(buttonElement.id));
      }
    });
  };

  const handleCarType = (type: string, value: any) => {
    const checkboxes: any = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((box: any) => {
      if (box.id === value) {
        let carType: any = { type: type, value: value };
        dispatch(filtersActions.updateCarType(carType));
      }
    });
  };

  useEffect(() => {
    getPageData();
  }, [pageId, currentPage]);

  return (
    <>
      <div className="filters grid grid-cols-12 lg:flex">
        <div className="filters__sort xl:col-span-12 col-span-6 xl:order-first order-last xl:mt-0 mt-3">
          <div className="filters__title">Sort By</div>
          <div className="filters__card">
            {sortTypes.map((sort: any) => {
              return (
                <div
                  onClick={() => {
                    handleSortType(sort.type);
                  }}
                  key={sort.id}
                  className="filters__sort-radio"
                >
                  <label htmlFor={sort.type}>
                    <input type="radio" id={sort.type} name={sort.type} />
                    {sort.type}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="filters__brands xl:col-span-12 col-span-6">
          <div className="filters__title">Brands</div>
          <div className="filters__card">
            <div className="filters__search">
              <img src={searchIcon} alt="Bag icon" />
              <input type="search" placeholder="Search" />
            </div>
            <div className="filters__checkbox-container">
              {uniqueBrands.map((product: any) => {
                return (
                  <div
                    onClick={() => {
                      handleCarType("brand", product.brand);
                    }}
                    key={product.id}
                    className="filters__checkbox"
                  >
                    <input id={product.brand} type="checkbox" />
                    <label htmlFor={product.brand}>{product.brand}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="filters__model xl:col-span-12 col-span-6">
          <div className="filters__title">Model</div>
          <div className="filters__card">
            <div className="filters__search">
              <img src={searchIcon} alt="Bag icon" />
              <input type="search" placeholder="Search" />
            </div>
            <div className="filters__checkbox-container">
              {uniqueModels.map((product: any) => {
                return (
                  <div
                    onClick={() => {
                      handleCarType("model", product.model);
                    }}
                    key={product.id}
                    className="filters__checkbox"
                  >
                    <input id={product.model} type="checkbox" />
                    <label htmlFor={product.model}>{product.model}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="xl:col-span-12 col-span-6 xl:mt-0 mt-3 xl:hidden visible">
          <CheckoutComponent />
        </div>
      </div>
    </>
  );
}

export default FiltersComponent;
