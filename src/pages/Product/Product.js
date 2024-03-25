import './Product.scss';
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ImageContext } from '../../context/ImageContext';
import { ProductContext } from '../../context/ProductContext';
import { Button } from 'react-bootstrap';

const Product = () => {
  const { getProductById, cart, addProductToCart } = useContext(ProductContext);
  const { getImgById } = useContext(ImageContext);
  const [activeDescriptionToggle, setActiveDescriptionToggle] = useState(1);

  const { productId } = useParams();

  const isProductIncart =
    cart && cart.find((cartProduct) => cartProduct.id === productId);

  let product = getProductById(productId);
  let productRating = 0;
  let imgpath = getImgById(productId);

  product.reviews.forEach((review) => {
    productRating += review.rating / product.reviews.length;
  });

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

  const getAdditionalData = () => {
    const additionalData = product.additionalData;
    const elements = [];

    for (const key in additionalData) {
      if (additionalData.hasOwnProperty(key)) {
        const value = additionalData[key];
        elements.push(
          <div key={key}>
            <span style={{ fontWeight: 'bold' }}>{key}:</span>
            {Array.isArray(value) ? (
              <div>
                {value.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            ) : (
              <div>
                {Object.keys(value).map((generation) => (
                  <div key={generation}>
                    <p style={{ fontWeight: 'bold' }}>{generation}:</p>
                    <div>
                      {value[generation].map((location, index) => (
                        <p key={index}>{location}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      }
    }

    return elements;
  };

  return (
    <div className='container'>
      <div className='product-images-container col-lg-6 col-sm-12'>
        <img className='product-images' src={imgpath} alt={product.name}></img>
      </div>
      <div className='product-about-container'>
        <div className='product-name'>{product.name}</div>
        <div className='product-info'>
          <div className='product-price'>
            ${Number(product.price).toLocaleString()}
          </div>
          {productRating > 0 && (
            <div className='product-card-rating'>
              {generateStars(productRating)}
              <span>{productRating}</span>
            </div>
          )}
        </div>
        <div className='description-container'>
          <div className='toggler'>
            <div
              className={`toggle ${
                activeDescriptionToggle === 1 ? 'active-toggle' : null
              }`}
              onClick={() => setActiveDescriptionToggle(1)}
            >
              Description
            </div>
            <div
              className={`toggle ${
                activeDescriptionToggle === 2 ? 'active-toggle' : null
              }`}
              onClick={() => setActiveDescriptionToggle(2)}
            >
              Reviews
            </div>
          </div>
          {activeDescriptionToggle === 1 && (
            <div className='product-description'>
              <p>{product.description}</p>
              {product.additionalData && getAdditionalData()}
              <div className='add-to-cart'>
                <Button
                  className='custom-submit-button'
                  disabled={isProductIncart}
                  onClick={() => addProductToCart(productId)}
                >
                  {isProductIncart ? 'Added to cart' : 'Add to cart'}
                </Button>
              </div>
            </div>
          )}
          {activeDescriptionToggle === 2 && (
            <div className='product-reviews'>
              <div className='review-container'>
                <div className='review-title'> PokeStore Reviews</div>
                <span>
                  {generateStars(productRating)} Based on {product.totalRatings}{' '}
                  ratings
                  <span className='link'>Write a review</span>
                </span>
                <hr></hr>
                <div className='reviews'>
                  {product.reviews.length &&
                    product.reviews.map((review, index) => {
                      return (
                        <div className='review-section' key={index}>
                          <p>{generateStars(productRating)}</p>
                          <p className='bold-text'>{review.title}</p>
                          <p>
                            {review.writtenBy} on{' '}
                            <span className='bold-text'>{review.date}</span>
                          </p>
                          <p>{review.description}</p>
                          <span class='link'>Report as Inappropriate </span>
                          <hr />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
