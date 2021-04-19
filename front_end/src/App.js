import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { commerce } from './components/Commerce/Commerce';
import SignUp from './components/SignIn/SignUp';
import LogIn from './components/SignIn/LogIn';
import PasswordReset from './components/SignIn/PasswordReset';
import UpdateProfile from './components/UserPages/UpdateProfile';
import CartsPage from './components/UserPages/CartsPage';
import { AuthProvider } from './contexts/AuthContext';
import NavBar from './components/NavBar/NavBar';
import UserProfilePage from './components/UserPages/UserProfilePage';
import MainPage from './components/MainPage/MainPage';
import EnsureLogInRoute from './components/RoutesManager/EnsureLogInRoute';
import EnsureLogOutRoute from './components/RoutesManager/EnsureLogOutRoute';
import DessertsPage from './components/MenuPages/DessertsPage';
import TextilesPage from './components/MenuPages/Textiles';
import FoodPage from './components/MenuPages/FoodPage';
import OtherPage from './components/MenuPages/OtherPage';
import Product from './components/Products/Product/Product';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    // const { data } = await commerce.products.list();
    const { data } = await axios.get('/api/products');

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <>
        <Router>
          <AuthProvider>
            <NavBar />
            <div className="row center">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}

            </div>
                <Switch>
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
                  <Route exact path="/" component={MainPage} />
                  <EnsureLogInRoute path="/carts" component={CartsPage} />
                  <Route path="/desserts" component={DessertsPage} />
                  <Route path="/textiles" component={TextilesPage} />
                  <Route path="/foods" component={FoodPage} />
                  <Route path="/other" component={OtherPage} />
                  </div>
                </Container>
                </Switch>
          </AuthProvider>
        </Router>

        
    </>
  );
}

export default App;
