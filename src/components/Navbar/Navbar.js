import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import PokemonStoreFinal from './../../assets/PokemonStoreFinal.png';
import './NavBar.scss';

const NavBar = ({ renderModal }) => {
  return (
    <div className='navbar-container'>
      <div className='navbar-toggle' onClick={() => renderModal('menu')}>
        <span className='toggle-bar toggle-bar-1'></span>
        <span className='toggle-bar toggle-bar-2'></span>
        <span className='toggle-bar toggle-bar-3'></span>
      </div>
      <div className='app-logo'>
        <Link to='/'>
          <img src={PokemonStoreFinal} alt='store'></img>
        </Link>
      </div>
      <div className='navigation-links hide-mobile'>
        <div>
          <Link to='/' className='text-decoration-none bottom-border'>
            Home
          </Link>
          <Link to='/products' className='text-decoration-none bottom-border'>
            Shop
          </Link>
          <Link to='/about' className='text-decoration-none bottom-border'>
            About Us
          </Link>
        </div>
        <div>
          <Link to='/login' className='text-decoration-none bottom-border'>
            Login
          </Link>
          <Link to='/register' className='text-decoration-none bottom-border'>
            Register
          </Link>
        </div>
      </div>
      <div className='navigation-links to-right'>
        <div>
          <span onClick={() => renderModal('search')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <Link to='/cart' className='text-decoration-none'>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
