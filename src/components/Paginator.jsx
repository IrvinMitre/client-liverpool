import React from "react";

const Paginator = ({ handlePagination, offset, page, limit, count }) => {
  return (
    <div className="paginator">
      <button
        className="paginatorButton"
        onClick={() => handlePagination(offset - limit, -1)}
        disabled={offset === 0}
      >
        Anterior
      </button>
      <span className="currentPage"> Page {page} </span>
      <button
        className="paginatorButton"
        onClick={() => handlePagination(offset + limit, 1)}
        disabled={count < limit}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginator;
