import { useReducer } from "react";

import "./assets/all.scss";
import Navbar from "./comopnets/Navbar";
import Products from "./comopnets/Products";
import Carts from "./comopnets/Cart";
import { CartContent, cartReducer, cartInit } from "./store";



function App() {
  
  const reducer = useReducer(cartReducer, cartInit)


  return (
    <CartContent.Provider value={reducer}>
    <Navbar></Navbar>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-7">
          <Products></Products>
        </div>
        <div className="col-md-5">
          <Carts></Carts>
        </div>
      </div>
    </div>
    </CartContent.Provider>
  )
}



export default App
