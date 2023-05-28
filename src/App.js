import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Basket from "./components/Basket";
import Favorite from "./components/Favorite";
import Product from "./components/Product";
import ProductDetails from "./components/Product/ProductDetails";

function App() {
  return (
    <div className="App">
          <Header/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/basket"} element={<Basket/>}/>
            <Route path={"/favorite"} element={<Favorite/>}/>
            <Route path={"/product"} element={<Product/>}/>
            <Route path={"/product/details/:productId"} element={<ProductDetails/>}/>
            {/*<Route path={"/favorite"} element={<Favorite/>}/>*/}
        </Routes>
    </div>
  );
}

export default App;
