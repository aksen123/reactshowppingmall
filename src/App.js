import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import ProductAll from './Components/ProductAll';
import ProductDetail from './Components/ProductDetail';
import Navbar2 from './Components/Navbar2';
import PrivateRouter from './Components/PrivateRouter';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  //false > 로그인 안된상태 true > 로그인상태
  useEffect(() => {
    console.log('login', authenticate)
  }, [authenticate])
  return (
    <div className="App">
      <Navbar2 authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<ProductAll />}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />}/>
        <Route path='/product/:id' element={<PrivateRouter authenticate={authenticate} />}/>
      </Routes>
    </div>
  );
}

export default App
