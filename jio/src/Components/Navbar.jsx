import React from "react";
import { Link } from "react-router-dom";
import NavbarVishnu from "../HomePageVishnu/NavbarVishnu/NavbarVishnu";
import TabsVishnu from "../HomePageVishnu/NavbarVishnu/TabsVishnu";

const Navbar = () => {
  return (
    <div>
      <NavbarVishnu  />
      <TabsVishnu />
    </div>
  );
};

export default Navbar;
