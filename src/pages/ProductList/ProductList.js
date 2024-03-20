import { useContext } from 'react';
import Filter from '../../components/Filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductList.scss';
import { ProductContext } from '../../context/ProductContext';

const ProductList = () => {
  const { filteredProducts } = useContext(ProductContext);

  const productList = filteredProducts.map((product, index) => {
    return (
      <ProductCard
        productId={product.id}
        key={`product-list-product-${index}`}
      ></ProductCard>
    );
  });

  return (
    <>
      <div className='productlist-container'>
        <div className='filtered-products-section'>
          <div className='productList-section-title'>OUR PRODUCTS</div>
          <div className='product-filters'>
            <Filter />
          </div>
          <div className='filteredProducts'>{productList}</div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
