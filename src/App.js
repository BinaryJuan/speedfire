import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NotFound from './components/NotFound/NotFound'
import ExampleText from './components/ExampleText/ExampleText'
import Us from './components/Us/Us'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ExampleText />} />
            <Route path='/us' element={<Us />} />
            <Route path='/games/:categoryID' element={<ItemListContainer greeting={''} />} />
            <Route path='/item/:productID' element={<ItemDetailContainer />} />
            <Route path='/contact' element={<ExampleText />} />
            <Route path='/cart' element={<ExampleText />} />
            <Route path='*' element={<NotFound message={'Page not found :('} />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
