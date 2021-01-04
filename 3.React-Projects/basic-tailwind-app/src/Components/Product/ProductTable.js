import React from "react";

import ProductCategoryRow from "../Product/ProductCategoryRow";

import ProductRow from "../Product/ProductRow";

function ProductTable(props) {
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  const rows = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <section className="container mx-auto flex flex-col items-center">
      <table className="bg-white rounded m-4 p-4 shadow-md w-48 border-separate text-left">
        <thead className="text-gray-mute">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </section>
  );
}

export default ProductTable;
