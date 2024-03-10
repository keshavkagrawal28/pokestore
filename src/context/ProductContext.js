import { createContext, useCallback } from 'react';
import products from './../data/Products.json';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const getProductById = useCallback((id) => {
    return products.find((i) => i.id === id);
  }, []);
  return (
    <ProductContext.Provider
      value={{
        getProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
