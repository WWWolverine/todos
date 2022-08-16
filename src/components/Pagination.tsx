import React, { FC, useState } from "react";

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
  const [details, setDetails] = useState(false);
  const aBgClassName = details ? "aclass1" : "aclass2";
  const aClasses = ["h4", aBgClassName];

  const addClick = (number: any) => {
    setDetails((prev) => !prev);
    paginate(number);
  };

  return (
    <div className="nav">
      {pageNumbers.map((number) => (
        <h4 key={number}>
          <a
            className={aClasses.join(" ")}
            href="##"
            onClick={() => addClick(number)}
          >
            {number}
          </a>
        </h4>
      ))}
    </div>
  );
};

export default Pagination;
