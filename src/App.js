import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './components/contexts/CartContext';
import NavBar from './components/navbar/NavBar';
import Home from './components/pages/home/Home';
import ItemDetailContainer from './components/pages/products/ItemDetailContainer';
import Category from './components/pages/category/Category';
import Checkout from './components/pages/checkout/Checkout';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/category/men' element={<Category gender={'men'} />} />
          <Route exact path='/category/women' element={<Category gender={'women'} />} />
          <Route exact path='/category/children' element={<Category gender={'children'} />} />
          <Route exact path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
