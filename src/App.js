// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';

const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const OrderConfirmation = lazy(() => import('./pages/OrderConfirmation'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup1'));
const OrderHistory = lazy(() => import('./pages/OrderHistory'));
const OrderDetail = lazy(() => import('./pages/OrderDetail'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Header />
        <main>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="/order/:id" element={<OrderDetail />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </SnackbarProvider>
  );
}

export default App;
