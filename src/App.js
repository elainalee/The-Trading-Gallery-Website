// import logo from './logo.svg';
// import NavBar from "./components/NavBar/NavBar"
import './App.css';
import SignUp from './components/LogIn/SignUp';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container 
      className='d-flex align-items-center justify-content-center' 
      style={{ minHeight: '100vh' }}>
        <div className='w-100' style={{ maxWidth: '400px' }}>
        <SignUp/>   
        </div>
    </Container>
  )
  // return (
  //   <div className="App">
  //     <NavBar/>
  //     PlaceHolder
  //   </div>
  // );
}

export default App;
