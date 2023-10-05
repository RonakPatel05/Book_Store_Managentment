
import Navbar from './components/Navbar';
import './App.css';
// import './images/';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
    
} from "react-router-dom";
import Books from "./pages/Book";
import AddBook from './pages/AddBook';
import Footer from './components/Footer';
function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/books' element={<Books/>}/>
      <Route path='/addbooks' element={<AddBook/>}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
