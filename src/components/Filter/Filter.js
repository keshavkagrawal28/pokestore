import { useContext, useEffect, useState } from 'react';
import './Filter.scss';
import { ProductContext } from '../../context/ProductContext';
import { Dropdown } from 'react-bootstrap';

const Filter = () => {
  const {
    getCategories,
    getSortCategories,
    setProductCategory,
    setProductSorting,
    selectedProCategory,
    selectedProSortBy,
  } = useContext(ProductContext);
  const allCategories = getCategories();
  const sortCategories = getSortCategories();
  const [selectedCategory, setSelectedCategory] = useState(selectedProCategory);
  const [sortBy, setSortBy] = useState(selectedProSortBy);

  useEffect(() => {
    setProductCategory(selectedCategory);
    setProductSorting(sortBy);
  }, [selectedCategory, setProductCategory, setProductSorting, sortBy]);

  const categoryDropdownItems = () => {
    return allCategories.map((category, index) => {
      return (
        <Dropdown.Item
          className='filter-dropdown-item'
          key={`filter-category-${index}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </Dropdown.Item>
      );
    });
  };

  const sortDropdownItems = () => {
    return sortCategories.map((sort, index) => {
      return (
        <Dropdown.Item
          className='filter-dropdown-item'
          key={`filter-sort-${index}`}
          onClick={() => setSortBy(sort)}
        >
          {sort}
        </Dropdown.Item>
      );
    });
  };

  return (
    <div className='filter-container'>
      <div className='filter-dropdowns'>
        <Dropdown className='filter-dropdown' style={{ paddingRight: '6rem' }}>
          <Dropdown.Toggle className='filter-dropdown-toggle'>
            <span className='dropdown-filter-title'>Filter: </span>
            {selectedCategory}
          </Dropdown.Toggle>
          <Dropdown.Menu className='filter-dropdown-menu'>
            {categoryDropdownItems()}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className='filter-dropdown'>
          <Dropdown.Toggle className='filter-dropdown-toggle'>
            <span className='dropdown-filter-title'>Sort By: </span>
            {sortBy}
          </Dropdown.Toggle>
          <Dropdown.Menu className='filter-dropdown-menu'>
            {sortDropdownItems()}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Filter;
