
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Navbar from './Navbar/Navbar';
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/about' Component={About}/>
    <Route path='/contact' Component={Contact}/>
   </Routes>
   </>
    
  );
}

export default App;