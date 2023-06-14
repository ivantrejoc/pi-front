import React from "react";

const Pagination = ({ cardsPerPage, allPokemons, pagination }) => {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(allPokemons / cardsPerPage); i++) {
    pageNumbers.push(i+1);
  }

  return (
    <div>
      <ul className="paginado">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <button onClick={() => pagination(number)}>{number}</button>;
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Pagination;
