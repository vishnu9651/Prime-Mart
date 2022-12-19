import "./App.css";
import CartL from "./Cartpage/CartL";
import Navbar from "./Components/Navbar";
import Footer from "./HomePageVishnu/FooterVishnu/FooterVishnu";
import MainRoutes from "./Pages/MainRoutes";
import Product from "./Pages/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />

      {/* <Product/> */}
    </div>
  );
}

export default App;
