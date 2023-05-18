import React, { useContext, useEffect } from "react";
import { fetchCategories } from "./query";
import ProductContext from "./ProductContext";

const DetailsScreen = ({ ...props }) => {
  const { category, setCategory, currentSelectedcategory } =
    useContext(ProductContext);
  useEffect(() => {
    fetchCategories().then((getList) => {
      if (getList.success) {
        setCategory(getList.result);
      }
    });
  }, []);
  console.log("category", category);
  console.log(currentSelectedcategory);
  return (
    <div {...props}>
      <div>Print Heads</div>
      <div></div>
    </div>
  );
};

export default DetailsScreen;
