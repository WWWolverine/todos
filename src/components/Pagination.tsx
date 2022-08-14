import React, { FC } from "react";

interface PaginationProps {
  commentPerPage: any;
  totalComment: any;
  paginate: any;
}

const Pagination: FC<PaginationProps> = ({
  commentPerPage,
  totalComment,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalComment / commentPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <a href="" onClick={() => paginate(number)}>
              <h4>{number}</h4>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
