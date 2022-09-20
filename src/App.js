import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components 
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/footer';

// Context
import { CartProvider } from './Context/cartContext';

//views 
import Home from './Views/Home/Home';
import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer';
import Cart from './Views/Cart/cart';
import Categories from './Views/categories/categories';
import ItemListContainer from './components/itemListContainer/itemListContainer';

const App = () => {
  return (
    <Router>
      <CartProvider>
    <div className='main'>  
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />
          <Route path='/cart' element= {<Cart/>} />
          <Route path='/categorie/:type' element= {<Categories/>} />
          <Route path='/products' element= {<ItemListContainer/>} />
        </Routes>
        <Footer/>
    </div>
    </CartProvider>
    </Router>
    );

};

export default App;
