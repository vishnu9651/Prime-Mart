import "./App.css";
import CartL from "./Cartpage/CartL";
import Navbar from "./Components/Navbar";
import Footer from "./HomePageVishnu/FooterVishnu/FooterVishnu";
import SearchVishnu from "./HomePageVishnu/NavbarVishnu/SearchVishnu";
import MainRoutes from "./Pages/MainRoutes";

import { Search } from "./Pages/SingleProductPage.jsx/Search";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <MainRoutes />
      <Footer />

    </div>
  );
}

export default App;
