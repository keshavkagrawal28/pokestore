import { useContext } from 'react';
import './Cart.scss';
import { ProductContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Cart = () => {
  const { cart, updateCart, getProductById } = useContext(ProductContext);

  const navigate = useNavigate();

  const products = cart.map((cartProduct) => {
    const pro = getProductById(cartProduct.id);
    return {
      id: pro.id,
      name: pro.name,
      price: pro.price,
      quantity: cartProduct.quantity,
    };
  });

  const navigateToShop = (id) => {
    let path = `/products`;
    navigate(path);
  };

  const removeProductFromCart = (id) => {
    let updatedCart = [];
    cart.forEach((pro) => {
      if (pro.id !== id) {
        updatedCart.push(pro);
      }
    });
    updateCart(updatedCart);
  };

  const increaseQuantity = (id) => {
    let updatedCart = [];
    cart.forEach((pro) => {
      if (pro.id === id) {
        updatedCart.push({ ...pro, quantity: pro.quantity + 1 });
      } else updatedCart.push(pro);
    });
    updateCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    let updatedCart = [];
    cart.forEach((pro) => {
      if (pro.id === id) {
        if (pro.quantity !== 1) {
          updatedCart.push({ ...pro, quantity: pro.quantity - 1 });
        }
      } else updatedCart.push(pro);
    });
    updateCart(updatedCart);
  };

  const getCartTotal = () => {
    let total = 0;
    products.forEach((pro) => {
      let prototal = Number(pro.price) * Number(pro.quantity);
      total += prototal;
    });

    return `$ ${Number(total).toLocaleString()}`;
  };

  return (
    <div className='cart-container'>
      <div className='cart-section'>
        <div className='cart-title'> Shopping cart</div>
        {products.length > 0 && (
          <div>
            <div className='cart-table'>
              <ul>
                <li className='item bold-text'>
                  <div className='item-desc'>Product</div>
                  <div className='item-price'>Price</div>
                  <div className='quantity-and-remove'>Quantity</div>
                  <div className='item-line-total'>Total</div>
                </li>
                <hr></hr>
                {products.map((pro, index) => {
                  return (
                    <li className='item' key={`cart-${index}`}>
                      <div className='item-desc bold-text'>{pro.name}</div>
                      <div className='item-price'>
                        ${Number(pro.price).toLocaleString()}
                      </div>
                      <div className='quantity-and-remove'>
                        <div className='quantity-Selector'>
                          <span
                            style={{ cursor: 'pointer' }}
                            onClick={() => increaseQuantity(pro.id)}
                          >
                            +
                          </span>
                          <span>{pro.quantity}</span>
                          <span
                            style={{ cursor: 'pointer' }}
                            onClick={() => decreaseQuantity(pro.id)}
                          >
                            -
                          </span>
                        </div>
                        <div
                          className='cart-link'
                          onClick={() => removeProductFromCart(pro.id)}
                        >
                          Remove
                        </div>
                      </div>
                      <div className='item-line-total'>
                        ${Number(pro.price * pro.quantity).toLocaleString()}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='cart-link'>Continue Shopping</div>
            <hr></hr>
            <div className='subtotal bold-text'>
              <div>SubTotal</div>
              <div>{getCartTotal()}</div>
            </div>
            <div className='checkout-button'>
              <Button className='custom-submit-button'>CHECKOUT</Button>
            </div>
          </div>
        )}
        {products.length === 0 && (
          <div onClick={() => navigateToShop()}>
            <p style={{ fontWeight: '400', textAlign: 'center' }}>
              {' '}
              {'There are no items in your cart at the moment.'}
            </p>
            <div className='cart-link'>Continue Shopping</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
