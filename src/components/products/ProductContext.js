import React, { useState } from "react";

let ProductContext = React.createContext();

export default ProductContext;

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([
    {
      name: "Pixel 5a",
      quantity: "2",
      price: "$599",
    },
    {
      name: "Iphone 12",
      quantity: "10",
      price: "$1699.99",
    },
    {
      name: "Mi 11 Ultra",
      quantity: "5",
      price: "$800.34",
    },
  ]);
  return (
    <ProductContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductContext.Provider>
  );
};
