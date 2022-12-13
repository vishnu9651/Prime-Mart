import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Homepage from "./Homepage";
import Login from "./Login";
import Signup from "./Signup";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        {/*  <Route path="/" element={}></Route> */}
      </Routes>
    </div>
  );
};

export default MainRoutes;
