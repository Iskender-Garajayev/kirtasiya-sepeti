import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import './App.css';
import Galery from './pages/Galery/Galery';
import AboutUs from './pages/About/AboutUs';
import Menu from './pages/Menu/Menu';
import Contacts from './pages/Contacts/Contacts';
import User from './adminDasboard/pages/User';
import AdminDashboardHome from './adminDasboard/components/home/AdminDashboardHome';
import Sparis from './adminDasboard/pages/Sparis';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/galery' element={<Galery/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/contacts' element={<Contacts/>}/>

            {/* Amin dashboard  */}

          <Route path='/admin' element={<AdminDashboardHome/>}/>
          <Route path='/admin/user' element={<User/>} />
          <Route path='/admin/sparis' element={<Sparis/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
