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

function App() {

  useEffect(() =>{
    document.title="Torch.by"
  })

  return (
    <div id="App">
      <CartContextProvider>
      <DescriptionContentProvider>
      <Cart/>
      <Description/>
        <Navbar/>
        <CatalogContextProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog" element= {<Catalog/>}/>
            <Route path="/shipping" element= {<Shipping/>}/>
            <Route path="/contacts" element= {<Contacts/>}/>
          </Routes>      
        </CatalogContextProvider>
        </DescriptionContentProvider>
      </CartContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
