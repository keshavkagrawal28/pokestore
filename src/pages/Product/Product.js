import './Product.scss';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  console.log('product : ' + productId);

  return <>Product works</>;
};

export default Product;
