import React from "react";
import { Route, Routes } from "react-router-dom";
//import Bakery from "./AllProductPage/Bakery";
import Cart from "./Cart";
import Homepage from "./Homepage";
import Signup from "./Signup";
import PaymentPage from "./PaymentPage";
import Product from "./Product";
import Login from "./Login";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/product/:jiobrand" element={<Product/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
