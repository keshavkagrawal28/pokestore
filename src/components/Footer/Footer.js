import './Footer.scss';
import pika from './../../assets/pika.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='socials'>
          <h5>Follow us on social media!</h5>
          <div className='social-media-icons'>
            <div>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
        <div className='big-logo'>
          <img src={pika} alt='none' height={350}></img>
        </div>
      </div>
      <div className='other-navigations'>
        <Link to='/' className='text-decoration-none'>
          Contact
        </Link>
        <Link to='/' className='text-decoration-none'>
          Shipping
        </Link>
        <Link to='/' className='text-decoration-none'>
          Return
        </Link>
        <Link to='/' className='text-decoration-none'>
          Privacy
        </Link>
        <Link to='/' className='text-decoration-none'>
          Terms
        </Link>
      </div>
      <div className='copyright'>
        <FontAwesomeIcon icon={faCopyright} /> NOBODY
      </div>
    </div>
  );
};

export default Footer;
