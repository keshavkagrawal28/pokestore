import './Menubar.scss';
import { Link } from 'react-router-dom';

const Menubar = ({ closeModal }) => {
  return (
    <div className='menu-container'>
      <div className='close-modal-header'>
        <div className='close-modal' onClick={() => closeModal()}>
          <span className='close-bar close-bar-1'></span>
          <span className='close-bar close-bar-2'></span>
          <span className='close-bar close-bar-3'></span>
        </div>
      </div>
      <div className='menu-items'>
        <div>
          <Link
            to='/'
            className='text-decoration-none'
            onClick={() => closeModal()}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to='/products'
            className='text-decoration-none'
            onClick={() => closeModal()}
          >
            Shop
          </Link>
        </div>
        <div>
          <Link
            to='/about'
            className='text-decoration-none'
            onClick={() => closeModal()}
          >
            About Us
          </Link>
        </div>
        <div>
          <Link
            to='/login'
            className='text-decoration-none'
            onClick={() => closeModal()}
          >
            Login
          </Link>
        </div>
        <div>
          <Link
            to='/register'
            className='text-decoration-none'
            onClick={() => closeModal()}
          >
            Register
          </Link>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Menubar;
