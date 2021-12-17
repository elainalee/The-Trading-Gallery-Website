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
import ShopPage from './pages/MenuPages/ShopPage';
import BlogPage from './pages/MenuPages/ContactPage';
import FoodPage from './pages/MenuPages/AboutPage';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import rootReducer from './reducers/rootReducer';
import { getUser } from './reducers/userReducer';

import './App.css';
import "./utils/globalStyles.css";
import AboutPage from './pages/MenuPages/AboutPage';
import ContactPage from './pages/MenuPages/ContactPage';

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
  }, [])

  return (
    <div className="largePage">
      <NavBar />
      {/* <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      > */}
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <EnsureLogInRoute path="/profile-page" component={UserProfilePage} />
          <EnsureLogInRoute path="/update-profile" component={UpdateProfile} />
          <EnsureLogOutRoute path="/signUp" component={SignUpPage} />
          <EnsureLogOutRoute path="/logIn" component={LogInPage} />
          <EnsureLogOutRoute path="/password-reset" component={PasswordResetPage} />
        </div>
        <Route exact path="/" component={MainPage} />
        <EnsureLogInRoute path="/carts" component={CartsPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        
      {/* </Container> */}
    </div>
  );
}

export default App;
