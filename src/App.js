import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

const App = () => {
  const handleOnAdd = (quantity) => {
    if (quantity > 0) {
      console.log(`Se agregaron ${quantity} producto/s.`)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer greeting={'Welcome to Speedfire'} />
      <ItemCount initial={0} stock={20} onAdd={handleOnAdd} />
    </div>
  );
}

export default App;
