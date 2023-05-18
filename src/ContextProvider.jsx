import React, { useCallback, useState } from "react";
import { ProductProvider } from "./ProductContext";

const emptyValues = {
  category: [],
  subcategory: [],
  product: [],
  currentSelectedcategory: "",
  currentSelectedsubcategory: "",
  currentSelectedproduct: {},
};

const ContextProvider = ({ children }) => {
  const [defaultValue, setDefaultValue] = useState(emptyValues);

  const setCategory = useCallback((newValue) => {
    setDefaultValue(() => {
      console.log("newValue", newValue);
      return {
        ...emptyValues,
        category: newValue,
        setcurrentSelectedcategory: newValue[0],
      };
    });
  }, []);
  const setcurrentSelectedcategory = useCallback((categoryId) => {
    setDefaultValue((value) => {
      return {
        ...value,
        currentSelectedcategory: value.category.find(
          (item) => item.categoryId === categoryId
        ),
        currentSelectedsubcategory: "",
        currentSelectedproduct: "",
      };
    });
  }, []);
  const setSubCategory = useCallback((newValue) => {
    setDefaultValue((value) => {
      return {
        ...emptyValues,
        category: value.category,
        subcategory: newValue,
      };
    });
  }, []);
  const setcurrentSelectedsubcategory = useCallback((subCategoryId) => {
    setDefaultValue((value) => {
      return {
        ...value,
        currentSelectedsubcategory: value.subcategory.find(
          (item) => item.subCategoryId === subCategoryId
        ),
      };
    });
  }, []);
  const setProduct = useCallback((newValue) => {
    setDefaultValue((value) => {
      return {
        ...emptyValues,
        category: value.category,
        subcategory: value.subcategory,
        product: newValue,
      };
    });
  }, []);
  //   const setcurrentSelectedproduct = useCallback((newValue) => {
  //     setDefaultValue((value) => {
  //       return {
  //         ...emptyValues,
  //         category: value.category,
  //         subcategory: value.subcategory,
  //         product: newValue,
  //       };
  //     });
  //   }, []);
  return (
    <ProductProvider
      value={{
        ...defaultValue,
        setCategory,
        setSubCategory,
        setProduct,
        setcurrentSelectedcategory,
        setcurrentSelectedsubcategory,
      }}
    >
      {children}
    </ProductProvider>
  );
};

export default ContextProvider;
