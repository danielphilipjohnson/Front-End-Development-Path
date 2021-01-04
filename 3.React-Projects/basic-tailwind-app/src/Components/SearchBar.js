import React from "react";

function SearchBar(props) {
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  return (
    <form className=" p-4 flex flex-col items-center w-full bg-green-400 ">
      <input
        className="rounded-md border-gray-400 m-5 p-3"
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => props.onFilterTextChange(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => props.onInStockChange(e.target.checked)}
        />{" "}
        <span className="text-white">Only show products in stock</span>
      </p>
    </form>
  );
}

export default SearchBar;
