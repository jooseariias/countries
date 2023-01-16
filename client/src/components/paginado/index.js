import React from "react";
import "./paginado.css";

function Pagination({ countriesPerPage, allCountries, paginate, currentPage }) {
  const pageNumber = [];
  if (Math.ceil(allCountries / countriesPerPage) < currentPage) {
    paginate(1);
  }

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="Paginado">
        {pageNumber &&
          pageNumber.map((number) => (
            <div key={number}>
              <button className="B-num" onClick={() => paginate(number)}>
                {number}
              </button>
            </div>
          ))}
      </ul>
    </nav>
  );
}

export default Pagination;
