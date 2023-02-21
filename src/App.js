import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import SearchBar from './components/SearchBar';
import { DataProvider } from './context/DataContext';
import logo from "./img/amazont.png";
import Login from './components/Login';
import Cart from "./components/Cart";

function App() {
  
  return (
  <DataProvider>
    <Router>
      <div className='Navbar'>
        <NavLink to='/' className='navlink'><img src={logo} alt='Not imagen found' className='logo' width='100px'></img></NavLink>
        <SearchBar/>
        <NavLink to='/account' className='navlink'><Login/></NavLink>
        <NavLink to='/shopping' className='navlink'><Cart/></NavLink>
        
      </div>

      <Routes>
          <Route exact path="/account" element={
            <div>Account page component</div>
          }/>

          <Route exact path="/shopping" element={
              <div>Shopping cart component</div>    
          }/>

          <Route exact path="/" element={
              <div>Home page component</div>
          }/>

      </Routes>
    </Router>
   </DataProvider>
  );
}

export default App;
