import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/SignIn/SignUp';
import LogIn from './components/SignIn/LogIn';
import PasswordReset from './components/SignIn/PasswordReset';
import UpdateProfile from './components/UserPages/UpdateProfile';
import CartsPage from './components/UserPages/CartsPage';
import { AuthProvider } from './contexts/AuthContext';
import NavBar from './components/NavBar/NavBar';
import DashBoard from './components/DashBoard';
import PrivateRoute from './components/PrivateRoute';
import BreadCakePage from './components/MenuPages/BreadCakePage';
import PastriesPage from './components/MenuPages/PastriesPage';
import DrinksPage from './components/MenuPages/DrinksPage';
import OtherPage from './components/MenuPages/OtherPage';

function App() {
  return (
    <>
        <Router>
          <AuthProvider>
            <NavBar />
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: '100vh' }}
            >
              <div className="w-100" style={{ maxWidth: '400px' }}>
                <Switch>
                  <PrivateRoute exact path="/" component={DashBoard} />
                  <PrivateRoute path="/update-profile" component={UpdateProfile} />
                  <PrivateRoute path="/carts" component={CartsPage} />
                  <Route path="/signUp" component={SignUp} />
                  <Route path="/logIn" component={LogIn} />
                  <Route path="/password-reset" component={PasswordReset} />
                  <Route path="/breadAndCake" component={BreadCakePage} />
                  <Route path="/pastries" component={PastriesPage} />
                  <Route path="/drinks" component={DrinksPage} />
                  <Route path="/other" component={OtherPage} />
                </Switch>
              </div>
            </Container>
          </AuthProvider>
        </Router>
    </>
  );
}

export default App;
