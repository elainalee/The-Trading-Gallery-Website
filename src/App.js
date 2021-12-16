import React, { useEffect } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpCard from './components/Cards/SignIn/SignUpCard';
import LogInCard from './components/Cards/SignIn/LogInCard';
import PasswordResetCard from './components/Cards/SignIn/PasswordResetCard';
import UpdateProfile from './pages/UserPages/UpdateProfile';
import CartsPage from './pages/UserPages/CartsPage';
import NavBar from './components/NavBar/NavBar';
import UserProfilePage from './pages/UserPages/UserProfilePage';
import MainPage from './pages/MainPage/MainPage';
import EnsureLogInRoute from './RoutesManager/EnsureLogInRoute';
import EnsureLogOutRoute from './RoutesManager/EnsureLogOutRoute';
import DessertsPage from './pages/MenuPages/DessertsPage';
import TextilesPage from './pages/MenuPages/Textiles';
import FoodPage from './pages/MenuPages/FoodPage';
import OtherPage from './pages/MenuPages/OtherPage';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import rootReducer from './reducers/rootReducer';
import { getUser } from './reducers/userReducer';

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
    <div>
      <NavBar />
      <Container
        className="d-flex align-items-center justify-content-center"
        // style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <EnsureLogInRoute path="/profile-page" component={UserProfilePage} />
          <EnsureLogInRoute path="/update-profile" component={UpdateProfile} />
          <EnsureLogOutRoute path="/signUp" component={SignUpCard} />
          <EnsureLogOutRoute path="/logIn" component={LogInCard} />
          <EnsureLogOutRoute path="/password-reset" component={PasswordResetCard} />
        </div>
        <Route exact path="/" component={MainPage} />
        <EnsureLogInRoute path="/carts" component={CartsPage} />
        <Route path="/desserts" component={DessertsPage} />
        <Route path="/textiles" component={TextilesPage} />
        <Route path="/foods" component={FoodPage} />
        <Route path="/other" component={OtherPage} />
        
      </Container>
    </div>
  );
}

export default App;
