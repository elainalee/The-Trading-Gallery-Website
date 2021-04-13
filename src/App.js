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
import DashBoard from './components/UserPages/DashBoard';
import EnsureLogInRoute from './components/RoutesManager/EnsureLogInRoute';
import EnsureLogOutRoute from './components/RoutesManager/EnsureLogOutRoute';
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
                  <EnsureLogInRoute exact path="/" component={DashBoard} />
                  <EnsureLogInRoute path="/dashboard" component={DashBoard} />
                  <EnsureLogInRoute path="/update-profile" component={UpdateProfile} />
                  <EnsureLogInRoute path="/carts" component={CartsPage} />
                  <EnsureLogOutRoute path="/signUp" component={SignUp} />
                  <EnsureLogOutRoute path="/logIn" component={LogIn} />
                  <EnsureLogOutRoute path="/password-reset" component={PasswordReset} />
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
