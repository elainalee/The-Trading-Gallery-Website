/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogInPage from './pages/SignInPages/LogInPage';
import PasswordResetPage from './pages/SignInPages/PasswordResetPage';
import CartsPage from './pages/UserPages/CartsPage';
import NavBar from './components/NavBar/NavBar';
import MainPage from './pages/MainPage/MainPage';
import EnsureLogOutRoute from './RoutesManager/EnsureLogOutRoute';
import ShopPage from './pages/SectionPages/ShopPage';
import BlogsPage from './pages/SectionPages/BlogsPage';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import rootReducer from './reducers/rootReducer';
import { getUser } from './reducers/userReducer';

import SellerProfilePage from './pages/SellerPages/SellerProfilePage';
import AboutPage from './pages/InfoPages/AboutPage';
import ContactPage from './pages/SectionPages/ContactPage';
import ShippingReturnPage from './pages/InfoPages/ShippingReturnPage';
import TermsOfUsePage from './pages/InfoPages/TermsOfUsePage';
import PrivacyPolicyPage from './pages/InfoPages/PrivacyPolicyPage';

import ProductDetailPage from './pages/DetailPages/ProductDetailPage';
import { getSeller } from './reducers/sellerReducer';
import AddListingPage from './pages/SellerPages/AddListingPage';
import AddBlogPage from './pages/SellerPages/AddBlogPage';
import AddressPickupPage from './pages/InfoPages/AddressPickupPage';
import BlogDetailPage from './pages/DetailPages/BlogDetailPage';
import Footer from './components/Footer';

import { AboutPageRoute, AddBlogPageRoute, AddListingPageRoute, AddressPickupRoute, BlogsPageRoute, CartsPageRoute, ContactPageRoute, LogInRoute, MainPageRoute, PasswordResetRoute, PrivacyPolicyPageRoute, ProductDetailPageGeneralRoute, ProductDetailPageRoute, SellerPanelPageRoute, SellerProfileRoute, ShippingReturnPageRoute, ShopPageRoute, TermsOfUsePageRoute, CheckoutPageRoute, ReceiptPageRoute, MyAccountRoute, FeedbackPageRoute, ManageListingsPageRoute, ManageBlogsPageRoute } from './utils/routes';

import './App.css';
import "./utils/globalStyles.css";
import SellerPanelPage from './pages/SellerPages/SellerPanelPage';
import ReceiptPage from './pages/PaymentPages/ReceiptPage';
import CheckoutPage from './pages/PaymentPages/CheckoutPage';
import EnsureUserRoute from './RoutesManager/EnsureUserRoute';
import { getBestSellers, getProducts } from './reducers/productsReducer';
import { getBlogs } from './reducers/blogsReducer';
import { getCart, getCartTotal } from './reducers/cartReducer';
import MyAccountPage from './pages/UserPages/MyAccount';
import EnsureSellerRoute from './RoutesManager/EnsureSellerRoute';
import { checkJWT } from './reducers/authReducer';
import FeedbackPage from './pages/SellerPages/FeedbackPage';
import { removeAll } from './Axios/asyncStorage';
import ManageListingsPage from './pages/SellerPages/ManageListingsPage';
import ManageBlogsPage from './pages/SellerPages/ManageBlogsPage';
import StickyNavBar from './components/NavBar/StickyNavBar';

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
    dispatch(getProducts());
    dispatch(getBestSellers());
    dispatch(getBlogs("mainBlog"));
    dispatch(getBlogs("subBlog"));
    dispatch(getBlogs("recentBlog"));
    dispatch(getBlogs());
  }, []);

  useEffect(() => {
    dispatch(checkJWT());
  }, []);

  useEffect(() => {
    dispatch(getCart());
    dispatch(getCartTotal());
  }, []);

  return (
    <div>
      
      {/* <NavBar /> */}
      <StickyNavBar />

      <div className="app-min-height">
        <Route exact path={MainPageRoute} component={MainPage} />
        
        {/* Logged out Pages */}
        <EnsureLogOutRoute exact path={LogInRoute} component={LogInPage} />

        {/* User Pages */}
        <EnsureUserRoute path={MyAccountRoute} redirectTo={"/my-account/account-info"} component={MyAccountPage} />
        <EnsureUserRoute path={"/my-account/:type"} component={MyAccountPage} />
        <EnsureUserRoute exact path={CartsPageRoute} component={CartsPage} />

        {/* Seller Pages */}
        <EnsureSellerRoute path={ManageListingsPageRoute} component={ManageListingsPage} />
        <EnsureSellerRoute path={ManageBlogsPageRoute} component={ManageBlogsPage} />

        {/* <EnsureSellerRoute path={"/my-seller-account/:type"} component={MyAccountPage} /> */}


        <Container className="d-flex justify-content-center" /*style={{ minHeight: '100vh' }} */>
          <div className="w-100" style={{ maxWidth: '400px' }}>
            {/* Seller Pages */}
            <EnsureSellerRoute exact path={SellerProfileRoute} component={SellerProfilePage} />
            
            {/* Logged out Pages */}
            <EnsureLogOutRoute exact path={PasswordResetRoute} component={PasswordResetPage} />
          </div>
        </Container>

        <EnsureSellerRoute exact path={SellerPanelPageRoute} component={SellerPanelPage} />
        <EnsureSellerRoute exact path={AddListingPageRoute} component={AddListingPage} />
        <EnsureSellerRoute path={"/add-listing/:productId"} component={AddListingPage} />
        <EnsureSellerRoute exact path={AddBlogPageRoute} component={AddBlogPage} />
        <EnsureSellerRoute path={"/add-blog/:blogId"} component={AddBlogPage} />

        {/* Product Detail Pages */}
        <Route path={"/product/:productId"} component={ProductDetailPage} />

        {/* Blog Pages */}
        <Route path={"/blog/:blogId"} component={BlogDetailPage} />
        
        {/* Trading Gallery Pages */}
        <Route exact path={ShopPageRoute} component={ShopPage} />
        <Route exact path={"/shop/:mainCategory"} component={ShopPage} />
        <Route exact path={"/shop/:mainCategory/:subCategory"} component={ShopPage} />

        <Route exact path={"/search/:keyword"} component={ShopPage} />

        <Route exact path={BlogsPageRoute} component={BlogsPage} />
        <Route exact path={AboutPageRoute} component={AboutPage} />
        <Route exact path={ContactPageRoute} component={ContactPage} />

        {/* Info Pages */}
        <Route exact path={ShippingReturnPageRoute} component={ShippingReturnPage} />
        <Route exact path={AddressPickupRoute} component={AddressPickupPage} />
        <Route exact path={TermsOfUsePageRoute} component={TermsOfUsePage} />
        <Route exact path={PrivacyPolicyPageRoute} component={PrivacyPolicyPage} />

        {/* Payment Pages */}
        <EnsureUserRoute exact path={"/receipt/:receiptId"} component={ReceiptPage} />
        <EnsureUserRoute exact path={CheckoutPageRoute} component={CheckoutPage} />

        {/* Seller Pages */}
        <EnsureSellerRoute exact path={FeedbackPageRoute} component={FeedbackPage} />

      </div>
      <Footer />
    </div>
  );
}

export default App;
