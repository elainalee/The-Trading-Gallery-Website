import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/SignIn/SignUp';
import LogIn from './components/SignIn/LogIn';
import PasswordReset from './components/SignIn/PasswordReset';
import UpdateProfile from './components/UpdateProfile';
import { AuthProvider } from './contexts/AuthContext';
import NavBar from './components/NavBar/NavBar';
import DashBoard from './components/DashBoard';
import PrivateRoute from './components/PrivateRoute';

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
                  <Route path="/signUp" component={SignUp} />
                  <Route path="/logIn" component={LogIn} />
                  <Route path="/password-reset" component={PasswordReset} />
                </Switch>
              </div>
            </Container>
          </AuthProvider>
        </Router>
    </>
  );
}

export default App;
