import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import './App.css';
import Galery from './pages/Galery/Galery';
import AboutUs from './pages/About/AboutUs';
import Menu from './pages/Menu/Menu';
import Contacts from './pages/Contacts/Contacts';

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
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
