import React from "react";

import Movies from "../movies";
import PropsTypes from "prop-types";
import _ from "lodash";
const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a
              onClick={() => onPageChange(page)}
              className="page-link"
              href="#"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propsTypes = {
  itemsCount: PropsTypes.number.isRequired,
  pageSize: PropsTypes.number.isRequired,
  onPageChange: PropsTypes.func.isRequired,
  currentPage: PropsTypes.number.isRequired,
};

export default Pagination;
