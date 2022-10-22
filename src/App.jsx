import { Route, Routes } from 'react-router-dom';
import TopMovies from './pages/TopMovies';
import NavBar from './components/Navbar/NavBar';
import ItemDetails from './pages/ItemDetails/ItemDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<TopMovies />} />
        <Route path="/item-details/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
