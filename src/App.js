import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/SignIn/SignUp';
import LogIn from './components/SignIn/LogIn';
import PasswordReset from './components/SignIn/PasswordReset';
import UpdateProfile from './pages/UserPages/UpdateProfile';
import CartsPage from './pages/UserPages/CartsPage';
import { AuthProvider } from './contexts/AuthContext';
import NavBar from './components/NavBar/NavBar';
import UserProfilePage from './pages/UserPages/UserProfilePage';
import MainPage from './pages/MainPage/MainPage';
import EnsureLogInRoute from './RoutesManager/EnsureLogInRoute';
import EnsureLogOutRoute from './RoutesManager/EnsureLogOutRoute';
import DessertsPage from './pages/MenuPages/DessertsPage';
import TextilesPage from './pages/MenuPages/Textiles';
import FoodPage from './pages/MenuPages/FoodPage';
import OtherPage from './pages/MenuPages/OtherPage';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import rootReducer from './reducers/rootReducer';

function App() {
  const middleWare = applyMiddleware(thunkMiddleware);
  const store = createStore(rootReducer, middleWare);

  return (
    <>
        <Router>
          <Provider store={store}>
            <AuthProvider>
              <NavBar />
                  <Container
                    className="d-flex align-items-center justify-content-center"
                    // style={{ minHeight: '100vh' }}
                  >
                    <div className="w-100" style={{ maxWidth: '400px' }}>
                      <EnsureLogInRoute path="/profile-page" component={UserProfilePage} />
                      <EnsureLogInRoute path="/update-profile" component={UpdateProfile} />
                      <EnsureLogOutRoute path="/signUp" component={SignUp} />
                      <EnsureLogOutRoute path="/logIn" component={LogIn} />
                      <EnsureLogOutRoute path="/password-reset" component={PasswordReset} />
                    </div>
                    <Route exact path="/" component={MainPage} />
                    <EnsureLogInRoute path="/carts" component={CartsPage} />
                    <Route path="/desserts" component={DessertsPage} />
                    <Route path="/textiles" component={TextilesPage} />
                    <Route path="/foods" component={FoodPage} />
                    <Route path="/other" component={OtherPage} />
                    
                  </Container>
            </AuthProvider>
          </Provider>
        </Router>

        
    </>
  );
}

export default App;
