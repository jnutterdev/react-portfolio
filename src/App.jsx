import './App.css';
import "nes.css/css/nes.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Header from './components/header';

function App() {
 

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='' element={<Home/>} />
          <Route path='about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
