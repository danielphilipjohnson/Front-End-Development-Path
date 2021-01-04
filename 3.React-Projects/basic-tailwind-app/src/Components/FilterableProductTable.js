import React from "react";

import SearchBar from "../Components/SearchBar";
import ProductTable from "../Components/Product/ProductTable";

function FilterableProductTable() {
  const [filterText, setFilterText] = React.useState("");
  const [inStockOnly, setInStockOnly] = React.useState(false);

  const PRODUCTS = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    { category: "Electronics", price: "$899.99", stocked: true, name: "iPad" },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 11",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Galaxy S20",
    },
  ];

  return (
    <main className="bg-gray-100 h-screen">
      <div className="w-full">
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={(text) => setFilterText(text)}
          onInStockChange={(stock) => setInStockOnly(stock)}
        />
        <ProductTable
          products={PRODUCTS}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    </main>
  );
}

export default FilterableProductTable;
