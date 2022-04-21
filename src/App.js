import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NotFound from './components/NotFound/NotFound'
import ExampleText from './components/ExampleText/ExampleText'
import Us from './components/Us/Us'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ExampleText />} />
              <Route path='/us' element={<Us />} />
              <Route path='/games/:categoryID' element={<ItemListContainer greeting={''} />} />
              <Route path='/item/:productID' element={<ItemDetailContainer />} />
              <Route path='/contact' element={<ExampleText />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<NotFound message={'Page not found :('} />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </header>
    </div>
  );
}

export default App;