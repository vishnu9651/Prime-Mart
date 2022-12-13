import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/cart">Cart</Link>
      {/* <Link to="/payment">Cart</Link> */}
    </div>
  );
};

export default Navbar;
