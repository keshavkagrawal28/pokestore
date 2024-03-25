// each card on a slider
import { useContext } from 'react';
import './ProductCard.scss';
import { ProductContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { ImageContext } from '../../context/ImageContext';

const ProductCard = ({ productId }) => {
  const { getProductById } = useContext(ProductContext);
  const { getImgById } = useContext(ImageContext);

  const navigate = useNavigate();

  let product = getProductById(productId);
  let productRating = 0;
  product.reviews.forEach((review) => {
    productRating += review.rating / product.reviews.length;
  });

  let imgpath = getImgById(productId);

  const navigateTo = (id) => {
    let path = `/products/${id}`;
    navigate(path);
  };

  const generateStars = (rating) => {
    const stars = [];
    const ratingInt = Math.floor(rating);
    const remainder = rating - ratingInt;
    for (let i = 1; i <= ratingInt; i++) {
      stars.push(
        <span key={`${i}-${productId}-star`} className='star'>
          &#9733;
        </span>
      );
    }
    if (remainder > 0) {
      stars.push(
        <span key='half' className='star'>
          &#9734;
        </span>
      );
    }
    return stars;
  };

  return (
    <div
      className='product-card-container'
      onClick={() => navigateTo(product.id)}
    >
      <img
        className='product-card-image'
        src={imgpath}
        alt={product.name}
      ></img>
      <div className='product-card-info'>
        <div className='product-card-name'>{product.name}</div>
        <div className='product-card-price'>
          ${Number(product.price).toLocaleString()}
        </div>
        {productRating > 0 && (
          <div className='product-card-rating'>
            {generateStars(productRating)}
            <span>{productRating}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
