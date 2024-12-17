import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Nav from './components/Nav'
import Home from './components/Home';
import ShopComputer from './components/ShopComputer'
import ShopApple from './components/ShopApple';
import MacBook from './components/MacBook';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Cart from './components/Cart';
import CostcoProvider from "./components/Context/CostcoContext"
import MyAccount from './components/MyAccount';

function App() {
  return (
    <CostcoProvider>
      <BrowserRouter>
          <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/shopcomputer' element={<ShopComputer/>}/>
               <Route path='/shop-apple' element={<ShopApple/>}/>
               <Route path='/macbook/:_id' element={<MacBook/>}/>
               <Route path='/macbook/' element={<MacBook/>}/>
               <Route path='/signup' element={<Signup/>}/>
               <Route path='/signin' element={<Signin/>}/>
               <Route path='/cart' element={<Cart/>}/>
               <Route path='/myaccount' element={<MyAccount/>}/>
          </Routes>
      </BrowserRouter>
      </CostcoProvider>
         
    
  );
}

export default App;
