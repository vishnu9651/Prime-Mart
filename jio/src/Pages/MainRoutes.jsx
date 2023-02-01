import React from "react";
import { Route, Routes } from "react-router-dom";
//import Bakery from "./AllProductPage/Bakery";
import Cart from "./Cart";
import Homepage from "./Homepage";
import Signup from "./Signup";
import PaymentPage from "./PaymentPage";

import Login from "./Login";
import Fashion from "./Fashion";
import Electronics from "./Elecatronics";
import Grocery from "./Gorcery";
import Privateroute from "../Components/Privateroute";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/grocery" element={<Grocery/>}></Route>
        <Route path="/fashion" element={<Fashion/>}></Route>
        <Route path="/electronics" element={<Electronics/>}></Route>        
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/cart" element={<Privateroute><Cart /> </Privateroute>}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
