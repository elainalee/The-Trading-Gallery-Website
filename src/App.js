import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import SignUp from './components/LogIn/SignUp';
import { AuthProvider } from './contexts/AuthContext';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
          <div className="w-100" style={{ maxWidth: '400px' }}>
          <SignUp />
          </div>
      </Container>
    </AuthProvider>

  );
}

export default App;
