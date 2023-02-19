import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import SearchBar from './components/SearchBar';
import { DataProvider } from './context/Datacontext';

function App() {
  return (
  <DataProvider>
    <Router>
      <div className='Navbar'>
        <img src='#' alt='Not imagen found'></img>
        <div className='navbar_address'>User Address</div>
        <SearchBar/>

      </div>
    </Router>
   </DataProvider>
  );
}

export default App;
