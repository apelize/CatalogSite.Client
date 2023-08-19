import {Route, Routes} from "react-router-dom";
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import "./App.sass"
import CatalogContextProvider from './ContextProviders/catalogContentProvider'
import Catalog from './components/catalog/catalog';
import CartContextProvider from './ContextProviders/cartItemsProvider'

function App() {

  
  return (
    <div id="App">
      <Navbar/>
      <CatalogContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<></>}/>
            <Route path="/catalog" element= {<Catalog/>}/>
          </Routes>
        </CartContextProvider>
      </CatalogContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
