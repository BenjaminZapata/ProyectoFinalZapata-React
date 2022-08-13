import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Men from './components/Pages/Men';
import Women from './components/Pages/Women';
import Kids from './components/Pages/Kids';
import Checkout from './components/Pages/Checkout';
import ItemDetailContainer from './components/Store/ItemDetailContainer';
import CartProvider from './components/Context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/category/men' element={<Men />} />
          <Route exact path='/category/women' element={<Women />} />
          <Route exact path='/category/kids' element={<Kids />} />
          <Route exact path='/checkout' element={<Checkout />} /> 
          <Route path='*' element={<h1>ERROR 404 - Pagina no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
