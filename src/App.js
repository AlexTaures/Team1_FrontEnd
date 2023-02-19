import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import SearchBar from './components/SearchBar';
import { DataProvider } from './context/Datacontext';
import logo from "./img/amazont.png";

function App() {
  
  return (
  <DataProvider>
    <Router>
      <div className='Navbar'>
        <NavLink to='/' className='navlink'><img src={logo} alt='Not imagen found' className='logo' width='100px'></img></NavLink>
        <SearchBar/>
        <NavLink to='/account' className='navlink'><i class="fa-solid fa-user"></i></NavLink>
        <NavLink to='/shopping' className='navlink'><i class="fa-solid fa-cart-shopping"></i></NavLink>
        
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
