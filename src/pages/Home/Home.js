import './Home.scss';
import pokemons from './../../assets/pokemons.jpg';
import ProductCard from '../../components/ProductCard/ProductCard';
import balls from './../../assets/balls.jpg';
import peakpx from './../../assets/peakpx.jpg';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='welcome-home-image'>
        <img className='full-width-image' src={pokemons} alt='balls'></img>
      </div>
      <div className='featured-products-section'>
        <div className='section-title'>Featured Collection</div>
        <div className='featured-products'>
          <ProductCard productId={'1'}></ProductCard>
          <ProductCard productId={'6'}></ProductCard>
          <ProductCard productId={'21'}></ProductCard>
        </div>
      </div>
      <div className='welcome-home-image'>
        <img className='full-width-image' src={balls} alt='balls'></img>
      </div>
      <div className='featured-reviews-section'>
        <div className='featured-reviews'>
          <div className='review'>
            <div className='review-stars'>
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div className='review-comment'>
              <p>
                In my extensive journey as a Pokémon trainer, this ball stood
                out. Its versatility and unique features make it an essential
                tool for capturing a wide range of Pokémon. Although not
                perfect, its overall performance and innovative design make it a
                valuable asset for trainers striving to become Pokémon Masters.
              </p>
            </div>
          </div>
          <div className='review'>
            <div className='review-stars'>
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div className='review-comment'>
              <p>
                A trustworthy companion in the field. This ball consistently
                delivered positive results, capturing Pokémon with ease. Minor
                improvements could make it perfect.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='welcome-home-image'>
        <img
          className='full-width-image'
          style={{ height: '80vh', maxHeight: '80vh' }}
          src={peakpx}
          alt='balls'
        ></img>
      </div>
    </div>
  );
};

export default Home;
