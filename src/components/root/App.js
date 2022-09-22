import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";


function App() {
  return (
    <Container >
      <Navi/>
      <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/product" element={<DashBoard/>}/>
        <Route path="/saveproduct" element={<AddOrUpdateProduct/>}/>
        <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct/>}/>
        <Route path="/cart" element={<CartDetail/>}/>
        <Route element={<NotFound/>}/>
      </Routes>
    
    </Container>
  );
}

export default App;
