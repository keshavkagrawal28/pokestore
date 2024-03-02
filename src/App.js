import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Cart from './pages/Cart/Cart';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';
import NotFound from './pages/NotFound/NotFound';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/forgotpass' element={<ForgotPassword />} />
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/products' element={<ProductList />}>
            <Route path=':productId' element={<Product />} />
            <Route index element={<ProductList />} />
          </Route> */}
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:productId' element={<Product />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};

export default App;
