/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpPage from './pages/SignInPages/SignUpPage';
import LogInPage from './pages/SignInPages/LogInPage';
import PasswordResetPage from './pages/SignInPages/PasswordResetPage';
import UpdateProfile from './pages/UserPages/UpdateProfile';
import CartsPage from './pages/UserPages/CartsPage';
import NavBar from './components/NavBar/NavBar';
import UserProfilePage from './pages/UserPages/UserProfilePage';
import MainPage from './pages/MainPage/MainPage';
import EnsureUserRoute from './RoutesManager/EnsureUserRoute';
import EnsureLogOutRoute from './RoutesManager/EnsureLogOutRoute';
import ShopPage from './pages/AboutUsPages/ShopPage';
import BlogPage from './pages/AboutUsPages/BlogPage';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import rootReducer from './reducers/rootReducer';
import { getUser } from './reducers/userReducer';

import ListingsPage from './pages/SellerPages/ListingsPage';
import SellerProfilePage from './pages/SellerPages/SellerProfilePage';

import './App.css';
import "./utils/globalStyles.css";
import AboutPage from './pages/AboutUsPages/AboutPage';
import ContactPage from './pages/AboutUsPages/ContactPage';
import ShippingReturnPage from './pages/InfoPages/ShippingReturnPage';
import TermsOfUsePage from './pages/InfoPages/TermsOfUsePage';
import PrivacyPolicyPage from './pages/InfoPages/PrivacyPolicyPage';
import { AboutPageRoute, AddBlogPageRoute, AddListingPageRoute, BlogPageRoute, CartsPageRoute, ContactPageRoute, ListingsPageRoute, LogInRoute, MainPageRoute, PasswordResetRoute, PrivacyPolicyPageRoute, ProductDetailPageGeneralRoute, ProductDetailPageRoute, ProfileRoute, SellerProfileRoute, ShippingReturnPageRoute, ShopPageRoute, SignUpRoute, TermsOfUsePageRoute, UpdateProfileRoute } from './utils/routes';
import ProductDetailPage from './pages/ProductDetailPages/ProductDetailPage';
import { getSeller } from './reducers/sellerReducer';
import EnsureSellerRoute from './RoutesManager/EnsureSellerRoute';
import AddListingPage from './pages/SellerPages/AddListingPage';
import AddBlogPage from './pages/SellerPages/AddBlogPage';

function App() {
  const middleWare = applyMiddleware(thunkMiddleware);
  const store = createStore(rootReducer, middleWare);

  return (
    <Router>
      <Provider store={store}>
        <NavPages />
      </Provider>
    </Router>
  );
}


function NavPages(props) {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUser());
  }, []);

  useEffect(() => {
    dispatch(getSeller());
  }, []);


  return (
    <div>
      <NavBar />
      <Route exact path={MainPageRoute} component={MainPage} />
      <EnsureUserRoute path={CartsPageRoute} component={CartsPage} />

      <Container className="d-flex justify-content-center" /* style={{ minHeight: '100vh' } }*/>
        <div className="w-100" style={{ maxWidth: '400px' }}>
          {/* User Pages */}
          <EnsureUserRoute path={ProfileRoute} component={UserProfilePage} />
          <EnsureUserRoute path={UpdateProfileRoute} component={UpdateProfile} />

          {/* Seller Pages */}
          <EnsureSellerRoute path={SellerProfileRoute} component={SellerProfilePage} />
          
          {/* Logged out Pages */}
          <EnsureLogOutRoute path={SignUpRoute} component={SignUpPage} />
          <EnsureLogOutRoute path={LogInRoute} component={LogInPage} />
          <EnsureLogOutRoute path={PasswordResetRoute} component={PasswordResetPage} />
        </div>
      </Container>

      <EnsureSellerRoute path={ListingsPageRoute} component={ListingsPage} />
      <EnsureSellerRoute path={AddListingPageRoute} component={AddListingPage} />
      <EnsureSellerRoute path={AddBlogPageRoute} component={AddBlogPage} />

      {/* Product Detail Pages */}
      <Route path={"/product/:productId"} component={ProductDetailPage} />
        
      {/* About Us Pages */}
      <Route exact path={ShopPageRoute} component={ShopPage} />
      <Route path={BlogPageRoute} component={BlogPage} />
      <Route path={AboutPageRoute} component={AboutPage} />
      <Route path={ContactPageRoute} component={ContactPage} />

      {/* Info Pages */}
      <Route path={ShippingReturnPageRoute} component={ShippingReturnPage} />
      <Route path={TermsOfUsePageRoute} component={TermsOfUsePage} />
      <Route path={PrivacyPolicyPageRoute} component={PrivacyPolicyPage} />
      
    </div>
  );
}

export default App;
