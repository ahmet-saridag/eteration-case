import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function PaginationComponent() {
  const products = useSelector((state: any) => state.amount.products);
  const { pageId } = useParams();

  const totalPages = Math.ceil(products.length / 12);

  const goToPrevPage = () => {
    if (pageId && Number(pageId) !== 1) {
      let path = Number(pageId) - 1;
      window.location.pathname = "/page/" + path;
    }
  };

  const goToNextPage = () => {
    if (pageId && Number(pageId) !== 7) {
      let path = Number(pageId) + 1;
      window.location.pathname = "/page/" + path;
    }
  };

  return (
    <>
      <div className="pagination">
        <nav>
          <ul className="flex items-center h-8 text-sm">
            <button
              onClick={goToPrevPage}
              // @ts-ignore
              disabled={
                pageId
                  ? Number(pageId) === 1
                    ? "cursor-not-allowed"
                    : ""
                  : "cursor-not-allowed"
              }
              className={
                pageId
                  ? Number(pageId) === 1
                    ? "cursor-not-allowed"
                    : ""
                  : "cursor-not-allowed"
              }
            >
              <a className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 border border-e-0 border-gray-300 rounded-s-lg hover:bg-white hover:text-blue-500  ">
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <a
                  href={"/page/" + (index + 1)}
                  className={
                    Number(pageId)
                      ? Number(pageId) === index + 1
                        ? "flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 bg-white text-blue-500"
                        : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-white hover:text-blue-500"
                      : index + 1 === 1
                      ? "flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 bg-white text-blue-500"
                      : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-white hover:text-blue-500"
                  }
                >
                  {index + 1}
                </a>
              </li>
            ))}

            <li
              onClick={goToNextPage}
              className={
                pageId ? (Number(pageId) === 7 ? "cursor-not-allowed" : "") : ""
              }
            >
              <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 rounded-e-lg hover:bg-white hover:text-blue-500">
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default PaginationComponent;
