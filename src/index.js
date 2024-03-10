import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthenticationContextProvider } from './context/AuthContext';
import { ProductContextProvider } from './context/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AuthenticationContextProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </AuthenticationContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
