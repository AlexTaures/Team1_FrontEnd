import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import SearchBar from './components/SearchBar';
import { DataProvider } from './context/Datacontext';
import logo from "./img/amazont.png";
import LoginIcon from './components/LoginIcon';
import CartIcon from "./components/CartIcon";
import Login from './components/Login';
import DashboardAdmin from './components/DashboardAdmin';

function App() {
  
  return (
  <DataProvider>
    <Router>
      <div className='Navbar'>
        <NavLink to='/' className='navlink'><img src={logo} alt='Not imagen found' className='logo' width='100px'></img></NavLink>
        <SearchBar/>
        <NavLink to='/account' className='navlink'><LoginIcon/></NavLink>
        <NavLink to='/shopping' className='navlink'><CartIcon/></NavLink>
        <NavLink to='/admin' className='navlink'>Dash</NavLink>
        
      </div>

      <Routes>
          <Route exact path="/account" element={
            <Login/>
          }/>

          <Route exact path="/shopping" element={
              <div>Shopping cart component</div>    
          }/>
          <Route exact path="/admin" element={
              <DashboardAdmin/>    
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
