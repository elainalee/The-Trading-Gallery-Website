import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/SignIn/SignUp';
import LogIn from './components/SignIn/LogIn';
import { AuthProvider } from './contexts/AuthContext';
import NavBar from './components/NavBar/NavBar';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <>
      <NavBar />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
          <div className="w-100" style={{ maxWidth: '400px' }}>
            <Router>
              <AuthProvider>
                <Switch>
                  <Route exact path="/" component={DashBoard} />
                  <Route path="/signUp" component={SignUp} />
                  <Route path="/logIn" component={LogIn} />
                </Switch>
              </AuthProvider>
            </Router>
          </div>
      </Container>
    </>
  );
}

export default App;
