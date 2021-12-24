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
import EnsureLogInRoute from './RoutesManager/EnsureLogInRoute';
import EnsureLogOutRoute from './RoutesManager/EnsureLogOutRoute';
import ShopPage from './pages/UlmaPages/ShopPage';
import BlogPage from './pages/UlmaPages/BlogPage';
import FoodPage from './pages/UlmaPages/AboutPage';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import rootReducer from './reducers/rootReducer';
import { getUser } from './reducers/userReducer';

import './App.css';
import "./utils/globalStyles.css";
import AboutPage from './pages/UlmaPages/AboutPage';
import ContactPage from './pages/UlmaPages/ContactPage';
import ShippingReturnPage from './pages/InfoPages/ShippingReturnPage';
import TermsOfUsePage from './pages/InfoPages/TermsOfUsePage';
import PrivacyPolicyPage from './pages/InfoPages/PrivacyPolicyPage';
import { AboutPageRoute, BlogPageRoute, CartsPageRoute, ContactPageRoute, LogInRoute, MainPageRoute, PasswordResetRoute, PrivacyPolicyPageRoute, ProfileRoute, ShippingReturnPageRoute, ShopPageRoute, SignUpRoute, TermsOfUsePageRoute, UpdateProfileRoute } from './utils/routes';

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

  return (
    <div>
      <NavBar />
      <Route exact path={MainPageRoute} component={MainPage} />
      <EnsureLogInRoute path={CartsPageRoute} component={CartsPage} />

      {/* User Pages */}
      <Container
        className="d-flex justify-content-center"
        // style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <EnsureLogInRoute path={ProfileRoute} component={UserProfilePage} />
          <EnsureLogInRoute path={UpdateProfileRoute} component={UpdateProfile} />
          <EnsureLogOutRoute path={SignUpRoute} component={SignUpPage} />
          <EnsureLogOutRoute path={LogInRoute} component={LogInPage} />
          <EnsureLogOutRoute path={PasswordResetRoute} component={PasswordResetPage} />
        </div>
      </Container>
        
      {/* Ulma Pages */}
      <Route path={ShopPageRoute} component={ShopPage} />
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
