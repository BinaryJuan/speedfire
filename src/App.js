import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer id="GamesPC" greeting={'PC'} filter={'PC'} />
      <ItemListContainer id="GamesPS" greeting={'Playstation'} filter={'PS'} />
      <ItemListContainer id="GamesXBOX" greeting={'XBOX'} filter={'XBOX'} />
    </div>
  );
}

export default App;
