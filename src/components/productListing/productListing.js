import React from "react";
import "./productListing.scss";
import ProductCard from "../productListItem/ProductListItem/ProductListItem";

const ProductListing = (props) => {
  return (
    <div className="productListing">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductListing;
