import React from 'react'
import {Route,Routes,BrowserRouter} from "react-router-dom"
import { Toaster, toast } from "react-hot-toast";



import Register from './components/Register'
import './index.css';
import Navbar from './components/Navbar';
import Hair from './components/Hair';
import Home from './components/Home';
import Best from './components/Best';
import Fragrances from './components/Fragrances';
import Makeup from './components/Makeup';

import Skin from './components/Skin';
import Combos from './components/Combos';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart"
import ErrorPage from './components/ErrorPage';


const App = () => {
  return (
    <div>
       <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <CartProvider>
      <BrowserRouter>

      <ScrollToTop />
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/haircare" element={<Hair />} />
    <Route path="/skincare" element={<Skin />} />
    <Route path="/fragrances" element={<Fragrances />} />
    <Route path="/makeup" element={<Makeup />} />
    <Route path="/bestsellers" element={<Best />} />
    <Route path="/kits-combos" element={<Combos />} />
    <Route path="/login" element={<Register />} />
    
    <Route path='/cart' element={<Cart />}></Route>
    
    

  </Routes>
</BrowserRouter>


     
      {/* <Home/> */}

      {/* <Register /> */}
      {/* <Navbar/> */}
      {/* <Combos /> */}
      {/* <Hair />  */}
      {/* <Makeup /> */}
      {/* <Fragrances /> */}
      {/* <Best /> */}
      {/* <Cart /> */}
      <ErrorPage/>
    </CartProvider>
    </div>
  )
}

export default App