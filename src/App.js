import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import Us from './components/Us/Us'
import Help from './components/Help/Help'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'
import ScrollTop from './components/ScrollTop/ScrollTop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/us' element={<Us />} />
              <Route path='/games/:categoryID' element={<ItemListContainer greeting={''} />} />
              <Route path='/item/:productID' element={<ItemDetailContainer />} />
              <Route path='/help' element={<Help />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />}></Route>
              <Route path='*' element={<NotFound message={'Page not found :('} />} />
            </Routes>
            <Footer />
            <ToastContainer />
          </BrowserRouter>
          <ScrollTop />
        </CartContextProvider>
      </header>
    </div>
  );
}

export default App;