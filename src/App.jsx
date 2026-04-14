
import React, { useEffect } from 'react'

import {
  
 
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Shipping from './pages/Shipping';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import SignIN from './pages/SignIN';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import CheckOut from './pages/CheckOut';
import Return from './pages/Return';
import Faqs from './pages/Faqs';
const Layout = () => {
  return (
 <>
       <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};





const App = () => {
  const dark = useSelector((state)=>state.darkReducer.darkMode)

    const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/ship" element={<Shipping />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/cart" element={<Cart />}></Route> 
<Route path="/product/:id" element={<ProductDetails />} />
<Route path="/return" element={<Return />} />
<Route path="/faq" element={<Faqs />} />
        </Route>

        <Route path="/sign" element={<SignIN/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/check" element={<CheckOut/>}></Route>
       </Route>
    )
  );

  

  useEffect(()=>{
    document.documentElement.classList.toggle('dark', dark);
  },[dark])
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router}></RouterProvider>
  
    </div>
  )
}

export default App


