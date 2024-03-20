import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/FormPages/Login';
import About from './pages/About/About';
import Register from './pages/FormPages/Register';
import ForgotPassword from './pages/FormPages/ForgotPassword';
import Cart from './pages/Cart/Cart';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';
import NotFound from './pages/NotFound/NotFound';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Search from './components/Search/Search';
import Menubar from './components/Menubar/Menubar';
import { ProductContext } from './context/ProductContext';

const App = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { searchText, setTextToSearch } = useContext(ProductContext);

  const navigate = useNavigate();

  const searchProduct = (text) => {
    setTextToSearch(text);
    setShowSearchModal(false);
    navigate('/products');
  };

  return (
    <>
      <div className='fixed-top'>
        <NavBar
          renderModal={(modalType) => {
            if (modalType === 'search') {
              setShowMenu(false);
              setShowSearchModal(true);
            } else if (modalType === 'menu') {
              setShowSearchModal(false);
              setShowMenu(true);
            }
          }}
        />
      </div>
      {/* Search modal */}
      {showSearchModal && (
        <Search
          existingSearchText={searchText} // pass existing search text here
          closeModal={() => setShowSearchModal(false)}
          searchProduct={(text) => searchProduct(text)}
        />
      )}
      {/* Menu modal for mobile screens */}
      {showMenu && <Menubar closeModal={() => setShowMenu(false)} />}
      {/* APP ROUTES */}
      <div className='app-main-body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/forgotpass' element={<ForgotPassword />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:productId' element={<Product />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
