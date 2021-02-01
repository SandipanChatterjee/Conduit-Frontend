import React from "react";

interface Props {
  postsPerPage: any;
  totalPosts: any;
  paginate: any;
  currentPage: any;
}

const Pagination: React.FC<Partial<Props>> = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  console.log("totalPost", totalPosts);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts! / postsPerPage!); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number, index) => {
          const isCurrent = number === currentPage;
          console.log(isCurrent);
          return (
            <li
              key={index}
              className={isCurrent ? "page-item active" : "page-item"}
            >
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
