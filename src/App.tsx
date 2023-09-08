import {Route, Routes} from "react-router-dom";
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import "./App.sass"
import CatalogContextProvider from './ContextProviders/catalogContextProvider'
import Catalog from './components/catalog/catalog';
import CartContextProvider from './ContextProviders/cartContextProvider'
import Home from "./components/home/home";
import Shipping from "./components/shipping/shipping";
import Contacts from "./components/contacts/contacts";
import Cart from "./components/cart/cart";
import DescriptionContentProvider from "./ContextProviders/productDescriptionContextProvider";
import Description from "./components/description/description";
import { useEffect } from "react";
import AdminPanel from "./components/adminpanel/adminpanel";
import AdminProductContextProvider from "./ContextProviders/adminProductContextProvider";

function App() {

  useEffect(() =>{
    document.title="Fakel.by"
  })

  return (
    <div id="App">
      <CartContextProvider>
      <DescriptionContentProvider>
      <Cart/>
      <Description/>
        <Navbar/>
        <AdminProductContextProvider>
          <CatalogContextProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog" element= {<Catalog/>}/>
            <Route path="/shipping" element= {<Shipping/>}/>
            <Route path="/contacts" element= {<Contacts/>}/>
            <Route path="/admin" element={<AdminPanel/>}/>
          </Routes>      
          </CatalogContextProvider>
        </AdminProductContextProvider>
        </DescriptionContentProvider>
      </CartContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
