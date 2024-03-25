import { createContext, useCallback, useEffect, useState } from 'react';
import products from './../data/Products.json';
import { useLocation } from 'react-router-dom';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedProCategory, setSelectedProCategory] = useState('All');
  const [selectedProSortBy, setSelectedProSortBy] = useState('Title, A-Z');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes('products')) {
      // remove all filters on navigation to any other screen
      setSearchText('');
      setSelectedProCategory('All');
      setSelectedProSortBy('Title, A-Z');
    }
  }, [location]);

  useEffect(() => {
    let filtered = [];
    products.forEach((product) => {
      if (
        selectedProCategory === 'All' ||
        selectedProCategory === product.category
      ) {
        if (
          !searchText ||
          product.name.toLowerCase().includes(searchText.toLowerCase())
        ) {
          filtered.push(product);
        }
      }
    });

    if (selectedProSortBy.split(',')[0].trim() === 'Price') {
      if (selectedProSortBy.split(',')[1].trim() === 'low to high')
        filtered.sort((a, b) => a.price - b.price);
      else filtered.sort((a, b) => b.price - a.price);
    } else if (selectedProSortBy.split(',')[0].trim() === 'Title') {
      if (selectedProSortBy.split(',')[1].trim() === 'A-Z')
        filtered.sort((a, b) => {
          let aName = a.name.toLowerCase();
          let bName = b.name.toLowerCase();

          if (aName < bName) return -1;
          else if (bName < aName) return 1;
          else return 0;
        });
      else
        filtered.sort((a, b) => {
          let aName = a.name.toLowerCase();
          let bName = b.name.toLowerCase();

          if (aName > bName) return -1;
          else if (bName < aName) return 1;
          else return 0;
        });
    } else {
      if (selectedProSortBy.split(',')[1].trim() === 'low to high')
        filtered.sort((a, b) => a.totalRatings - b.totalRatings);
      else filtered.sort((a, b) => b.totalRatings - a.totalRatings);
    }

    setFilteredProducts(filtered);
  }, [searchText, selectedProCategory, selectedProSortBy]);

  const setTextToSearch = useCallback((text) => {
    setSearchText(text);
  }, []);

  const setProductCategory = useCallback((category) => {
    setSelectedProCategory(category);
  }, []);

  const setProductSorting = useCallback((sort) => {
    setSelectedProSortBy(sort);
  }, []);

  const getProductById = useCallback((id) => {
    return products.find((i) => i.id === id);
  }, []);

  const getCategories = useCallback(() => {
    return products.reduce(
      (acc, curr) => {
        if (!acc.includes(curr.category)) acc.push(curr.category);
        return acc;
      },
      ['All']
    );
  }, []);

  const getSortCategories = useCallback(() => {
    return [
      'Price, low to high',
      'Price, high to low',
      'Title, A-Z',
      'Title, Z-A',
      'Popular, low to high',
      'Popular, high to low',
    ];
  }, []);

  const addProductToCart = useCallback(
    (productId) => {
      if (
        productId &&
        !cart.find((cartProduct) => cartProduct.id === productId)
      ) {
        setCart([...cart, { id: productId, quantity: 1 }]);
      }
    },
    [cart, setCart]
  );

  const updateCart = useCallback((cartData) => {
    setCart(cartData);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        getProductById,
        getCategories,
        getSortCategories,
        searchText,
        setTextToSearch,
        selectedProCategory,
        setProductCategory,
        selectedProSortBy,
        setProductSorting,
        filteredProducts,
        cart,
        addProductToCart,
        updateCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
